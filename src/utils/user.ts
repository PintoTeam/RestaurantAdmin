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
