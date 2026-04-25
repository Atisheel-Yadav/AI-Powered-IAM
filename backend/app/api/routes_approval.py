from fastapi import APIRouter
from app.db.queries import update_request_status, save_approval

router = APIRouter()


@router.post("/approve-request")
def approve_request(data: dict):
    """
    Manager approves/denies from UI
    """

    user_id = data.get("user_id")
    decision = data.get("decision")

    status = "approved" if decision == "approve" else "denied"

    # Update DB
    update_request_status(user_id, status)

    # Log approval
    save_approval({
        "user_id": user_id,
        "decision": decision
    })

    return {"status": status}