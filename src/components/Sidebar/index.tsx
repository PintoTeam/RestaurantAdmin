"use client";

import Menu from "./Menu";
import { Logo } from "@/components";
import Authentication from "./Authentication";
import React, { useEffect, useState } from "react";

export function Sidebar() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;

  return (
    <nav className="w-full min-h-full bg-background-dark rounded-br-[40px] p-5 flex flex-col justify-between">
      <section className="space-y-4">
        <Logo />
        <Menu />
      </section>
      <section className="border-t border-white pt-3">
        <Authentication />
      </section>
    </nav>
  );
}
