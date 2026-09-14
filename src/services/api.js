const API_URL =
  import.meta.env.VITE_API_URL || "https://backend-shopix.onrender.com";

export const apiRequest = async (path, options = {}) => {
  const response = await fetch(`${API_URL}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    ...options,
  });

  const contentType = response.headers.get("content-type") || "";

  const data = contentType.includes("application/json")
    ? await response.json()
    : await response.text();

  if (!response.ok) {
    const message =
      typeof data === "string"
        ? data
        : data?.message || "Une erreur est survenue.";

    throw new Error(message);
  }

  return data;
};

export const registerUser = (payload) =>
  apiRequest("/api/auth/register", {
    method: "POST",
    body: JSON.stringify(payload),
  });

export const loginUser = (payload) =>
  apiRequest("/api/auth/login", {
    method: "POST",
    body: JSON.stringify(payload),
  });

export const adminLogin = (payload) =>
  apiRequest("/api/auth/admin/login", {
    method: "POST",
    body: JSON.stringify(payload),
  });

export const fetchUsers = () =>
  apiRequest("/api/auth/users");

export const saveOrder = (payload) =>
  apiRequest("/api/auth/orders", {
    method: "POST",
    body: JSON.stringify(payload),
  });

export const fetchOrders = () =>
  apiRequest("/api/auth/orders");