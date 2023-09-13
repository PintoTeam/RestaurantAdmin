import React from "react";
import MenuOption from "./MenuOption";
import { menuRoutes } from "@/utils/routes";

export default function Menu() {
  return (
    <ul className="space-y-3">
      {menuRoutes.map(({ route, title }) => (
        <MenuOption href={route} title={title} key={title} />
      ))}
    </ul>
  );
}
