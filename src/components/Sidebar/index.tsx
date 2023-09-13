"use client";

import React, { useEffect, useState } from "react";
import { Logo, Profile } from "@/components";
import { Button } from "@/lib";
import { useStore } from "@/store";
import { useRouter } from "next/navigation";
import Link from "next/link";
import MenuOption from "./MenuOption";

export function Sidebar() {
  const router = useRouter();
  const { isAuth, user } = useStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;

  return (
    <nav className="w-full min-h-full bg-background-dark rounded-br-3xl p-5 flex flex-col justify-between">
      <section className="space-y-4">
        <Logo />
        <ul className="space-y-3">
          <MenuOption href="/" title="Home" />
          {isAuth && (
            <>
              <MenuOption href="/test" title="Protected Test" />
            </>
          )}
        </ul>
      </section>
      <section className="border-t pt-5 border-primary">
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
      </section>
    </nav>
  );
}
