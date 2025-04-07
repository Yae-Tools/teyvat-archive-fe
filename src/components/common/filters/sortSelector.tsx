import React from "react";

import { SORTING_ARRAY } from "~/data/teyvatData";
import { IDefaultSorting } from "~/types/enka/enka.types";

import ButtonGroup from "../basic/buttonGroup";

import AscSort from "./ascSort";

type Props = {
  selectedSort: IDefaultSorting;
  setSelectedSort: (sort: IDefaultSorting) => void;
  isSortAsc: boolean;
  setIsSortAsc: (isAsc: boolean) => void;
};

export default function SortSelector({
  selectedSort,
  setSelectedSort,
  isSortAsc,
  setIsSortAsc
}: Readonly<Props>) {
  return (
    <div className="flex w-full items-center justify-center space-x-2">
      <ButtonGroup
        items={SORTING_ARRAY.map((sortOption, index) => ({
          id: index,
          label: sortOption,
          value: sortOption,
          onClick: (srtOpt: IDefaultSorting) => setSelectedSort(srtOpt)
        }))}
        selectedItem={selectedSort}
      />
      <AscSort {...{ isSortAsc, setIsSortAsc }} />
    </div>
  );
}
