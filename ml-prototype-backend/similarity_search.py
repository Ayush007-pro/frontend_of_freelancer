import os
import fitz
from dotenv import load_dotenv
from sentence_transformers import SentenceTransformer, util
from pinecone import Pinecone, ServerlessSpec
from langchain_core.prompts import ChatPromptTemplate
from langchain_community.chat_models import ChatOllama
import shutil

llm = ChatOllama(model="llama3.2")
load_dotenv()
api_key = os.getenv("API_KEY")

pc = Pinecone(api_key=api_key)

index_name = "freelancer-resume"


model = SentenceTransformer('all-MiniLM-L6-v2')

def infer_query(job_post, pdf_folder, query_text):
    query_embedding = model.encode(query_text).tolist()
    index = pc.Index(index_name)

    results = index.query(
        vector=query_embedding,
        include_metadata=True,
        filter={"job_post": job_post}, 
        top_k= 1000
    )
    returned_array = []
    for match in results['matches']:
        print(f"🔍 Score: {match['score']:.4f}")
        array = []
        
        original_text = match['metadata']['original']
        
        messages_1 = [
        ("system", 
        """
        You are an efficient and professional hiring assistant.

        Given a resume, your task is to concisely summarize the candidate's profile. Focus only on:
        - Notable technical projects (in 2–3 lines total)
        - 5 short, focused interview questions directly related to their experience

        Do **not** repeat the resume content word-for-word. Keep the tone professional, avoid filler, and do **not** explain the purpose of the questions.

        Format:

        **Summary:**
        <concise summary here>

        **Interview Questions:**
        1. <question>
        2. <question>
        ...
        """),

        ("human", 
        "Here is the resume:\n{original_text}")
        ]   
        
        prompt_template_1 = ChatPromptTemplate.from_messages(messages_1)
        
        
        messages_2 = [
            ("system",
            """
            You are an expert hiring assistant.

            Your task is to extract only **real, technical skills** from a resume — e.g., Python, ReactJS, MongoDB, AWS, TensorFlow.

            ✅ Include:
            - Programming languages
            - Frameworks
            - Libraries
            - Cloud platforms
            - APIs
            - DevOps tools
            - Databases
            - ML/DL tools

            ❌ Do NOT include:
            - Tools like VS Code, Google Docs, Excel
            - Non-skills like Datasets, Projects, Resume, Internet
            - Job roles, degrees, certifications, company names
            - General phrases like “software,” “machine learning models,” “debugging,” etc.

            Return a **clean, comma-separated list** of **only technical skills**. No headings, no explanation, no bullet points.

            Example input:
            ---
            "Experienced developer with expertise in Python, Flask, and TensorFlow. Worked on real-time data pipelines using Kafka and deployed models with Docker and AWS. Comfortable with using VS Code, GitHub, and managing datasets."

            Output:
            Python, Flask, TensorFlow, Kafka, Docker, AWS
            """), 

            ("human", 
            "Here is the resume:\n{original_text}")
        ]
        
        
        prompt_template_2 = ChatPromptTemplate.from_messages(messages_2)
        
        chain_2 = prompt_template_2 | llm
        result_2 = chain_2.invoke({"original_text": original_text})
        
        skills = [skill.strip() for skill in result_2.content.split(",") if skill.strip()]
        
        resume_embedding = model.encode(original_text)
        
        skill_array = []
        for skill in skills:
            skill_embedding = model.encode(skill)
            similarity = util.cos_sim(skill_embedding, resume_embedding).item()
            print(f"   {skill:20s} → {similarity:.4f}")
            skill_array.append([skill, similarity])
        
        chain_1 = prompt_template_1 | llm
        result_1 = chain_1.invoke({"original_text": original_text})
        
        print(result_1.content)
        
        array.append({
        "id": match['id'], 
        "confidence score": match['score'],
        "skills": skill_array,
        "summary": result_1.content
        })
        returned_array.append(array)
        
    print(f"🧹 Deleted extracted folder: {pdf_folder}")
    shutil.rmtree(pdf_folder)
    return {"results": returned_array}

        
        
        
        


