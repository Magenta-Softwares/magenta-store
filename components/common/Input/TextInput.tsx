"use client";

import clsx from "clsx";
import React from "react";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(function TextInput(
  { label, id, className, ...props }: TextInputProps,
  ref
) {
  return (
    <div className='flex flex-col group'>
      {label && (
        <label htmlFor={id} className='text-gray-400 group-focus-within:text-gray-700 transition-all'>
          {label}
        </label>
      )}

      <input
        ref={ref}
        id={id}
        className={clsx(
          `
          px-4 
          py-2
          rounded-lg  
          border-2
          border-gray-300
          focus:outline-none
          focus:border-pink-500
          text-gray-700
          transition-all
        `,
          className
        )}
        {...props}
      />
    </div>
  );
});

TextInput.displayName = "TextInput";
