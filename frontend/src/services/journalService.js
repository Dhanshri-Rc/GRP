import apiClient from "./apiClient.js";

// GET /api/journals?category=engineering
export async function fetchPublicJournals(category) {
  const params = {};

  if (category && category !== "all" && category !== "interdisciplinary") {
    params.category = category;
  }

  const { data } = await apiClient.get("/journals", { params });
  return data.data.journals;
}

// GET /api/journals/:id
export async function fetchPublicJournalById(id) {
  const { data } = await apiClient.get(`/journals/${id}`);
  return data.data.journal;
}
