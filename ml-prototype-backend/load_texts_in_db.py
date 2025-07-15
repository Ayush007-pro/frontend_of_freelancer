import os
import fitz
from dotenv import load_dotenv
from sentence_transformers import SentenceTransformer
from pinecone import Pinecone, ServerlessSpec
from similarity_search import infer_query

load_dotenv()
api_key = os.getenv("API_KEY")

pc = Pinecone(api_key=api_key)

model = SentenceTransformer('all-MiniLM-L6-v2')

def load_texts(extract_to, query):
    index_name = "freelancer-resume"
    job_post = "test_1"
    pdf_folder = extract_to

    if index_name not in pc.list_indexes().names():
        pc.create_index(
            name=index_name,
            dimension=384,  
            metric="cosine",
            spec=ServerlessSpec(cloud="aws", region="us-east-1")
        )
    print("📄 Indexes available:", pc.list_indexes().names())

    index = pc.Index(index_name)

    

    for filename in os.listdir(pdf_folder):
        if filename.endswith('.pdf'):
            pdf_path = os.path.join(pdf_folder, filename)
            print(f"Reading: {filename}")
            
            with fitz.open(pdf_path) as doc:
                text = ''
                for page in doc:
                    text += page.get_text()
            
            embedding = model.encode(text).tolist()
            
            metadata = {
                "source": filename,
                "original": text,
                "job_post": job_post
            }
            
            index.upsert(vectors=[{
                "id": f"{job_post}-{filename}",
                "values": embedding,
                "metadata": metadata
            }])

            print(f"Uploaded {filename} ✅")
            
    infer_query(query)
