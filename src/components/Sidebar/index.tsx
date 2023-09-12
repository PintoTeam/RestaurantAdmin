"use client";

import React from "react";
import { Logo, Profile } from "@/components";
import { Button } from "@/lib";
import { useStore } from "@/store";
import { useRouter } from "next/navigation";

export function Sidebar() {
  const router = useRouter();
  const { isAuth, user } = useStore();

  return (
    <nav className="w-full min-h-full bg-gray-300 rounded-xl p-5 flex flex-col justify-between">
      <Logo />
      <ul>
        <li></li>
      </ul>
      <section>
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
        {isAuth && user && <Profile user={user} />}
      </section>
    </nav>
  );
}
