"use client";

import { Logo, Logout, Profile } from "..";

export function Appbar() {
  return (
    <nav className="w-full h-[7.5vh] flex flex-row justify-between px-5 items-center bg-background-dark min-h-[60px]">
      <Logo className="text-xl w-2/12" />
      <div className="flex flex-row w-fit space-x-4 text-right">
        <Profile />
      </div>
    </nav>
  );
}
