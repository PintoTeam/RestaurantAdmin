"use client";

import { Button } from "@/lib";
import { useStore } from "@/store";
import { UserCircle } from "@/lib/icons";
import { useState, useEffect } from "react";

export function Profile() {
  const { user } = useStore();
  const { name, lastName, email } = user ?? {};
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;

  return (
    <>
      <div className="flex flex-row w-full items-center">
        <div className="flex flex-col" suppressHydrationWarning>
          <p className="font-semibold text-right text-secondary-500">
            {name} {lastName}
          </p>
          <p className="text-gray-500 mt-[-0.25rem] truncate">{email}</p>
        </div>
        <UserCircle className="w-9 min-w-fit h-9 text-secondary-500 xl:flex hidden ml-2" />
      </div>
    </>
  );
}
