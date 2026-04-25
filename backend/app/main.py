from fastapi import FastAPI
from dotenv import load_dotenv
from fastapi.middleware.cors import CORSMiddleware

load_dotenv()

from app.api.routes_access import router as access_router
from app.api.routes_approval import router as approval_router

app = FastAPI()

# 🔥 FIX CORS ERROR HERE
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(access_router)
app.include_router(approval_router)

@app.get("/")
def root():
    return {"message": "AI IAM System Running 🚀"}