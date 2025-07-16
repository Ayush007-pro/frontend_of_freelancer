from pinecone import Pinecone
import os
from dotenv import load_dotenv

def delete_job_post_vectors(job_post):
    load_dotenv()
    pc = Pinecone(api_key=os.getenv("API_KEY"))
    index = pc.Index("freelancer-resume") 
    try:
        index.delete(
            filter={"job_post": job_post}
        )
        print(f"🗑️ Deleted all vectors with job_post = '{job_post}' from Pinecone.")
    except Exception as e:
        print(f"⚠️ Error deleting from Pinecone: {e}")
