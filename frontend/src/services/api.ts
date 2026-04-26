import axios from "axios";

const API = axios.create({
  baseURL: "https://ai-powered-iam.onrender.com",
});

export const requestAccess = (data: any) =>
  API.post("/request-access", data);

export const fetchRequests = () =>
  API.get("/requests");

export const approveRequest = (data: any) =>
  API.post("/approve-request", data);