# Supabase Database Setup Instructions

## Prerequisites
1. Create a Supabase account at [supabase.com](https://supabase.com)
2. Create a new project in your Supabase dashboard

## Database Setup

### 1. Environment Configuration
Update your `.env` file with your Supabase credentials:

```env
# Supabase Configuration
SUPABASE_URL=https://your-project-ref.supabase.co
SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here

# Database Configuration  
DATABASE_URL=postgresql://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT-REF].supabase.co:5432/postgres
```

### 2. Create Database Schema
1. Go to your Supabase project dashboard
2. Navigate to the SQL Editor
3. Copy and paste the contents of `supabase_schema.sql`
4. Execute the SQL to create all tables and indexes

### 3. Install Dependencies
```bash
pip install -r requirements.txt
```

## Database Schema

### Tables Created:

#### `job_posts`
- `id` (SERIAL PRIMARY KEY)
- `job_post_name` (VARCHAR(255) UNIQUE)
- `created_at` (TIMESTAMP)
- `updated_at` (TIMESTAMP)

#### `upload_sessions`
- `id` (SERIAL PRIMARY KEY)
- `job_post` (VARCHAR(255))
- `query` (TEXT)
- `filename` (VARCHAR(255))
- `file_size` (INTEGER)
- `processing_result` (JSONB)
- `status` (VARCHAR(50)) - 'processing', 'completed', 'failed'
- `created_at` (TIMESTAMP)
- `completed_at` (TIMESTAMP)
- `error_message` (TEXT)

#### `similarity_results`
- `id` (SERIAL PRIMARY KEY)
- `upload_session_id` (INTEGER, FK)
- `document_name` (VARCHAR(255))
- `similarity_score` (DECIMAL(5,4))
- `content_snippet` (TEXT)
- `metadata` (JSONB)
- `created_at` (TIMESTAMP)

## API Endpoints

### Upload and Processing
- `POST /upload-zip/` - Upload ZIP file and process documents
- Returns session ID and processing results

### Job Post Management
- `GET /get-all-available` - List all job posts
- `DELETE /job-posts/{job_post}` - Delete a job post

### Monitoring and Analytics
- `GET /upload-sessions/` - Get recent upload sessions
- `GET /upload-sessions/{session_id}/results` - Get similarity results for a session

## Data Flow

1. **File Upload**: User uploads ZIP file with job post and query
2. **Session Creation**: Upload session is created in database
3. **Processing**: Files are extracted and processed
4. **Results Storage**: Processing results and similarity scores are saved
5. **Cleanup**: Temporary files are removed

## Features Added

### Database Integration
- All operations now use Supabase instead of local JSON files
- Persistent storage of upload sessions and results
- Relationship tracking between sessions and similarity results

### Enhanced Monitoring
- Track upload session status (processing/completed/failed)
- Store processing times and error messages
- Analytics on similarity search results

### Error Handling
- Graceful error handling with database rollback
- Detailed error logging and status tracking
- Cleanup of temporary files even on failure

## Security Notes

- Row Level Security (RLS) is enabled on all tables
- Current policies allow all operations (adjust for production)
- Use service role key for server-side operations
- Store sensitive keys in environment variables

## Migration from File-based Storage

The old `job_post_registry.py` file-based approach has been replaced with:
- Database-backed job post storage
- Session tracking for each upload
- Detailed similarity result storage
- Better error handling and monitoring
