import { IconChevronCompactLeft, IconChevronCompactRight } from "@tabler/icons-react";
import clsx from "clsx";

interface SlideButtonProps {
  variant: "next" | "prev";
  onClick?: () => void;
}

export const SlideButton = ({ variant, onClick }: SlideButtonProps) => {
  const variantStyles = {
    next: "right-0",
    prev: "left-0",
  };

  return (
    <button
      className={clsx(
        `
        absolute
        top-[calc(50%-1rem)]
        border
        border-gray-300
        rounded-full
        shadow
        p-2
        z-10
        bg-white
        opacity-50
        hover:opacity-100
        cursor-pointer
        transition-all
        `,
        variantStyles[variant]
      )}
      onClick={onClick}
    >
      {variant === "next" ? <IconChevronCompactRight /> : <IconChevronCompactLeft />}
    </button>
  );
};
