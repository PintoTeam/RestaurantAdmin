"use client";

import { useStore } from "@/store";
import { isTokenExpired } from "@/utils/user";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

function ProtectedComponent({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { token, clearUser } = useStore();
  useEffect(() => {
    if (!token || isTokenExpired(token ?? "")) {
      // Token has expired, take appropriate action (e.g., log out the user)
      console.log("Token has expired or doesn't exists.");
      clearUser();
      router.push("/");
    } else {
      console.log("Token is valid.");
      console.log("Refreshing...");
    }
  }, [token]);

  return <>{children}</>;
}

export default ProtectedComponent;
