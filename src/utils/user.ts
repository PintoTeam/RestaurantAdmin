import jwt, { JwtPayload } from "jsonwebtoken";

const ID_TOKEN_KEY =
  "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier";

export function saveAuthToken(token: string) {
  localStorage.setItem("auth-token", token);
}

export function deleteAuthToken() {
  localStorage.removeItem("auth-token");
}

export function getAuthToken() {
  return localStorage.getItem("auth-token") ?? "";
}

export function isTokenExpired(token: string) {
  try {
    const decoded = jwt.decode(token) as JwtPayload;
    if (!decoded || !decoded.exp) {
      // Token is invalid or doesn't have an expiration date
      return true;
    }

    const currentTime = Math.floor(Date.now() / 1000); // Get current time in seconds
    return decoded.exp < currentTime; // Check if the token has expired
  } catch (error) {
    // Token is invalid
    return true;
  }
}

export function getUserId(token: string) {
  const decodedToken = jwt.decode(token) as JwtPayload;
  console.log("Decoded token:", decodedToken);
  return decodedToken[ID_TOKEN_KEY];
}
