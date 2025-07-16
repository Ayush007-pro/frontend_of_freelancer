import zipfile
import os
from load_texts_in_db import load_texts

def infer_zip(saved_path, job_post, query):
    zip_path = saved_path

    extract_to = 'extracted_pdfs'
    # make this dynamic
    query_text = query

    os.makedirs(extract_to, exist_ok=True)

    with zipfile.ZipFile(zip_path, 'r') as zip_ref:
        for file in zip_ref.namelist():
            if file.lower().endswith('.pdf'):
                print(f'Extracting {file}...')
                zip_ref.extract(file, extract_to)
                
    final_returned = load_texts(extract_to, query_text, job_post)
    
    return final_returned
