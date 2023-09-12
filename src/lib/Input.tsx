import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from "react";

type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export function Input({ ...props }: InputProps) {
  return (
    <input
      className="py-2 px-3 rounded-md bg-gray-100 w-full disabled:bg-gray-300 duration-300 ease-in-out border"
      {...props}
    />
  );
}
