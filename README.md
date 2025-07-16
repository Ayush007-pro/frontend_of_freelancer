# Smart AI Freelancer

## Overview
Smart AI Freelancer is a client-side web application designed to streamline the process of posting job listings, managing resumes, and leveraging AI to evaluate candidates. Clients can create job postings, upload resume zip files, and use AI-driven features powered by LangChain to generate confidence scores, summaries, and interview questions for each resume. The system supports filtering resumes by top percentiles (10%, 20%, 30%) and provides notifications for processing updates. Files are stored in Blob Storage, embeddings for semantic search are managed in Cosmos DB, and the backend is built with FastAPI (tentative).

## Features
- **User Authentication**: Secure login and signup for clients.
- **Job Management**: Create and view job postings with detailed descriptions and resume uploads.
- **Resume Processing**: Upload resume zip files, extract individual PDFs, and generate AI-driven insights (confidence scores, summaries, top 10 questions) using LangChain.
- **Filtering**: Filter resumes by top 10%, 20%, or 30% based on AI-generated confidence scores.
- **Notifications**: Receive updates on resume processing and job status changes.
- **Semantic Search**: Leverage Cosmos DB embeddings for matching resumes to job requirements.
- **Theme Customization**: Update user interface theme preferences.

## Tech Stack
- **Frontend**: React.js, Next.js, TypeScript, React Native (for potential mobile app).
- **Backend**: FastAPI (Python, tentative) for RESTful API endpoints.
- **AI/ML**: LangChain for LLM-based resume analysis (summaries, scores, questions).
- **Storage**: Blob Storage for resume PDFs and zip files.
- **Database**: PostgreSQL for relational data; Cosmos DB for embeddings and semantic search.
- **Additional Tools**: TensorFlow/Hugging Face (for potential AI enhancements), Solidity (for future blockchain features).

## API Endpoints
### 1. User Authentication
- **POST /auth/login**: Authenticates a user.
- **POST /auth/signup**: Registers a new user account.

### 2. Jobs
- **GET /jobs**: Retrieves job postings with filtering options (e.g., status, date).
- **POST /jobs/create**: Creates a new job posting.
- **POST /jobs/:id/resumes**: Uploads resume zip files to Blob Storage for a job.
- **POST /jobs/:id/resumes/:rid/request**: Requests AI processing for a specific resume using LangChain.
- **PATCH /jobs/:id/resumes/:rid/respond**: Accepts or rejects a resume processing request, updating Cosmos DB embeddings.

### 3. Notifications
- **GET /notifications**: Fetches notifications for the logged-in user.

### 4. Settings
- **PATCH /settings/theme**: Updates user theme preferences.

## Database Schema
The database is designed using PostgreSQL for relational data and Cosmos DB for embeddings. Key entities include:
- **Users**: Stores client credentials and metadata.
- **JobPostings**: Manages job details and links to Blob Storage URLs.
- **Resumes**: Stores resume data, AI-generated outputs, and Cosmos DB embedding IDs.
- **Questions**: Contains AI-generated interview questions for each resume.
- **Notifications**: Tracks user notifications for system updates.

The schema is visualized using DBML on dbdiagram.io, with relationships like `users > job_postings` and `job_postings > resumes`.

## Setup Instructions
1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd smart-ai-freelancer
   ```

2. **Backend Setup**:
   - Install Python dependencies (if using FastAPI):
     ```bash
     pip install fastapi uvicorn langchain
     ```
   - Configure Blob Storage (e.g., Azure Blob Storage) and set environment variables for connection strings.
   - Set up Cosmos DB for embeddings and configure access credentials.
   - Initialize PostgreSQL database using the provided DBML schema:
     ```bash
     psql -f database.sql
     ```

3. **Frontend Setup**:
   - Install Node.js dependencies:
     ```bash
     npm install
     ```
   - Configure environment variables for API endpoints and Blob Storage URLs.

4. **Run the Application**:
   - Start the FastAPI backend:
     ```bash
     uvicorn main:app --reload
     ```
   - Start the Next.js frontend:
     ```bash
     npm run dev
     ```

## Usage
1. **Register/Login**: Use `/auth/signup` or `/auth/login` to create or access a client account.
2. **Create Job Posting**: Navigate to "Post a Job," enter job details, and upload a resume zip file.
3. **View Jobs**: Access "My Posts" to see job history and select a job to view processed resumes.
4. **Process Resumes**: Request AI analysis for resumes, which generates confidence scores, summaries, and questions via LangChain.
5. **Filter and Download**: Filter resumes by top percentiles and download PDFs or questions.
6. **Check Notifications**: View updates in the "Notifications" section.

## Security Considerations
- **Authentication**: Use JWT or OAuth for secure user sessions.
- **Data Validation**: Sanitize inputs to prevent SQL injection or malicious file uploads.
- **Blob Storage**: Restrict access to resume files using signed URLs or access policies.
- **Cosmos DB**: Secure embedding data with role-based access control.
- **Rate Limiting**: Implement rate limits on API endpoints to prevent abuse.

## Gotchas
- Ensure Blob Storage has sufficient capacity for resume files and proper lifecycle policies for cleanup.
- LangChain prompt engineering requires tuning to balance accuracy and performance.
- Cosmos DB embeddings may need periodic updates to maintain search relevance.
- FastAPI (if used) requires proper CORS configuration for frontend integration.

## Future Enhancements
- Integrate blockchain (Solidity) for secure resume verification.
- Expand AI features with TensorFlow/Hugging Face for advanced resume analysis.
- Develop React Native mobile app for cross-platform access.
- Add real-time notifications using WebSockets.

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/YourFeature`).
3. Commit changes (`git commit -m 'Add YourFeature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License
This project is licensed under the MIT License.