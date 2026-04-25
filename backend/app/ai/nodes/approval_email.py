from langchain_groq import ChatGroq
from langchain_core.messages import HumanMessage
import os

llm = ChatGroq(
    temperature=0,
    model_name="llama-3.1-8b-instant",
    api_key=os.getenv("GROQ_API_KEY")
)

def generate_email(request, risk_score):

    approve_link = f"http://localhost:8000/approve?user_id={request.user_id}&decision=approve"
    deny_link = f"http://localhost:8000/approve?user_id={request.user_id}&decision=deny"

    prompt = f"""
    Write a professional HTML email.

    Include:
    - User ID: {request.user_id}
    - Resource: {request.resource}
    - Access Level: {request.access_level}
    - Reason: {request.reason}
    - Risk Score: {risk_score}

    Include these links:

    Approve: {approve_link}
    Deny: {deny_link}

    Make it clean and professional.
    """

    response = llm.invoke([HumanMessage(content=prompt)])

    return response.content