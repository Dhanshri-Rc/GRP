import apiClient from "./apiClient.js";

export async function fetchDashboardStats() {
  const { data } = await apiClient.get("/admin/dashboard/stats");
  return data.data;
}
