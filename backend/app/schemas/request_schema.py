from pydantic import BaseModel, Field

class AccessRequest(BaseModel):
    user_id: str = Field(..., example="user_123")
    resource: str = Field(..., example="production_db")
    access_level: str = Field(..., example="read")
    reason: str = Field(..., example="Need access for debugging issue")