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
    <main className="w-full min-h-full flex flex-col pt-5 font-semibold">
      <h1 className="m-auto sm:text-5xl text-xl">Hello, {user?.name}!</h1>
    </main>
  );
}
