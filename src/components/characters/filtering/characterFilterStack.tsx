"use client";

import { BackspaceIcon } from "@heroicons/react/16/solid";

import SearchFilter from "~/components/common/filters/searchFilter";
import RarityFilter from "../../common/filters/rarityFilter";
import WeaponFilter from "../../common/filters/weaponFilter";
import ElementFilter from "./elementFilter";

type Props = {
  setIsFilterOpen: (value: boolean) => void;
  selectedElement: string;
  setSelectedElement: (element: string) => void;
  selectedWeapon: string;
  setSelectedWeapon: (weapon: string) => void;
  selectedRarity: string;
  setSelectedRarity: (rarity: string) => void;
  characterSearch: string;
  setCharacterSearch: (search: string) => void;
};

export default function CharacterFilterStack({
  setIsFilterOpen,
  selectedElement,
  setSelectedElement,
  selectedWeapon,
  setSelectedWeapon,
  selectedRarity,
  setSelectedRarity,
  characterSearch,
  setCharacterSearch,
}: Readonly<Props>) {
  return (
    <>
      <SearchFilter
        {...{
          searchValue: characterSearch,
          setSearchValue: setCharacterSearch,
        }}
      />
      <ElementFilter {...{ selectedElement, setSelectedElement }} />
      <WeaponFilter {...{ selectedWeapon, setSelectedWeapon }} />
      <RarityFilter
        {...{ selectedRarity, setSelectedRarity, category: "character" }}
      />
      <button
        className="w-full lg:w-auto p-2 mb-3 max-w-[300px] cursor-pointer rounded-lg h-[40px] text-xs hover:bg-slate-700 text-white flex items-center"
        onClick={() => {
          setSelectedElement("all");
          setSelectedWeapon("all");
          setSelectedRarity("all");
          setCharacterSearch("");
          setIsFilterOpen(false);
        }}
      >
        Clear
        <BackspaceIcon className="size-4 ml-2" />
      </button>
    </>
  );
}
