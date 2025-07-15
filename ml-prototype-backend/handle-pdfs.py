import zipfile
import os
from load_texts_in_db import load_texts
zip_path = 'testing_purposes.zip'

extract_to = 'extracted_pdfs'

query_text = """
Looking for a software engineer skilled in Full Stack Developer, Machine Learning and Deep Learning.
"""

os.makedirs(extract_to, exist_ok=True)

with zipfile.ZipFile(zip_path, 'r') as zip_ref:
    for file in zip_ref.namelist():
        if file.lower().endswith('.pdf'):
            print(f'Extracting {file}...')
            zip_ref.extract(file, extract_to)
            
load_texts(extract_to, query_text)
