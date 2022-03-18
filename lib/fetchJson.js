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
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      credentials: "include",
      headers: { "content-type": "application/json" },
      body: query,
    });
    if (!response.ok) {
      throw new ApiError(endpoint, response.status);
    }
    const result = await response.json();
    return result;
  } catch (err) {
    // Do nothing
  }
}
