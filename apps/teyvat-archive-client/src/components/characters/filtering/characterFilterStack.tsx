"use client";

import { DeleteIcon } from "lucide-react";

import SearchFilter from "~/components/common/filters/searchFilter";
import {
  IElementType,
  IRarityType,
  IWeaponType
} from "~/types/enka/enka.types";

import RarityFilter from "../../common/filters/rarityFilter";
import WeaponFilter from "../../common/filters/weaponFilter";

import ElementFilter from "./elementFilter";

type Props = {
  setIsFilterOpen: (value: boolean) => void;
  selectedElement: IElementType | null;
  setSelectedElement: (element: IElementType | null) => void;
  selectedWeapon: IWeaponType | null;
  setSelectedWeapon: (weapon: IWeaponType | null) => void;
  selectedRarity: IRarityType | null;
  setSelectedRarity: (rarity: IRarityType | null) => void;
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
  setCharacterSearch
}: Readonly<Props>) {
  return (
    <>
      <SearchFilter
        {...{
          searchValue: characterSearch,
          setSearchValue: setCharacterSearch
        }}
      />
      <ElementFilter {...{ selectedElement, setSelectedElement }} />
      <WeaponFilter {...{ selectedWeapon, setSelectedWeapon }} />
      <RarityFilter
        {...{ selectedRarity, setSelectedRarity, category: "character" }}
      />
      <button
        className="mb-3 flex h-[40px] w-full max-w-[300px] cursor-pointer items-center rounded-lg p-2 text-xs text-white hover:bg-slate-700 lg:w-auto"
        onClick={() => {
          setSelectedElement(null);
          setSelectedWeapon(null);
          setSelectedRarity(null);
          setCharacterSearch("");
          setIsFilterOpen(false);
        }}
      >
        Clear
        <DeleteIcon className="ml-2 size-4" />
      </button>
    </>
  );
}
