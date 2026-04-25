from langchain_groq import ChatGroq
from langchain_core.messages import HumanMessage
import os
import json

# Initialize Groq LLM
llm = ChatGroq(
    temperature=0,
    model_name="llama-3.1-8b-instant",
    api_key=os.getenv("GROQ_API_KEY")
)

# def role_analyzer(state: dict):
#     """
#     Step 1: Analyze the request
#     Extract intent and sensitivity
#     """

#     request = state["request"]

#     prompt = f"""
#     You are a security analyst.

#     Analyze this access request:

#     Resource: {request.resource}
#     Access Level: {request.access_level}
#     Reason: {request.reason}

#     Return:
#     - sensitivity (low / medium / high)
#     - intent (one line)
#     """

#     response = llm.invoke([HumanMessage(content=prompt)])

#     return {
#         "analysis": response.content
#     }
def role_analyzer(state: dict):

    request = state["request"]

    prompt = f"""
    Analyze this access request:

    Resource: {request.resource}
    Access Level: {request.access_level}
    Reason: {request.reason}

    Return ONLY JSON:

    {{
        "sensitivity": "low | medium | high",
        "intent": "short summary"
    }}
    """

    response = llm.invoke([HumanMessage(content=prompt)])

    try:
        parsed = json.loads(response.content)
    except:
        parsed = {
            "sensitivity": "medium",
            "intent": "unknown"
        }

    return {
        "analysis": parsed
    }