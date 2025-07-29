-- Create tables for the ML prototype backend

-- Job Posts table
CREATE TABLE IF NOT EXISTS job_posts (
    id SERIAL PRIMARY KEY,
    job_post_name VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Upload Sessions table
CREATE TABLE IF NOT EXISTS upload_sessions (
    id SERIAL PRIMARY KEY,
    job_post VARCHAR(255) NOT NULL,
    query TEXT NOT NULL,
    filename VARCHAR(255) NOT NULL,
    file_size INTEGER,
    zip_file_url TEXT, -- New column to store the URL of the uploaded zip file
    processing_result JSONB,
    status VARCHAR(50) DEFAULT 'processing',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    completed_at TIMESTAMP WITH TIME ZONE,
    error_message TEXT
);

-- Similarity Results table
CREATE TABLE IF NOT EXISTS similarity_results (
    id SERIAL PRIMARY KEY,
    upload_session_id INTEGER NOT NULL,
    document_name VARCHAR(255) NOT NULL,
    similarity_score DECIMAL(5,4) NOT NULL,
    content_snippet TEXT,
    metadata JSONB,
    pdf_url TEXT, -- New column to store the URL of the extracted PDF
    llm_summary TEXT, -- New column to store the LLM-generated summary and questions
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    FOREIGN KEY (upload_session_id) REFERENCES upload_sessions(id) ON DELETE CASCADE
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_job_posts_name ON job_posts(job_post_name);
CREATE INDEX IF NOT EXISTS idx_upload_sessions_status ON upload_sessions(status);
CREATE INDEX IF NOT EXISTS idx_upload_sessions_created_at ON upload_sessions(created_at);
CREATE INDEX IF NOT EXISTS idx_similarity_results_session_id ON similarity_results(upload_session_id);
CREATE INDEX IF NOT EXISTS idx_similarity_results_score ON similarity_results(similarity_score);

-- Enable Row Level Security (RLS)
ALTER TABLE job_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE upload_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE similarity_results ENABLE ROW LEVEL SECURITY;

-- Create policies (adjust based on your authentication needs)
-- For now, allowing all operations (you may want to restrict this in production)
DROP POLICY IF EXISTS "Allow all operations on job_posts" ON job_posts;
CREATE POLICY "Allow all operations on job_posts" ON job_posts FOR ALL USING (true);

DROP POLICY IF EXISTS "Allow all operations on upload_sessions" ON upload_sessions;
CREATE POLICY "Allow all operations on upload_sessions" ON upload_sessions FOR ALL USING (true);

DROP POLICY IF EXISTS "Allow all operations on similarity_results" ON similarity_results;
CREATE POLICY "Allow all operations on similarity_results" ON similarity_results FOR ALL USING (true);

-- Function to automatically update the updated_at timestamp
DROP FUNCTION IF EXISTS update_updated_at_column() CASCADE;
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger to automatically update updated_at on job_posts
DROP TRIGGER IF EXISTS update_job_posts_updated_at ON job_posts;
CREATE TRIGGER update_job_posts_updated_at BEFORE UPDATE
    ON job_posts FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();