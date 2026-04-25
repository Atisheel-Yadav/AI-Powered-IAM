# from fastapi import APIRouter
# from app.schemas.request_schema import AccessRequest
# from app.services.iam_service import process_access_request

# router = APIRouter()

# @router.post("/request-access")
# def request_access(request: AccessRequest):
#     """
#     Endpoint to request access
#     """
#     response = process_access_request(request)
#     return response
from fastapi import APIRouter
from app.schemas.request_schema import AccessRequest
from app.services.iam_service import process_access_request
from app.db.client import supabase

router = APIRouter()


# 🚀 POST: Request Access (AI + DB + Email flow)
@router.post("/request-access")
def request_access(request: AccessRequest):
    """
    User submits access request
    → AI processes
    → Decision made
    → Stored in DB
    """
    response = process_access_request(request)
    return response


# 🚀 GET: Fetch all requests (for dashboard)
@router.get("/requests")
def get_requests():
    """
    Fetch all access requests from database
    Used in frontend dashboard table
    """
    response = supabase.table("access_requests").select("*").execute()

    # Return only data
    return response.data