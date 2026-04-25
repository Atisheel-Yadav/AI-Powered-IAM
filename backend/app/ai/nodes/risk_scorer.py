# from langchain_groq import ChatGroq
# from langchain_core.messages import HumanMessage
# import os

# llm = ChatGroq(
#     temperature=0,
#     model_name="llama-3.1-8b-instant",
#     api_key=os.getenv("GROQ_API_KEY")
# )

# def risk_scorer(state: dict):
#     """
#     Step 2: Assign risk score
#     """

#     analysis = state["analysis"]

#     prompt = f"""
#     You are a security risk engine.

#     Based on this analysis:

#     {analysis}

#     Return:
#     - risk_score (0 to 1)
#     - reason (short explanation)
#     """

#     response = llm.invoke([HumanMessage(content=prompt)])

#     return {
#         "risk": response.content
#     }
from langchain_groq import ChatGroq
from langchain_core.messages import HumanMessage
import os
import json

llm = ChatGroq(
    temperature=0,
    model_name="llama-3.1-8b-instant",
    api_key=os.getenv("GROQ_API_KEY")
)

def risk_scorer(state: dict):
    """
    Step 2: Assign structured risk score
    """

    analysis = state["analysis"]   # ✅ now it's a dict

    # 🔥 IMPORTANT: convert dict → string for LLM
    analysis_str = json.dumps(analysis)

    prompt = f"""
    You are a security risk engine.

    Based on this analysis:

    {analysis_str}

    IMPORTANT:
    Return ONLY valid JSON. No explanation, no markdown.

    Format:
    {{
        "risk_score": number (0 to 1),
        "reason": "short explanation"
    }}
    """

    response = llm.invoke([HumanMessage(content=prompt)])

    try:
        parsed = json.loads(response.content)
    except:
        parsed = {
            "risk_score": 0.5,
            "reason": "Failed to parse AI response"
        }

    return parsed   # ✅ directly return structured data