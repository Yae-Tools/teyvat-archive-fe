"use client";

import { useAtom } from "jotai";
import { SlidersHorizontal, StarIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

import {
  characterSearchAtom,
  characterSortAscAtom,
  characterSortingAtom,
  selectedCharacterElementAtom,
  selectedCharacterRarityAtom,
  selectedCharacterWeaponAtom
} from "~/atoms/teyvat/character.atom";
import ButtonGroup from "~/components/common/basic/buttonGroup";
import AscSort from "~/components/common/filters/ascSort";
import Dropdown from "~/components/common/filters/filterDropdown";
import { CHARACTER_SORTING_ARRAY, RARITY_TYPES } from "~/data/teyvatData";
import { ICharacterSorting } from "~/types/enka/enka.types";
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
  const [selectedSort, setSelectedSort] = useAtom(characterSortingAtom);
  const [isSortAsc, setIsSortAsc] = useAtom(characterSortAscAtom);
  const [characterSearch, setCharacterSearch] = useAtom(characterSearchAtom);

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);

  return (
    <div className="flex w-full flex-col items-center px-2 pt-3">
      {isLg ? (
        <div className="flex w-full flex-col items-center justify-between px-2">
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
          <div className="flex w-full items-center justify-center space-x-2">
            <ButtonGroup
              items={CHARACTER_SORTING_ARRAY.map((sortOption, index) => ({
                id: index,
                label: sortOption,
                value: sortOption,
                onClick: (srtOpt: ICharacterSorting) => setSelectedSort(srtOpt)
              }))}
              selectedItem={selectedSort}
            />
            <AscSort {...{ isSortAsc, setIsSortAsc }} />
          </div>
        </div>
      ) : (
        <div className="flex w-full max-w-[320px] flex-col space-y-2 lg:hidden">
          {/* Filters Dropdown */}
          <div className="relative">
            <Dropdown
              {...{
                isOpen: isFilterOpen,
                setIsOpen: setIsFilterOpen,
                title: "Filters",
                icon: <SlidersHorizontal className="ml-2 size-4" />
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
                  style={{ filter: "brightness(0) invert(1)" }}
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
            </Dropdown>

            {isFilterOpen && (
              <div className="absolute end-0 top-full z-10 flex w-full flex-col items-center justify-evenly rounded-md border border-gray-100 bg-white pt-4 shadow-lg dark:border-slate-700 dark:bg-slate-900">
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

          {/* Sort By Dropdown */}
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
                {CHARACTER_SORTING_ARRAY.map((sortOption) => (
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
