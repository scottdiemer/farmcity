export class ApiError extends Error {
  constructor(endpoint, status) {
    super(`''${endpoint}' returned ${status}`);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ApiError);
    }

    this.name = "ApiError";
    this.status = status;
  }
}

export default async function fetchJson(endpoint, query) {
  const response = await fetch(endpoint, {
    crossDomain: true,
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: query,
  });
  if (!response.ok) {
    throw new ApiError(endpoint, response.status);
  }
  const result = await response.json();
  return result;
}
