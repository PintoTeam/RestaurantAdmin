import React from "react";

type Props = {
  text: string;
  className: string;
};

export function Title({ text, className = "" }: Props) {
  return (
    <h1 className={`${className} text-2xl font-semibold uppercase`}>
      {text}
      <span className="text-secondary-500">.</span>
    </h1>
  );
}
