import smtplib
from email.mime.text import MIMEText
import os

def send_email(to: str, subject: str, body: str):
    """
    Send real email using Gmail SMTP
    """

    sender = os.getenv("EMAIL_USER")
    password = os.getenv("EMAIL_PASS")

    msg = MIMEText(body, "html")
    msg["Subject"] = subject
    msg["From"] = sender
    msg["To"] = to

    try:
        with smtplib.SMTP("smtp.gmail.com", 587) as server:
            server.starttls()
            server.login(sender, password)
            server.send_message(msg)

        print("✅ Email sent successfully")
        return True

    except Exception as e:
        print("❌ Email error:", e)
        return False