import axios from "axios";

const APIURL = import.meta.env.VITE_API_URL || "http://localhost:3000";

const api = axios.create({
  baseURL: `${APIURL}/api/auth`,
  withCredentials: true,
});

export function loginUser(userData) {
  return api.post("/login", userData);
}
export function registerUser(userData) {
  return api.post("/register", userData);
}
export function logoutUser() {
  return api.post("/logout");
}
export function getMe() {
  return api.get("/me");
}
