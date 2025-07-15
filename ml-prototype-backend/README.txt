This prototype extracts text from PDF resumes, generates embeddings using SentenceTransformer, and stores them in a Pinecone vector database. You can later use LLaMA 3 via Ollama for local querying.

Requirements:
---------------
- Python 3.8+
- pip install:
    - fitz (PyMuPDF)
    - sentence-transformers
    - pinecone-client
    - python-dotenv
    - requests (for interacting with Ollama)

- Ollama (for running LLaMA 3 locally):
  → https://ollama.com/

🛠 Setup:
--------
1. Clone the repo and navigate to the project folder.

2. Create a `.env` file with your Pinecone API key:

   Example `.env`:
   ---------------
   API_KEY=your_pinecone_api_key

3. Make sure your PDF resumes are inside the `extracted_pdfs/` folder.

4. Install and start Ollama, and pull LLaMA 3:

🚀 Run the Prototype:
---------------------
Run the handle-pdfs.py file