"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface Props {
  href: string;
  title: string;
}

export default function MenuOption({ href, title }: Props) {
  const path = usePathname();
  const [currentPathClassNames, setCurrentPathClassNames] = useState("");

  useEffect(() => {
    if (path === href) {
      setCurrentPathClassNames("bg-secondary-500 bg-opacity-25");
    } else {
      setCurrentPathClassNames(
        "hover:border-secondary-400 hover:text-secondary-400 hover:bg-opacity-50"
      );
    }
  }, [href, path]);

  return (
    <li
      className={`${currentPathClassNames} border border-1 border-white text-white rounded-full text-center transition-all`}
    >
      <Link
        className="px-2 py-2 font-light text-base block rounded-full"
        href={href}
      >
        {title}
      </Link>
    </li>
  );
}
