"use client";

import { useAtom } from "jotai";
import { StarIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import {
  selectedWeaponRarityAtom,
  selectedWeaponSeriesAtom,
  selectedWeaponTypeAtom,
  weaponSearchAtom
} from "~/atoms/teyvat/weapon.atom";
import FilterDropDown from "~/components/common/filters/filterDropdown";
import { RARITY_TYPES } from "~/data/teyvatData";
import { IRarityType } from "~/types/enka/enka.types";
import { IBaseWeaponSeries } from "~/types/enka/weapon.types";
import { weaponTypeIconFilter } from "~/utils/weaponIconFilter";

import WeaponFilterStack from "./weaponFilterStack";

type Props = {
  weaponSeries: IBaseWeaponSeries;
};

export default function WeaponFilterSection({ weaponSeries }: Readonly<Props>) {
  const [selectedWeaponType, setSelectedWeaponType] = useAtom(
    selectedWeaponTypeAtom
  );
  const [selectedWeaponRarity, setSelectedWeaponRarity] = useAtom(
    selectedWeaponRarityAtom
  );
  const [selectedSeries, setSelectedSeries] = useAtom(selectedWeaponSeriesAtom);
  const [weaponSearch, setWeaponSearch] = useAtom(weaponSearchAtom);

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const getRarityLabel = (rarity: IRarityType) => {
    return RARITY_TYPES[rarity];
  };

  return (
    <div className="mx-2 flex w-full flex-col items-center px-2 pt-3">
      <div className="relative w-full max-w-[320px] lg:hidden">
        <FilterDropDown
          {...{
            isFilterOpen,
            setIsFilterOpen
          }}
        >
          {selectedWeaponType && (
            <Image
              src={weaponTypeIconFilter[selectedWeaponType]}
              alt={selectedWeaponType}
              className="w-[24px]"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          )}
          {selectedWeaponRarity && (
            <div className="flex items-center justify-end space-x-2">
              {getRarityLabel(selectedWeaponRarity)}
              <StarIcon className="size-4 text-[gold]" />
            </div>
          )}
        </FilterDropDown>

        {isFilterOpen && (
          <div className="absolute end-0 z-10 flex w-full flex-col items-center justify-evenly rounded-md border border-gray-100 bg-white pt-4 shadow-lg dark:border-slate-700 dark:bg-slate-900">
            <WeaponFilterStack
              {...{
                setIsFilterOpen,
                selectedWeaponType,
                setSelectedWeaponType,
                selectedRarity: selectedWeaponRarity,
                setSelectedRarity: setSelectedWeaponRarity,
                selectedSeries,
                setSelectedSeries,
                weaponSeries,
                setWeaponSearch,
                weaponSearch
              }}
            />
          </div>
        )}
      </div>
      <div className="hidden flex-col items-center lg:flex lg:flex-row lg:justify-center lg:space-x-4">
        <WeaponFilterStack
          {...{
            setIsFilterOpen,
            selectedWeaponType,
            setSelectedWeaponType,
            selectedRarity: selectedWeaponRarity,
            setSelectedRarity: setSelectedWeaponRarity,
            selectedSeries,
            setSelectedSeries,
            weaponSeries,
            setWeaponSearch,
            weaponSearch
          }}
        />
      </div>
    </div>
  );
}
