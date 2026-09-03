import apiClient from "./apiClient.js";

// POST /api/enquiries
export async function submitEnquiry(payload) {
  const { data } = await apiClient.post("/enquiries", payload);
  return data.data;
}
