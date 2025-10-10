"use client";

import clsx from "clsx";
import React from "react";

interface PasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(function PasswordInput(
  { label, id, className, required, ...props }: PasswordInputProps,
  ref
) {
  return (
    <div className={clsx("flex flex-col group", className)}>
      {label && (
        <label htmlFor={id} className='text-gray-400 group-focus-within:text-gray-700 transition-all'>
          {label}
          {required && <span className='ml-1 text-red-500 font-bold'>*</span>}
        </label>
      )}

      <input
        ref={ref}
        type='password'
        className={`
          px-4 
          py-2
          rounded-lg  
          border-2
          border-gray-300
          focus:outline-none
          focus:border-pink-500
          text-gray-700
          transition-all
        `}
        {...props}
      />
    </div>
  );
});

PasswordInput.displayName = "PasswordInput";
