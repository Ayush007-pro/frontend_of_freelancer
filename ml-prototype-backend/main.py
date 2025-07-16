from fastapi import FastAPI , File, UploadFile, Request, Form, HTTPException
import numpy as np
from pydantic import BaseModel
from typing import List, Optional
from fastapi.middleware.cors import CORSMiddleware
import shutil
import os
from handle_pdfs import infer_zip
from job_post_registry import add_job_post
from job_post_registry import get_all_job_posts
from job_post_registry import delete_job_post


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
    
    with open(saved_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)
        
    result = infer_zip(saved_path, job_post, query)
    
    add_job_post(job_post)
    
    shutil.rmtree(UPLOAD_DIR) 
    return result

@api.get("/get-all-available") 
def list_job_posts():
    returned_posts = get_all_job_posts()
    if not returned_posts:
        returned_posts = "None"
    return {"job_posts": returned_posts} 

@api.delete("/job-posts/{job_post}")
def remove_job_post(job_post: str):
    success = delete_job_post(job_post)
    if success:
        return {"message": f"Job post '{job_post}' deleted successfully."}
    else:
        raise HTTPException(status_code=404, detail="Job post not found.")
    
    