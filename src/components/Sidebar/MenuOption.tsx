import Link from "next/link";
import React from "react";

interface Props {
  href: string;
  title: string;
}

export default function MenuOption({ href, title }: Props) {
  return (
    <li className="border border-1 border-white hover:border-secondary-400 text-white hover:text-secondary-400 hover:bg-opacity-50 rounded-full text-center">
      <Link
        className="px-2 py-2 font-light text-base block rounded-full"
        href={href}
      >
        {title}
      </Link>
    </li>
  );
}
