import clsx from "clsx";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "danger";
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { children, onClick, type, className, variant = "primary", rightIcon, leftIcon, ...props }: ButtonProps,
  ref
) {
  const variantStyles = {
    primary: "bg-pink-500 hover:bg-pink-600 text-white",
    secondary: "bg-pink-200 hover:bg-pink-300 text-pink-700",
    danger: "bg-red-100 hover:bg-red-200 text-red-600",
  };

  return (
    <button
      ref={ref}
      onClick={onClick}
      type={type}
      className={clsx(
        `
        inline-flex
        items-center
        justify-center
        gap-2
        px-4 
        py-2 
        rounded-lg
        border-2
        border-transparent
        active:scale-95
        focus:outline-none
        cursor-pointer
        transition-all
        `,
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  );
});

Button.displayName = "Button";
