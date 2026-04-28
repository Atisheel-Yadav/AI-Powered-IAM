# 🔐 AI-Powered Identity & Access Management (IAM) System

 A full-stack IAM system that uses **AI agents to analyze access requests, assign risk scores, and automate approval workflows** with a human-in-the-loop model.

---

##  Live Demo

* 🔗 Frontend: https://your-app.vercel.app
* 🔗 Backend API: https://your-backend.onrender.com

---

##  Key Features

*  **AI-Driven Access Decisions** using LangGraph + LLM (Groq - Llama 3)
*  **Risk-Based Authorization** (Low / Medium / High risk scoring)
*  **Dual Approval System**

  * Email-based quick approval
  * Dashboard-based detailed approval
*  **Modern SaaS Dashboard UI** with analytics and activity tracking
*  **Authentication & RBAC** (Admin / Manager roles)
*  **Audit Logging & Storage** using Supabase (PostgreSQL + pgvector)

---

##  System Architecture

```text
Frontend (React + Vite)
        ↓
Backend API (FastAPI)
        ↓
AI Engine (LangGraph + LLM)
        ↓
Database (Supabase)
        ↓
Approval Workflow (Email + Dashboard)
```

---

##  Tech Stack

**Frontend:** React, TypeScript, Tailwind CSS, Framer Motion
**Backend:** FastAPI, Python
**AI / ML:** LangGraph, Groq (Llama 3)
**Database:** Supabase (PostgreSQL, pgvector)
**Auth & Security:** JWT, Role-Based Access Control (RBAC)
**Deployment:** Vercel (Frontend), Render (Backend)



##  Setup Instructions

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/AI-Powered-IAM.git
cd AI-Powered-IAM
```


### 2️⃣ Backend Setup

```bash
cd backend
python -m venv venv
venv\Scripts\activate   # Windows
pip install -r requirements.txt
```

Create `.env`:

```env
GROQ_API_KEY=your_key
SUPABASE_URL=your_url
SUPABASE_KEY=your_key
EMAIL_USER=your_email
EMAIL_PASS=your_password
SECRET_KEY=your_secret
```

Run backend:

```bash
uvicorn app.main:app --reload
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
```

Create `.env`:

```env
VITE_API_URL=http://127.0.0.1:8000
```

Run frontend:

```bash
npm run dev
```

---

##  Test Credentials

```text
Username: admin
Password: admin123

Username: manager
Password: manager123
```

---

##  Workflow

1. User submits access request
2. AI analyzes request + assigns risk score
3. System decides:

   * Low risk → auto approve
   * Medium risk → send for approval
   * High risk → deny or escalate
4. Manager approves via email or dashboard
5. All actions are logged in database

---


---

##  Future Improvements

*  OAuth (Google Login)
*  Real-time updates (WebSockets)
*  Advanced analytics dashboard
*  AI explainability panel

---

##  Contributing

Feel free to fork and improve the project!

---

##  Contact

**Atisheel Yadav**
🔗 LinkedIn: https://linkedin.com/in/your-profile
📧 Email: [atisheelyadav@gmail.com](mailto:atisheelyadav@gmail.com)
