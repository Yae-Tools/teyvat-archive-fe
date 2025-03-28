"use client";

import { useAtom } from "jotai";
import { useState } from "react";
import Image from "next/image";
import {
  ChevronDown,
  ChevronUp,
  SlidersHorizontal,
  StarIcon,
} from "lucide-react";
import {
  selectedWeaponRarityAtom,
  selectedWeaponSeriesAtom,
  selectedWeaponTypeAtom,
  weaponSearchAtom,
} from "~/atoms/teyvat/weapon.atom";
import { RARITIES } from "~/data/teyvatData";
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

  const getRarityLabel = (rarity: string) => {
    switch (rarity) {
      case RARITIES[0]:
        return "1";
      case RARITIES[1]:
        return "2";
      case RARITIES[2]:
        return "3";
      case RARITIES[3]:
        return "4";
      case RARITIES[4]:
        return "5";
      default:
        return null;
    }
  };

  return (
    <div className="w-full pt-3 mx-2 px-2 flex flex-col items-center">
      <div className="relative lg:hidden w-full max-w-[320px]">
        <div className="inline-flex items-center overflow-hidden rounded-md border bg-white dark:border-gray-800 dark:bg-gray-900 w-full">
          <div className="border-e w-full px-4 py-2 text-sm/none text-gray-600 hover:bg-gray-50 hover:text-gray-700 dark:border-e-gray-800 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-200 flex items-center justify-start">
            <div className="flex items-center">
              <p>Filters</p>
              <SlidersHorizontal className="size-4 ml-2" />
            </div>

            <div className="flex items-center w-full space-x-1 justify-end">
              {selectedWeaponType !== "all" && (
                <Image
                  src={weaponTypeIconFilter[selectedWeaponType as IWeaponType]}
                  alt={selectedWeaponType}
                  className="w-[24px]"
                  style={{ filter: "brightness(0) invert(1)" }}
                />
              )}
              {selectedWeaponRarity !== "all" && (
                <div className="flex items-center space-x-2 justify-end">
                  {getRarityLabel(selectedWeaponRarity)}
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
              <ChevronUp className="size-4" />
            ) : (
              <ChevronDown className="size-4" />
            )}
          </button>
        </div>

        {isFilterOpen && (
          <div className="absolute flex flex-col items-center justify-evenly pt-4 end-0 z-10 w-full rounded-md border border-gray-100 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-900">
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
                weaponSearch,
              }}
            />
          </div>
        )}
      </div>
      <div className="hidden lg:flex flex-col items-center lg:flex-row lg:justify-center lg:space-x-4">
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
            weaponSearch,
          }}
        />
      </div>
    </div>
  );
}
