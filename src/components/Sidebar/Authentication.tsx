import React from "react";
import { Button } from "@/lib";
import { useStore } from "@/store";
import { Profile } from "@/components";
import { useRouter } from "next/navigation";

export default function Authentication() {
  const router = useRouter();
  const { isAuth, user } = useStore();

  return (
    <>
      {!isAuth && (
        <Button
          type="button"
          variant="Primary"
          className="w-full"
          onClick={() => router.push("/login")}
        >
          Login
        </Button>
      )}
      {isAuth && user && <Profile />}
    </>
  );
}
