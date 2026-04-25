def decision_engine(state: dict):
    """
    Decide: approve / deny / email
    """

    risk_score = state.get("risk_score", 0.5)

    if risk_score < 0.3:
        return {
            "status": "approved",
            "action": "auto_approved",
            "risk_score": risk_score
        }

    elif risk_score < 0.7:
        return {
            "status": "pending_approval",
            "action": "send_email",
            "risk_score": risk_score
        }

    else:
        return {
            "status": "denied",
            "action": "auto_denied",
            "risk_score": risk_score
        }