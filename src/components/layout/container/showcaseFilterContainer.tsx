import React from "react";

type Props = {
  children: React.ReactNode;
  isSticky: boolean;
};

export default function ShowcaseFilterContainer({
  children,
  isSticky,
}: Readonly<Props>) {
  return (
    <div
      className={`bg-gray-900 w-full ${isSticky ? "sticky top-0 z-10" : ""}`}
    >
      {children}
    </div>
  );
}
