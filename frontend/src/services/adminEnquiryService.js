import apiClient from "./apiClient.js";

export async function fetchAdminEnquiries({ search = "", status = "all", page = 1, limit = 10 } = {}) {
  const { data } = await apiClient.get("/admin/enquiries", {
    params: { search, status, page, limit },
  });
  return data.data;
}

export async function fetchAdminEnquiryById(id) {
  const { data } = await apiClient.get(`/admin/enquiries/${id}`);
  return data.data.enquiry;
}

export async function updateEnquiryStatus(id, status) {
  const { data } = await apiClient.patch(`/admin/enquiries/${id}/status`, {
    status,
  });
  return data.data.enquiry;
}

export async function deleteAdminEnquiry(id) {
  const { data } = await apiClient.delete(`/admin/enquiries/${id}`);
  return data.data;
}
