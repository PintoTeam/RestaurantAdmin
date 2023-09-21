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
    <nav className="w-full h-full lg:min-h-[700px] min-h-[200px] bg-background-dark rounded-br-[40px] px-2 py-5 flex flex-col justify-between">
      <section className="space-y-4">
        <Menu />
      </section>
      <section className="border-t border-white pt-3 flex justify-center">
        <Authentication />
      </section>
    </nav>
  );
}
