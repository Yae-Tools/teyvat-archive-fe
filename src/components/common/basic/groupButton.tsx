import React, { forwardRef } from "react";

type Props = {
  onClick: () => void;
  isSelected: boolean;
  label: string;
  customHeight?: string;
};

const GroupButton = forwardRef<HTMLButtonElement, Props>(function GroupButton(
  { label, onClick, isSelected, customHeight }: Readonly<Props>,
  ref
) {
  return (
    <button
      ref={ref}
      onClick={onClick}
      className={`relative z-10 flex h-${customHeight} min-w-10 cursor-pointer items-center justify-center rounded-lg px-2 text-center font-medium whitespace-nowrap outline-none focus:ring-0 xl:min-w-20 ${
        isSelected
          ? "font-semibold text-teal-600 dark:text-white"
          : "text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300"
      }`}
    >
      {label}
    </button>
  );
});

export default GroupButton;
