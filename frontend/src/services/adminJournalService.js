import apiClient from "./apiClient.js";

export async function fetchAdminJournals({ search = "", category = "all", page = 1, limit = 10 } = {}) {
  const { data } = await apiClient.get("/admin/journals", {
    params: { search, category, page, limit },
  });
  return data.data;
}

export async function fetchAdminJournalById(id) {
  const { data } = await apiClient.get(`/admin/journals/${id}`);
  return data.data.journal;
}

export async function createAdminJournal({ name, category, isActive, coverImage }) {
  const formData = new FormData();
  formData.append("name", name);
  formData.append("category", category);
  formData.append("isActive", isActive);
  if (coverImage) formData.append("coverImage", coverImage);

  const { data } = await apiClient.post("/admin/journals", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return data.data.journal;
}

export async function updateAdminJournal(id, { name, category, isActive, coverImage }) {
  const formData = new FormData();
  if (name !== undefined) formData.append("name", name);
  if (category !== undefined) formData.append("category", category);
  if (isActive !== undefined) formData.append("isActive", isActive);
  if (coverImage) formData.append("coverImage", coverImage);

  const { data } = await apiClient.put(`/admin/journals/${id}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return data.data.journal;
}

export async function deleteAdminJournal(id) {
  const { data } = await apiClient.delete(`/admin/journals/${id}`);
  return data.data;
}
