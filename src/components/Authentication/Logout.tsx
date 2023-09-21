import { Button } from "@/lib";
import { LogoutIcon } from "@/lib/icons";
import { useStore } from "@/store";
import React from "react";

export function Logout() {
  const { clearUser } = useStore();

  const handleClick = () => {
    clearUser();
  };

  return (
    <Button variant="Danger" className="mt-2 w-fit" onClick={handleClick}>
      <LogoutIcon className="w-6 h-6" />
    </Button>
  );
}
