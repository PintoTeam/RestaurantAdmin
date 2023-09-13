import React from "react";
import MenuOption from "./MenuOption";
import { menuRoutes } from "@/utils/routes";

export default function Menu() {
  return (
    <ul>
      {menuRoutes.map(({ route, title, icon }, idx) => (
        <MenuOption
          icon={icon}
          href={route}
          title={title}
          key={`${idx}${route}`}
        />
      ))}
    </ul>
  );
}
