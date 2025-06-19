import { ArrowDownAZIcon, ArrowUpAZIcon } from "lucide-react";
import React from "react";

type Props = {
  isSortAsc: boolean;
  setIsSortAsc: (value: boolean) => void;
};

export default function AscSort({ isSortAsc, setIsSortAsc }: Readonly<Props>) {
  return (
    <div className="flex items-center space-x-1">
      <ArrowUpAZIcon
        className={`size-5 cursor-pointer ${isSortAsc ? "text-teal-500" : "text-gray-500"}`}
        onClick={() => {
          setIsSortAsc(true);
        }}
      />
      <ArrowDownAZIcon
        className={`size-5 cursor-pointer ${!isSortAsc ? "text-teal-500" : "text-gray-500"}`}
        onClick={() => {
          setIsSortAsc(false);
        }}
      />
    </div>
  );
}
