"use client";

import { useAtom } from "jotai";
import { useState } from "react";
import {
  artifactRarityAtom,
  artifactSearchAtom,
} from "~/atoms/teyvat/artifact.atom";
import { RARITIES } from "~/data/teyvatData";
import ArtifactFilterStack from "./artifactFilterStack";
import {
  ChevronDown,
  ChevronUp,
  SlidersHorizontal,
  StarIcon,
} from "lucide-react";

export default function ArtifactFilterSection() {
  const [artifactSearch, setArtifactSearch] = useAtom(artifactSearchAtom);
  const [selectedArtifactRarity, setSelectedArtifactRarity] =
    useAtom(artifactRarityAtom);

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="w-full pt-3 mx-2 px-2 flex flex-col items-center">
      <div className="relative lg:hidden w-full max-w-[320px]">
        <div className="inline-flex items-center overflow-hidden rounded-md border bg-white dark:border-gray-800 dark:bg-gray-900 w-full">
          <div className="border-e w-full px-4 py-2 text-sm/none text-gray-600 hover:bg-gray-50 hover:text-gray-700 dark:border-e-gray-800 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-200 flex items-center justify-start">
            <div className="flex items-center">
              <p>Filters</p>
              <SlidersHorizontal className="size-4 ml-2" />
            </div>

            <div className="flex items-center w-full space-x-1 justify-end">
              {selectedArtifactRarity !== "all" && (
                <div className="flex items-center">
                  {selectedArtifactRarity === RARITIES[2]
                    ? "3"
                    : RARITIES[3]
                    ? "4"
                    : "5"}
                  <StarIcon className="size-4 text-[gold]" />
                </div>
              )}
            </div>
          </div>

          <button
            className="h-full p-2 text-gray-600 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-200"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            {isFilterOpen ? (
              <ChevronUp className="size-4" />
            ) : (
              <ChevronDown className="size-4" />
            )}
          </button>
        </div>

        {isFilterOpen && (
          <div className="absolute flex flex-col items-center justify-evenly pt-4 end-0 z-10 w-full rounded-md border border-gray-100 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-900">
            <ArtifactFilterStack
              {...{
                setIsFilterOpen,
                artifactSearch,
                setArtifactSearch,
                selectedArtifactRarity,
                setSelectedArtifactRarity,
              }}
            />
          </div>
        )}
      </div>
      <div className="hidden lg:flex flex-col items-center lg:flex-row lg:justify-center lg:space-x-4">
        <ArtifactFilterStack
          {...{
            setIsFilterOpen,
            artifactSearch,
            setArtifactSearch,
            selectedArtifactRarity,
            setSelectedArtifactRarity,
          }}
        />
      </div>
    </div>
  );
}
