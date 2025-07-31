from fastapi import FastAPI , File, UploadFile, Request, Form, HTTPException
import numpy as np
from pydantic import BaseModel
from typing import List, Optional
from fastapi.middleware.cors import CORSMiddleware
import shutil
import os
import sys
from dotenv import load_dotenv
from handle_pdfs import infer_zip

# Add the backend directory to the Python path
sys.path.append(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'backend'))
from supabase_service import db_service

# Load environment variables
load_dotenv()


api = FastAPI()

api.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@api.get('/')
def index():
    return {"message":"Hello World"}

UPLOAD_DIR = "uploaded_zips"

@api.post("/upload-zip/")
async def upload_zip(file: UploadFile = File(...),
                        job_post: str = Form(...),
                        query: str = Form(...)):
    if not file.filename.endswith(".zip"):
        return {"error": "Only .zip files are allowed"}
    
    os.makedirs(UPLOAD_DIR, exist_ok=True)
    
    saved_path = os.path.join(UPLOAD_DIR, file.filename)
    file_size = 0
    
    # Save the uploaded file and get file size
    with open(saved_path, "wb") as buffer:
        content = await file.read()
        file_size = len(content)
        buffer.write(content)
    
    # Create upload session in database
    session_result = await db_service.create_upload_session(
        job_post=job_post,
        query=query,
        filename=file.filename,
        file_size=file_size
    )
    
    if not session_result["success"]:
        return {"error": "Failed to create upload session", "details": session_result["error"]}
    
    session_id = session_result["data"]["id"]
    
    try:
        # Process the ZIP file
        result = infer_zip(saved_path, job_post, query)
        
        # Update session with success
        await db_service.update_upload_session(
            session_id=session_id,
            processing_result=result,
            status="completed"
        )
        
        # Add job post to database
        await db_service.add_job_post(job_post)
        
        # Save similarity results if available
        if isinstance(result, dict) and "similarities" in result:
            await db_service.save_similarity_results(session_id, result["similarities"])
        
        # Clean up uploaded files
        shutil.rmtree(UPLOAD_DIR)
        
        return {
            "session_id": session_id,
            "result": result,
            "status": "completed"
        }
        
    except Exception as e:
        # Update session with error
        await db_service.update_upload_session(
            session_id=session_id,
            processing_result={},
            status="failed",
            error_message=str(e)
        )
        
        # Clean up uploaded files
        if os.path.exists(UPLOAD_DIR):
            shutil.rmtree(UPLOAD_DIR)
        
        raise HTTPException(status_code=500, detail=f"Processing failed: {str(e)}")

@api.get("/get-all-available") 
async def list_job_posts():
    returned_posts = await db_service.get_all_job_posts()
    if not returned_posts:
        returned_posts = "None"
    return {"job_posts": returned_posts} 

@api.delete("/job-posts/{job_post}")
async def remove_job_post(job_post: str):
    success = await db_service.delete_job_post(job_post)
    if success:
        return {"message": f"Job post '{job_post}' deleted successfully."}
    else:
        raise HTTPException(status_code=404, detail="Job post not found.")

@api.get("/upload-sessions/")
async def get_upload_sessions(limit: int = 50):
    """Get recent upload sessions for monitoring"""
    sessions = await db_service.get_upload_sessions(limit)
    return {"sessions": sessions}

@api.get("/upload-sessions/{session_id}/results")
async def get_session_results(session_id: int):
    """Get similarity results for a specific upload session"""
    results = await db_service.get_similarity_results(session_id)
    return {"session_id": session_id, "results": results}
    
    