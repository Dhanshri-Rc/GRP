import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const apiClient = axios.create({
  baseURL: `${API_URL}/api`,
  headers: {
    Accept: "application/json",
  },
});

/* =========================================================
   ATTACH ADMIN JWT
========================================================= */
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("grp_admin_token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

/* =========================================================
   HANDLE 401 GLOBALLY
========================================================= */
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("grp_admin_token");
      localStorage.removeItem("grp_admin_profile");

      if (
        typeof window !== "undefined" &&
        window.location.pathname.startsWith("/admin") &&
        window.location.pathname !== "/admin/login"
      ) {
        window.location.href = "/admin/login";
      }
    }

    return Promise.reject(error);
  }
);

export function getApiBaseUrl() {
  return API_URL;
}

export function extractErrorMessage(error, fallback = "Something went wrong. Please try again.") {
  return (
    error?.response?.data?.message ||
    (Array.isArray(error?.response?.data?.errors) &&
      error.response.data.errors[0]) ||
    error?.message ||
    fallback
  );
}

export default apiClient;
