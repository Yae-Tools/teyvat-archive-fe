import React from "react";

type Props = {
  children: React.ReactNode;
  isDisabled?: boolean;
  label: string;
  description?: string;
  id: string;
};

export default function SettingItemContainer({
  children,
  id,
  isDisabled,
  label,
  description
}: Readonly<Props>) {
  return (
    <div className="flex w-full items-center justify-between rounded-xl border border-slate-300 p-4 dark:border-slate-700">
      <div className="flex flex-col items-start justify-between">
        <label
          htmlFor={id}
          className={`${isDisabled ? "text-gray-400" : "primary-text"}`}
        >
          {label}
        </label>
        {description && (
          <p className="text-sm text-gray-400 dark:text-gray-500">
            {description}
          </p>
        )}
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}
