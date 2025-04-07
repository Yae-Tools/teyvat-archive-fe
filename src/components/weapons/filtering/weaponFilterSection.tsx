"use client";

import { useAtom } from "jotai";
import { SlidersHorizontal, StarIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

import {
  selectedWeaponRarityAtom,
  selectedWeaponSeriesAtom,
  selectedWeaponTypeAtom,
  weaponSearchAtom,
  weaponSortAscAtom,
  weaponSortingAtom
} from "~/atoms/teyvat/weapon.atom";
import Dropdown from "~/components/common/filters/filterDropdown";
import SortDropDownMobile from "~/components/common/filters/sortDropDownMobile";
import SortSelector from "~/components/common/filters/sortSelector";
import { RARITY_TYPES } from "~/data/teyvatData";
import { IRarityType } from "~/types/enka/enka.types";
import { IBaseWeaponSeries } from "~/types/enka/weapon.types";
import { weaponTypeIconFilter } from "~/utils/weaponIconFilter";

import WeaponFilterStack from "./weaponFilterStack";

type Props = {
  weaponSeries: IBaseWeaponSeries;
};

export default function WeaponFilterSection({ weaponSeries }: Readonly<Props>) {
  const isLg = useMediaQuery({ minWidth: 1024 });

  const [selectedWeaponType, setSelectedWeaponType] = useAtom(
    selectedWeaponTypeAtom
  );
  const [selectedWeaponRarity, setSelectedWeaponRarity] = useAtom(
    selectedWeaponRarityAtom
  );
  const [selectedSeries, setSelectedSeries] = useAtom(selectedWeaponSeriesAtom);
  const [weaponSearch, setWeaponSearch] = useAtom(weaponSearchAtom);
  const [selectedSort, setSelectedSort] = useAtom(weaponSortingAtom);
  const [isSortAsc, setIsSortAsc] = useAtom(weaponSortAscAtom);

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const getRarityLabel = (rarity: IRarityType) => {
    return RARITY_TYPES[rarity];
  };

  return (
    <div className="mx-2 flex w-full flex-col items-center px-2 pt-3">
      {isLg ? (
        <div className="flex w-full flex-col items-center justify-between px-2">
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
          <SortSelector
            {...{ selectedSort, setSelectedSort, isSortAsc, setIsSortAsc }}
          />
        </div>
      ) : (
        <div className="flex w-full max-w-[320px] flex-col space-y-2 lg:hidden">
          <div className="relative">
            <Dropdown
              {...{
                isOpen: isFilterOpen,
                setIsOpen: setIsFilterOpen,
                title: "Filters",
                icon: <SlidersHorizontal className="ml-2 size-4" />
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
            </Dropdown>

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
          <SortDropDownMobile
            {...{
              selectedSort,
              setSelectedSort,
              isSortAsc,
              setIsSortAsc
            }}
          />
        </div>
      )}
    </div>
  );
}
