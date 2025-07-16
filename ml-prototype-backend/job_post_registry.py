from pinecone_deletion import delete_job_post_vectors
import json
import os

JOB_POST_JSON = "job_post_list.json"

def load_job_posts():
    if not os.path.exists(JOB_POST_JSON):
        return []
    with open(JOB_POST_JSON, "r") as f:
        return json.load(f)

def add_job_post(job_post):
    job_post = job_post.strip()
    job_posts = set(load_job_posts())
    job_posts.add(job_post)

    with open(JOB_POST_JSON, "w") as f:
        json.dump(sorted(job_posts), f, indent=4)

def save_job_posts(job_posts):
    with open(JOB_POST_JSON, "w") as f:
        json.dump(sorted(job_posts), f, indent=4)
        
def get_all_job_posts():
    return load_job_posts()

def delete_job_post(job_post):
    job_post = job_post.strip()
    job_posts = set(load_job_posts())
    if job_post in job_posts:
        job_posts.remove(job_post)
        save_job_posts(list(job_posts))
        
        delete_job_post_vectors(job_post)
        return True
    return False
