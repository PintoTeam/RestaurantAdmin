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

function parseJwt(token: string) {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
}

export function getUserId(token: string): string {
  return parseJwt(token)[ID_TOKEN_KEY];
}
