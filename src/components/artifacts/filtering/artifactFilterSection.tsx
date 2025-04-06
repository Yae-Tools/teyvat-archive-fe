"use client";

import { useAtom } from "jotai";
import { StarIcon } from "lucide-react";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

import {
  artifactRarityAtom,
  artifactSearchAtom
} from "~/atoms/teyvat/artifact.atom";
import FilterDropDown from "~/components/common/filters/filterDropdown";
import { RARITY_TYPES } from "~/data/teyvatData";

import ArtifactFilterStack from "./artifactFilterStack";

export default function ArtifactFilterSection() {
  const isLg = useMediaQuery({ minWidth: 1024 });

  const [artifactSearch, setArtifactSearch] = useAtom(artifactSearchAtom);
  const [selectedArtifactRarity, setSelectedArtifactRarity] =
    useAtom(artifactRarityAtom);

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="mx-2 flex w-full flex-col items-center px-2 pt-3">
      {isLg ? (
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
      ) : (
        <div className="relative w-full max-w-[320px] lg:hidden">
          <FilterDropDown
            {...{
              isFilterOpen,
              setIsFilterOpen
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
          </FilterDropDown>

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
      )}
    </div>
  );
}
