import { API_URL, callApi } from "./api";

interface LoginUserProps {
  userName: string;
  password: string;
}

export const loginUser: any = async (userInfo: LoginUserProps) => {
  try {
    const response = await fetch(`${API_URL}/User/Login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept",
      },
      body: JSON.stringify(userInfo),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    return { success: true, data };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
};

export const getUser = (id: string, authToken: string) => {
  return callApi(`/User/${id}`, "GET", null, authToken);
};

export const getAllUsers = (authToken: string) => {
  return callApi("/User", "GET", null, authToken);
};
