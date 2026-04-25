from app.schemas.request_schema import AccessRequest
from app.ai.graph import build_graph
from app.ai.nodes.approval_email import generate_email
from app.services.email_service import send_email
from app.db.queries import save_request

graph = build_graph()

def process_access_request(request: AccessRequest):

    result = graph.invoke({
        "request": request
    })

    status = result.get("status")
    risk_score = result.get("risk_score")

    # 🔥 Save to DB
    save_request({
        "user_id": request.user_id,
        "resource": request.resource,
        "access_level": request.access_level,
        "reason": request.reason,
        "risk_score": risk_score,
        "status": status
    })

    # 🔥 Send email if needed
    if result.get("action") == "send_email":
        email_body = generate_email(request, risk_score)

        send_email(
            to="atisheelyadav@gmail.com",
            subject="Access Approval Required",
            body=email_body
        )

    return {
        "status": status,
        "risk_score": risk_score,
        "action": result.get("action")
    }