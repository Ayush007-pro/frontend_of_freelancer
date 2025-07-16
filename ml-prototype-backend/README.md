# 📄 Resume Matching Prototype (FastAPI + Pinecone + LLaMA3)

This backend lets you:

- Upload ZIP files containing PDF resumes
- Extract and embed them using `SentenceTransformer`
- Store the embeddings in Pinecone with metadata
- Query and summarize them using `LLaMA 3` locally via Ollama

---

## 🛠 Requirements

- Python 3.8+
- Ollama (for running LLaMA 3 locally)

### Install dependencies:
```bash
pip install fastapi uvicorn python-multipart sentence-transformers fitz pinecone-client python-dotenv requests
```

### Pull and run LLaMA 3 via Ollama:
```bash
ollama run llama3
```

---

## ⚙️ Setup

1. Clone the repo and navigate to the folder.
2. Create a `.env` file in the root directory:

```
API_KEY=your_pinecone_api_key
```

---

## 🚀 Run the API

```bash
uvicorn main:api --reload
```

Visit: [http://localhost:8000/docs](http://localhost:8000/docs) to test the API.

---

## 📂 Folder Structure

```
├── main.py                  # FastAPI app with endpoints
├── handle_pdfs.py           # Extracts ZIP, calls load_texts
├── load_texts_in_db.py      # Embeds PDFs, uploads to Pinecone
├── similarity_search.py     # LLaMA3-based summary + skills
├── job_post_registry.py     # Tracks job posts in a JSON file
├── job_post_list.json       # Stores job post names
├── .env                     # Your Pinecone API key
├── uploaded_zips/           # Temporary ZIP storage
├── extracted_pdfs/          # Extracted PDFs from ZIPs (also Temporary)
```

---

## 📌 API Endpoints

| Endpoint                    | Method | Description                          |
|-----------------------------|--------|--------------------------------------|
| `/upload-zip/`              | POST   | Upload ZIP + job_post + query        |
| `/get-all-available`        | GET    | List all job posts                   |
| `/remove_job_post     `     | DELETE | Delete a job post and vectors        |

---
