import React from "react";

type Props = {
  onClick: () => void;
  isSelected: boolean;
  label: string;
};

export default function GroupButton({
  label,
  onClick,
  isSelected
}: Readonly<Props>) {
  return (
    <button
      onClick={onClick}
      className={`relative z-10 flex h-5 min-w-10 items-center justify-center rounded-lg px-2 text-center font-medium whitespace-nowrap outline-none focus:ring-0 xl:min-w-20 ${
        isSelected
          ? "font-semibold text-teal-600 dark:text-white"
          : "text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300"
      }`}
    >
      {label}
    </button>
  );
}
