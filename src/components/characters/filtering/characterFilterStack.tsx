"use client";

import { DeleteIcon } from "lucide-react";
import SearchFilter from "~/components/common/filters/searchFilter";
import RarityFilter from "../../common/filters/rarityFilter";
import WeaponFilter from "../../common/filters/weaponFilter";
import ElementFilter from "./elementFilter";
import {
  IElementType,
  IRarityType,
  IWeaponType,
} from "~/types/enka/enka.types";

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
          setSelectedElement(null);
          setSelectedWeapon(null);
          setSelectedRarity(null);
          setCharacterSearch("");
          setIsFilterOpen(false);
        }}
      >
        Clear
        <DeleteIcon className="size-4 ml-2" />
      </button>
    </>
  );
}
