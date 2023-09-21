import React from "react";
import { Button } from "@/lib";
import { useStore } from "@/store";
import { Logout, Profile } from "@/components";
import { useRouter } from "next/navigation";

export default function Authentication() {
  const router = useRouter();
  const { isAuth } = useStore();

  return (
    <>
      {!isAuth && (
        <Button
          type="button"
          variant="Primary"
          className="w-fit"
          onClick={() => router.push("/login")}
        >
          Login
        </Button>
      )}
      {isAuth && <Logout />}
    </>
  );
}
