import { Spinner } from "@/components/Spinner";
import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  children: JSX.Element | string;
}

export const Button: React.FC<ButtonProps> = ({
  isLoading = false,
  children,
  ...props
}) => {
  return (
    <button
      className="flex flex-row items-center justify-center bg-purple-500 py-2 px-4 font-bold text-base text-white hover:underline focus:outline-none focus:ring-4 ring-offset-4 ring-offset-zinc-800 ring-purple-700"
      disabled={isLoading}
      {...props}
    >
      {isLoading ? <Spinner /> : children}
    </button>
  );
};
