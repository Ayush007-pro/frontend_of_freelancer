from supabase import create_client, Client
from typing import List, Dict, Any, Optional
import os
from dotenv import load_dotenv
from datetime import datetime
import json

load_dotenv()

url: str = os.getenv("SUPABASE_URL")
key: str = os.getenv("SUPABASE_ANON_KEY")
supabase: Client = create_client(url, key)

class SupabaseService:
    def __init__(self):
        self.client = supabase

    # Job Posts Operations
    async def add_job_post(self, job_post_name: str) -> Dict[str, Any]:
        """Add a new job post to the database"""
        try:
            result = self.client.table("job_posts").insert({
                "job_post_name": job_post_name.strip(),
                "created_at": datetime.utcnow().isoformat(),
                "updated_at": datetime.utcnow().isoformat()
            }).execute()
            return {"success": True, "data": result.data}
        except Exception as e:
            return {"success": False, "error": str(e)}

    async def get_all_job_posts(self) -> List[Dict[str, Any]]:
        """Get all job posts from the database"""
        try:
            result = self.client.table("job_posts").select("*").execute()
            return result.data
        except Exception as e:
            print(f"Error fetching job posts: {e}")
            return []

    async def delete_job_post(self, job_post_name: str) -> bool:
        """Delete a job post from the database"""
        try:
            result = self.client.table("job_posts").delete().eq("job_post_name", job_post_name.strip()).execute()
            return len(result.data) > 0
        except Exception as e:
            print(f"Error deleting job post: {e}")
            return False

    # Upload Sessions Operations
    async def create_upload_session(self, job_post: str, query: str, filename: str, file_size: int = None) -> Dict[str, Any]:
        """Create a new upload session"""
        try:
            result = self.client.table("upload_sessions").insert({
                "job_post": job_post,
                "query": query,
                "filename": filename,
                "file_size": file_size,
                "status": "processing",
                "created_at": datetime.utcnow().isoformat()
            }).execute()
            return {"success": True, "data": result.data[0]}
        except Exception as e:
            return {"success": False, "error": str(e)}

    async def update_upload_session(self, session_id: int, processing_result: Dict[str, Any], status: str, error_message: str = None) -> bool:
        """Update upload session with results"""
        try:
            update_data = {
                "processing_result": processing_result,
                "status": status,
                "completed_at": datetime.utcnow().isoformat()
            }
            if error_message:
                update_data["error_message"] = error_message
                
            result = self.client.table("upload_sessions").update(update_data).eq("id", session_id).execute()
            return len(result.data) > 0
        except Exception as e:
            print(f"Error updating upload session: {e}")
            return False

    async def get_upload_sessions(self, limit: int = 50) -> List[Dict[str, Any]]:
        """Get recent upload sessions"""
        try:
            result = self.client.table("upload_sessions").select("*").order("created_at", desc=True).limit(limit).execute()
            return result.data
        except Exception as e:
            print(f"Error fetching upload sessions: {e}")
            return []

    # Similarity Results Operations
    async def save_similarity_results(self, upload_session_id: int, results: List[Dict[str, Any]]) -> bool:
        """Save similarity search results"""
        try:
            similarity_data = []
            for result in results:
                similarity_data.append({
                    "upload_session_id": upload_session_id,
                    "document_name": result.get("document_name", ""),
                    "similarity_score": result.get("similarity_score", 0.0),
                    "content_snippet": result.get("content_snippet", ""),
                    "metadata": result.get("metadata", {}),
                    "created_at": datetime.utcnow().isoformat()
                })
            
            result = self.client.table("similarity_results").insert(similarity_data).execute()
            return len(result.data) > 0
        except Exception as e:
            print(f"Error saving similarity results: {e}")
            return False

    async def get_similarity_results(self, upload_session_id: int) -> List[Dict[str, Any]]:
        """Get similarity results for a specific upload session"""
        try:
            result = self.client.table("similarity_results").select("*").eq("upload_session_id", upload_session_id).order("similarity_score", desc=True).execute()
            return result.data
        except Exception as e:
            print(f"Error fetching similarity results: {e}")
            return []

# Create a global instance
db_service = SupabaseService()
