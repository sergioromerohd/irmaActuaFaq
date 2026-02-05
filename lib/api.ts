export const API_BASE_URL = "https://irmaback.dbblab.es";

export interface ApiError {
  message: string;
  status: number;
}

export async function fetchApi(endpoint: string, options: RequestInit = {}) {
  const headers = {
    "Content-Type": "application/json",
    ...options.headers,
  } as HeadersInit;

  const url = `${API_BASE_URL}${endpoint.startsWith("/") ? endpoint : `/${endpoint}`}`;

  const response = await fetch(url, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw {
      message: errorData.message || "Un error ocurrió durante la petición",
      status: response.status,
    } as ApiError;
  }

  return response.json();
}
