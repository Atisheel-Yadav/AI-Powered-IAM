from app.db.client import supabase

# 🔹 Save access request
def save_request(data: dict):
    return supabase.table("access_requests").insert(data).execute()


# 🔹 Update request status
def update_request_status(user_id: str, status: str):
    return supabase.table("access_requests") \
        .update({"status": status}) \
        .eq("user_id", user_id) \
        .execute()


# 🔹 Save approval log
def save_approval(data: dict):
    return supabase.table("approvals").insert(data).execute()