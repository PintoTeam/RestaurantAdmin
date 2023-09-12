export const API_URL = process.env.NEXT_PUBLIC_API_URL;

// Generic function to make authenticated API requests using fetch
export const callApi = async (
  endpoint: string,
  method: "POST" | "GET" | "PUT" | "DELETE",
  body: any = null,
  authToken: string
) => {
  try {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    };

    const requestOptions: RequestInit = {
      method: method,
      headers: headers,
      body: body ? JSON.stringify(body) : null,
    };

    const response = await fetch(`${API_URL}${endpoint}`, requestOptions);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse and return the response data
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API call failed:", error);
    throw error;
  }
};
