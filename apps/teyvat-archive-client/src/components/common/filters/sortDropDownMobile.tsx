import { useState } from "react";

import { SORTING_ARRAY } from "~/data/teyvatData";
import { IDefaultSorting } from "~/types/enka/enka.types";

import AscSort from "./ascSort";
import Dropdown from "./filterDropdown";

type Props = {
  selectedSort: IDefaultSorting;
  setSelectedSort: (sort: IDefaultSorting) => void;
  isSortAsc: boolean;
  setIsSortAsc: (isAsc: boolean) => void;
};

export default function SortDropDownMobile({
  selectedSort,
  setIsSortAsc,
  setSelectedSort,
  isSortAsc
}: Readonly<Props>) {
  const [isSortOpen, setIsSortOpen] = useState(false);
  return (
    <div className="relative flex items-center space-x-2">
      <Dropdown
        {...{
          isOpen: isSortOpen,
          setIsOpen: setIsSortOpen,
          title: "Sort By"
        }}
      >
        <div className="flex items-center">
          {selectedSort && <p className="text-slate-400">{selectedSort}</p>}
        </div>
      </Dropdown>

      {isSortOpen && (
        <div className="absolute end-0 top-full z-10 flex w-full flex-col items-center justify-evenly rounded-md border border-gray-100 bg-white pt-4 shadow-lg dark:border-slate-700 dark:bg-slate-900">
          {SORTING_ARRAY.map((sortOption) => (
            <button
              key={sortOption}
              className="flex w-full items-center justify-start px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-200"
              onClick={() => {
                setSelectedSort(sortOption);
                setIsSortOpen(false);
              }}
            >
              {sortOption}
            </button>
          ))}
        </div>
      )}
      <AscSort {...{ isSortAsc, setIsSortAsc }} />
    </div>
  );
}
