import React from "react";

interface Props {
  text: string;
}

export function Title({ text }: Props) {
  return (
    <h1 className="text-2xl font-semibold uppercase">
      {text}
      <span className="text-secondary-500">.</span>
    </h1>
  );
}
