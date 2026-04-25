from langgraph.graph import StateGraph

from app.ai.nodes.role_analyzer import role_analyzer
from app.ai.nodes.risk_scorer import risk_scorer
from app.ai.nodes.decision_engine import decision_engine

def build_graph():

    workflow = StateGraph(dict)

    workflow.add_node("role_analyzer", role_analyzer)
    workflow.add_node("risk_scorer", risk_scorer)
    workflow.add_node("decision_engine", decision_engine)

    workflow.set_entry_point("role_analyzer")

    workflow.add_edge("role_analyzer", "risk_scorer")
    workflow.add_edge("risk_scorer", "decision_engine")

    workflow.set_finish_point("decision_engine")

    return workflow.compile()