"use client";

import { useAtom } from "jotai";
import { useState } from "react";
import Image from "next/image";
import { StarIcon } from "lucide-react";

import {
  characterSearchAtom,
  selectedCharacterElementAtom,
  selectedCharacterRarityAtom,
  selectedCharacterWeaponAtom,
} from "~/atoms/teyvat/character.atom";
import { getElementTypeImage } from "~/utils/elementalImagePicker";
import { weaponTypeIconFilter } from "~/utils/weaponIconFilter";
import CharacterFilterStack from "./characterFilterStack";
import FilterDropDown from "~/components/common/filters/filterDropdown";
import { RARITY_TYPES } from "~/data/teyvatData";

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
        <FilterDropDown
          {...{
            isFilterOpen,
            setIsFilterOpen,
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
                filter: "brightness(0) invert(1)",
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
