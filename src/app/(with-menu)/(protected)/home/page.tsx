"use client";

import { useStore } from "@/store";
import { useEffect, useState } from "react";

export default function Home() {
  const { user } = useStore();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    // Returns null on first render, so the client and server match
    return null;
  }

  return (
    <main className="w-full min-h-full text-left flex flex-col pt-5 font-semibold">
      <h1 className="m-auto text-5xl">Hello, {user?.name}!</h1>
    </main>
  );
}
