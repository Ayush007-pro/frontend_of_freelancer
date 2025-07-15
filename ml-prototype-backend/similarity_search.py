import os
import fitz
from dotenv import load_dotenv
from sentence_transformers import SentenceTransformer, util
from pinecone import Pinecone, ServerlessSpec
from langchain_core.prompts import ChatPromptTemplate
from langchain_community.chat_models import ChatOllama


llm = ChatOllama(model="llama3")
load_dotenv()
api_key = os.getenv("API_KEY")

pc = Pinecone(api_key=api_key)

index_name = "freelancer-resume"
job_post = "test_1"
pdf_folder = 'extracted_pdfs'


model = SentenceTransformer('all-MiniLM-L6-v2')

def infer_query(query_text="I want a React JS Developer"):
    query_embedding = model.encode(query_text).tolist()
    index = pc.Index(index_name)

    results = index.query(
        vector=query_embedding,
        include_metadata=True,
        filter={"job_post": "test_1"},
        top_k= 1000
    )

    for match in results['matches']:
        print(f"🔍 Score: {match['score']:.4f}")
        
        original_text = match['metadata']['original']
        
        messages_1 = [
            ("system", 
            """
            You are a highly efficient and detail-oriented hiring assistant.
            
            Given a candidate’s resume, extract:
            - Key technical skills
            - Notable projects that directly demonstrate or complement these skills
            - 5 concise and targeted interview questions designed to assess the candidate’s claimed expertise
            
            Ensure the response is structured, professional, and impactful. Be concise — avoid repetition and filler.
            """),

            ("human", 
            "Here is the resume:\n{original_text}")
        ]
        
        prompt_template_1 = ChatPromptTemplate.from_messages(messages_1)
        
        
        messages_2 = [
            ("system", 
            """
            You are an expert hiring assistant.

            Your task is to extract **only the key technical skills** (e.g., ReactJS, MongoDB, AWS, TensorFlow) from the given resume.

            Return a comma-separated list of skills only — no explanations, no formatting, no headings.
            """),

            ("human", 
            "Here is the resume:\n{original_text}")
        ]
        
        
        prompt_template_2 = ChatPromptTemplate.from_messages(messages_2)
        
        chain_2 = prompt_template_2 | llm
        result_2 = chain_2.invoke({"original_text": original_text})
        
        skills = [skill.strip() for skill in result_2.content.split(",") if skill.strip()]
        
        resume_embedding = model.encode(original_text)
        
        for skill in skills:
            skill_embedding = model.encode(skill)
            similarity = util.cos_sim(skill_embedding, resume_embedding).item()
            print(f"   {skill:20s} → {similarity:.4f}")
        
        chain_1 = prompt_template_1 | llm
        result_1 = chain_1.invoke({"original_text": original_text})
        
        print(result_1.content)
        

        
        
        
        


