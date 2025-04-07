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
import ButtonGroup from "~/components/common/basic/buttonGroup";
import AscSort from "~/components/common/filters/ascSort";
import Dropdown from "~/components/common/filters/filterDropdown";
import { RARITY_TYPES, SORTING_ARRAY } from "~/data/teyvatData";
import { IDefaultSorting, IRarityType } from "~/types/enka/enka.types";
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
  const [isSortOpen, setIsSortOpen] = useState(false);

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
          <div className="flex w-full items-center justify-center space-x-2">
            <ButtonGroup
              items={SORTING_ARRAY.map((sortOption, index) => ({
                id: index,
                label: sortOption,
                value: sortOption,
                onClick: (srtOpt: IDefaultSorting) => setSelectedSort(srtOpt)
              }))}
              selectedItem={selectedSort}
            />
            <AscSort {...{ isSortAsc, setIsSortAsc }} />
          </div>
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
                {SORTING_ARRAY.map((sortOption) => (
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
