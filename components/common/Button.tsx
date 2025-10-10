"use client";

import clsx from "clsx";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { children, onClick, type, className, ...props }: ButtonProps,
  ref
) {
  return (
    <button
      ref={ref}
      onClick={onClick}
      type={type}
      className={clsx(
        `
        px-4 
        py-2 
        rounded-lg
        border-2
        active:scale-95
        focus:outline-none
        focus:border-pink-950
        bg-pink-500 
        hover:bg-pink-600
        text-white
        font-bold
        cursor-pointer
        transition-all
        `,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";
