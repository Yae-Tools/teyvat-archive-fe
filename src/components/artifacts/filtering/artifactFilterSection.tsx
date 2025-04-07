"use client";

import { useAtom } from "jotai";
import { SlidersHorizontal, StarIcon } from "lucide-react";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

import {
  artifactRarityAtom,
  artifactSearchAtom,
  artifactSetSortingAtom,
  artifactSortAscAtom
} from "~/atoms/teyvat/artifact.atom";
import ButtonGroup from "~/components/common/basic/buttonGroup";
import AscSort from "~/components/common/filters/ascSort";
import Dropdown from "~/components/common/filters/filterDropdown";
import { RARITY_TYPES, SORTING_ARRAY } from "~/data/teyvatData";
import { IDefaultSorting } from "~/types/enka/enka.types";

import ArtifactFilterStack from "./artifactFilterStack";

export default function ArtifactFilterSection() {
  const isLg = useMediaQuery({ minWidth: 1024 });

  const [artifactSearch, setArtifactSearch] = useAtom(artifactSearchAtom);
  const [selectedArtifactRarity, setSelectedArtifactRarity] =
    useAtom(artifactRarityAtom);
  const [selectedSort, setSelectedSort] = useAtom(artifactSetSortingAtom);
  const [isSortAsc, setIsSortAsc] = useAtom(artifactSortAscAtom);

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);

  return (
    <div className="flex w-full flex-col items-center px-2 pt-3">
      {isLg ? (
        <div className="flex w-full flex-col items-center justify-between px-2">
          <div className="hidden flex-col items-center lg:flex lg:flex-row lg:justify-center lg:space-x-4">
            <ArtifactFilterStack
              {...{
                setIsFilterOpen,
                artifactSearch,
                setArtifactSearch,
                selectedArtifactRarity,
                setSelectedArtifactRarity
              }}
            />
          </div>
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
        </div>
      ) : (
        <div className="flex w-full max-w-[320px] flex-col space-y-2 lg:hidden">
          <div className="relative">
            <Dropdown
              {...{
                isOpen: isFilterOpen,
                setIsOpen: setIsFilterOpen,
                title: "Filters",
                icon: <SlidersHorizontal className="ml-2 size-4" />
              }}
            >
              {selectedArtifactRarity && (
                <div className="flex items-center">
                  {(() => {
                    return RARITY_TYPES[selectedArtifactRarity];
                  })()}
                  <StarIcon className="size-4 text-[gold]" />
                </div>
              )}
            </Dropdown>

            {isFilterOpen && (
              <div className="absolute end-0 z-10 flex w-full flex-col items-center justify-evenly rounded-md border border-gray-100 bg-white pt-4 shadow-lg dark:border-slate-700 dark:bg-slate-900">
                <ArtifactFilterStack
                  {...{
                    setIsFilterOpen,
                    artifactSearch,
                    setArtifactSearch,
                    selectedArtifactRarity,
                    setSelectedArtifactRarity
                  }}
                />
              </div>
            )}
          </div>
          <div className="relative flex items-center space-x-2">
            <Dropdown
              {...{
                isOpen: isSortOpen,
                setIsOpen: setIsSortOpen,
                title: "Sort By"
              }}
            >
              <div className="flex items-center">
                {selectedSort && (
                  <p className="text-slate-400">{selectedSort}</p>
                )}
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
        </div>
      )}
    </div>
  );
}
