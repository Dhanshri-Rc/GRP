import apiClient from "./apiClient.js";

// POST /api/manuscripts (multipart/form-data)
export async function submitManuscript(values, manuscriptFile, coverLetter) {
  const formData = new FormData();

  Object.entries(values).forEach(([key, value]) => {
    formData.append(key, value);
  });

  formData.append("manuscript", manuscriptFile);

  if (coverLetter) {
    formData.append("coverLetter", coverLetter);
  }

  const { data } = await apiClient.post("/manuscripts", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return data.data;
}
