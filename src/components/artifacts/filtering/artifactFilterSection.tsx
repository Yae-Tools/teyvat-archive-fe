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
import Dropdown from "~/components/common/filters/filterDropdown";
import SortDropDownMobile from "~/components/common/filters/sortDropDownMobile";
import SortSelector from "~/components/common/filters/sortSelector";
import { RARITY_TYPES } from "~/data/teyvatData";

import ArtifactFilterStack from "./artifactFilterStack";

export default function ArtifactFilterSection() {
  const isLg = useMediaQuery({ minWidth: 1024 });

  const [artifactSearch, setArtifactSearch] = useAtom(artifactSearchAtom);
  const [selectedArtifactRarity, setSelectedArtifactRarity] =
    useAtom(artifactRarityAtom);
  const [selectedSort, setSelectedSort] = useAtom(artifactSetSortingAtom);
  const [isSortAsc, setIsSortAsc] = useAtom(artifactSortAscAtom);

  const [isFilterOpen, setIsFilterOpen] = useState(false);

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
          <SortSelector
            {...{ selectedSort, setSelectedSort, isSortAsc, setIsSortAsc }}
          />
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
          <SortDropDownMobile
            {...{
              selectedSort,
              setSelectedSort,
              isSortAsc,
              setIsSortAsc
            }}
          />
        </div>
      )}
    </div>
  );
}
