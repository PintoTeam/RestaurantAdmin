"use client";

import { useStore } from "@/store";
import { isTokenExpired } from "@/utils/user";
import React, { useEffect } from "react";

function ProtectedComponent({ children }: { children: React.ReactNode }) {
  const { token, clearUser } = useStore();
  useEffect(() => {
    if (isTokenExpired(token ?? "")) {
      // Token has expired, take appropriate action (e.g., log out the user)
      console.log("Token has expired.");
      clearUser();
    } else {
      console.log("Token is valid.");
      console.log("Refreshing...");
    }
  }, [token]);

  return <div>{children}</div>;
}

export default ProtectedComponent;
