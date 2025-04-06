"use client";

import { useAtom } from "jotai";
import { StarIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

import {
  characterSearchAtom,
  selectedCharacterElementAtom,
  selectedCharacterRarityAtom,
  selectedCharacterWeaponAtom
} from "~/atoms/teyvat/character.atom";
import FilterDropDown from "~/components/common/filters/filterDropdown";
import { RARITY_TYPES } from "~/data/teyvatData";
import { getElementTypeImage } from "~/utils/elementalImagePicker";
import { weaponTypeIconFilter } from "~/utils/weaponIconFilter";

import CharacterFilterStack from "./characterFilterStack";

export default function CharacterFilterSection() {
  const isLg = useMediaQuery({ minWidth: 1024 });

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
    <div className="mx-2 flex w-full flex-col items-center px-2 pt-3">
      {isLg ? (
        <div className="hidden flex-col items-center lg:flex lg:flex-row lg:justify-center lg:space-x-4">
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
              setCharacterSearch
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
            {selectedCharacterElement && (
              <Image
                src={getElementTypeImage(selectedCharacterElement)}
                alt={selectedCharacterElement}
                className="w-[24px]"
              />
            )}

            {selectedCharacterWeapon && (
              <Image
                src={weaponTypeIconFilter[selectedCharacterWeapon]}
                alt={selectedCharacterWeapon}
                className="w-[26px]"
                style={{
                  filter: "brightness(0) invert(1)"
                }}
              />
            )}

            {selectedCharacterRarity && (
              <div className="flex items-center">
                {RARITY_TYPES[selectedCharacterRarity]}
                <StarIcon
                  className="size-4 text-[gold]"
                  fill="currentColor"
                  strokeWidth={1}
                />
              </div>
            )}
          </FilterDropDown>

          {isFilterOpen && (
            <div className="absolute end-0 z-10 flex w-full flex-col items-center justify-evenly rounded-md border border-gray-100 bg-white pt-4 shadow-lg dark:border-slate-700 dark:bg-slate-900">
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
                  setCharacterSearch
                }}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
