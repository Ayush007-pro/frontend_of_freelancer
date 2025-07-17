from sqlalchemy import create_engine, Column, Integer, String, Text, DateTime, Float, JSON
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from datetime import datetime
import os
from dotenv import load_dotenv

load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL")

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

class JobPost(Base):
    __tablename__ = "job_posts"
    
    id = Column(Integer, primary_key=True, index=True)
    job_post_name = Column(String, unique=True, index=True, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

class UploadSession(Base):
    __tablename__ = "upload_sessions"
    
    id = Column(Integer, primary_key=True, index=True)
    job_post = Column(String, nullable=False)
    query = Column(Text, nullable=False)
    filename = Column(String, nullable=False)
    file_size = Column(Integer)
    processing_result = Column(JSON)
    status = Column(String, default="processing")  # processing, completed, failed
    created_at = Column(DateTime, default=datetime.utcnow)
    completed_at = Column(DateTime, nullable=True)
    error_message = Column(Text, nullable=True)

class SimilarityResult(Base):
    __tablename__ = "similarity_results"
    
    id = Column(Integer, primary_key=True, index=True)
    upload_session_id = Column(Integer, nullable=False)
    document_name = Column(String, nullable=False)
    similarity_score = Column(Float, nullable=False)
    content_snippet = Column(Text)
    metadata = Column(JSON)
    created_at = Column(DateTime, default=datetime.utcnow)

def create_tables():
    Base.metadata.create_all(bind=engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
