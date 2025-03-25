"use client";

import {
  AdjustmentsHorizontalIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  StarIcon,
} from "@heroicons/react/16/solid";
import { useAtom } from "jotai";
import { useState } from "react";

import {
  characterSearchAtom,
  selectedCharacterElementAtom,
  selectedCharacterRarityAtom,
  selectedCharacterWeaponAtom,
} from "~/atoms/teyvat/character.atom";
import { RARITIES } from "~/data/teyvatData";
import { getElementTypeImage } from "~/utils/elementalImagePicker";
import { weaponTypeIconFilter } from "~/utils/weaponIconFilter";
import CharacterFilterStack from "./characterFilterStack";
import Image from "next/image";

export default function CharacterFilterSection() {
  const [selectedCharacterElement, setSelectedCharacterElement] = useAtom(
    selectedCharacterElementAtom
  );
  const [selectedCharacterWeapon, setSelectedCharacterWeapon] = useAtom(
    selectedCharacterWeaponAtom
  );
  const [selectedCharacterRarity, setSelectedCharacterRarity] = useAtom(
    selectedCharacterRarityAtom
  );
  const [characterSearch, setCharacterSearch] = useAtom(characterSearchAtom);

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="w-full pt-3 mx-2 px-2 flex flex-col items-center">
      <div className="relative lg:hidden w-full max-w-[320px]">
        <div className="inline-flex items-center overflow-hidden rounded-md border bg-white dark:border-gray-800 dark:bg-gray-900 w-full">
          <div className="border-e w-full px-4 py-2 text-sm/none text-gray-600 hover:bg-gray-50 hover:text-gray-700 dark:border-e-gray-800 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-200 flex items-center justify-start">
            <div className="flex items-center">
              <p>Filters</p>
              <AdjustmentsHorizontalIcon className="size-4 ml-2" />
            </div>

            <div className="flex items-center w-full space-x-1 justify-end">
              {selectedCharacterElement !== "all" && (
                <Image
                  src={getElementTypeImage(selectedCharacterElement)}
                  alt={selectedCharacterElement}
                  className="w-[24px]"
                />
              )}

              {selectedCharacterWeapon !== "all" && (
                <Image
                  src={
                    weaponTypeIconFilter[
                      selectedCharacterWeapon as keyof typeof weaponTypeIconFilter
                    ]
                  }
                  alt={selectedCharacterWeapon}
                  className="w-[26px]"
                  style={{
                    filter: "brightness(0) invert(1)",
                  }}
                />
              )}

              {selectedCharacterRarity !== "all" && (
                <div className="flex items-center">
                  {selectedCharacterRarity === RARITIES[3] ? "4" : "5"}
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
              <ChevronUpIcon className="size-4" />
            ) : (
              <ChevronDownIcon className="size-4" />
            )}
          </button>
        </div>

        {isFilterOpen && (
          <div className="absolute flex flex-col items-center justify-evenly pt-4 end-0 z-10 w-full rounded-md border border-gray-100 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-900">
            <CharacterFilterStack
              {...{
                setIsFilterOpen,
                selectedElement: selectedCharacterElement,
                setSelectedElement: setSelectedCharacterElement,
                selectedWeapon: selectedCharacterWeapon,
                setSelectedWeapon: setSelectedCharacterWeapon,
                selectedRarity: selectedCharacterRarity,
                setSelectedRarity: setSelectedCharacterRarity,
                characterSearch,
                setCharacterSearch,
              }}
            />
          </div>
        )}
      </div>
      <div className="hidden lg:flex flex-col items-center lg:flex-row lg:justify-center lg:space-x-4">
        <CharacterFilterStack
          {...{
            setIsFilterOpen,
            selectedElement: selectedCharacterElement,
            setSelectedElement: setSelectedCharacterElement,
            selectedWeapon: selectedCharacterWeapon,
            setSelectedWeapon: setSelectedCharacterWeapon,
            selectedRarity: selectedCharacterRarity,
            setSelectedRarity: setSelectedCharacterRarity,
            characterSearch,
            setCharacterSearch,
          }}
        />
      </div>
    </div>
  );
}
