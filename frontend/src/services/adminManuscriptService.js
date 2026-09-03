import apiClient, { getApiBaseUrl } from "./apiClient.js";

export async function fetchAdminManuscripts({
  search = "",
  status = "all",
  journal = "all",
  page = 1,
  limit = 10,
} = {}) {
  const { data } = await apiClient.get("/admin/manuscripts", {
    params: { search, status, journal, page, limit },
  });
  return data.data;
}

export async function fetchAdminManuscriptById(id) {
  const { data } = await apiClient.get(`/admin/manuscripts/${id}`);
  return data.data.manuscript;
}

export async function updateManuscriptStatus(id, status) {
  const { data } = await apiClient.patch(`/admin/manuscripts/${id}/status`, {
    status,
  });
  return data.data.manuscript;
}

export async function deleteAdminManuscript(id) {
  const { data } = await apiClient.delete(`/admin/manuscripts/${id}`);
  return data.data;
}

export function getManuscriptDownloadUrl(id) {
  return `${getApiBaseUrl()}/api/admin/manuscripts/${id}/manuscript/download`;
}

export function getCoverLetterDownloadUrl(id) {
  return `${getApiBaseUrl()}/api/admin/manuscripts/${id}/cover-letter/download`;
}

// Downloads a protected file using the stored JWT (since <a href> can't
// attach an Authorization header) and triggers a browser save dialog.
export async function downloadProtectedFile(url, fallbackName) {
  const response = await apiClient.get(url.replace(`${getApiBaseUrl()}/api`, ""), {
    responseType: "blob",
  });

  const disposition = response.headers["content-disposition"];
  let filename = fallbackName || "download";

  if (disposition) {
    const match = disposition.match(/filename="?([^"]+)"?/);
    if (match?.[1]) filename = match[1];
  }

  const blobUrl = window.URL.createObjectURL(new Blob([response.data]));
  const link = document.createElement("a");
  link.href = blobUrl;
  link.setAttribute("download", filename);
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.URL.revokeObjectURL(blobUrl);
}
