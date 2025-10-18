import axios from "axios";

export const authAPI = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true,
});

export const registerUser = (data) => authAPI.post("/register", data);
export const loginUser = (data) => authAPI.post("/login", data);
export const getMe = () => authAPI.get("/me");
