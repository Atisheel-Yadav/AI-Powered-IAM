import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

export const requestAccess = (data: any) =>
  API.post("/request-access", data);

export const fetchRequests = () =>
  API.get("/requests");

export const approveRequest = (data: any) =>
  API.post("/approve-request", data);