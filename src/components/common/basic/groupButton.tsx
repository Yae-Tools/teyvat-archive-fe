import React from "react";

type Props = {
  onClick: () => void;
  isSelected: boolean;
  label: string;
};

export default function GroupButton({
  label,
  onClick,
  isSelected,
}: Readonly<Props>) {
  return (
    <button
      onClick={onClick}
      className={`relative z-10 min-w-10 xl:min-w-20  flex text-center whitespace-nowrap justify-center items-center h-5 px-2 font-medium rounded-lg outline-none focus:ring-0 ${
        isSelected
          ? "text-teal-600 dark:text-white font-semibold"
          : "text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300"
      }`}
    >
      {label}
    </button>
  );
}
