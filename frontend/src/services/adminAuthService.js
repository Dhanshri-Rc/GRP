import apiClient from "./apiClient.js";

export async function adminLogin(email, password) {
  const { data } = await apiClient.post("/admin/auth/login", {
    email,
    password,
  });
  return data.data;
}

export async function fetchAdminProfile() {
  const { data } = await apiClient.get("/admin/auth/me");
  return data.data.admin;
}
