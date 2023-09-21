"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface Props {
  href: string;
  title: string;
  icon: React.ReactNode;
}

export default function MenuOption({ href, title, icon }: Props) {
  const path = usePathname();
  const [currentPathClassNames, setCurrentPathClassNames] = useState("");

  useEffect(() => {
    if (path === href) {
      setCurrentPathClassNames(
        "bg-background-light text-secondary-500 font-bold border-l-4 border-secondary-600"
      );
    } else {
      setCurrentPathClassNames(
        "font-normal text-white hover:bg-gray-500 hover:bg-opacity-50"
      );
    }
  }, [href, path]);

  return (
    <li
      className={`${currentPathClassNames} text-center transition-all -mr-5 before:container before:bg-red-500 before:w-52`}
    >
      <Link
        className="pl-2 pr-10 py-2 text-base rounded-full flex space-x-3 items-center"
        href={href}
      >
        {icon} <span>{title}</span>
      </Link>
    </li>
  );
}
