import { DeleteIcon } from "lucide-react";

import RarityFilter from "~/components/common/filters/rarityFilter";
import SearchFilter from "~/components/common/filters/searchFilter";
import WeaponFilter from "~/components/common/filters/weaponFilter";
import { IRarityType, IWeaponType } from "~/types/enka/enka.types";
import { IBaseWeaponSeries } from "~/types/enka/weapon.types";

import WeaponSeriesFilter from "./weaponSeriesFilter";

type Props = {
  setIsFilterOpen: (value: boolean) => void;
  selectedWeaponType: IWeaponType | null;
  setSelectedWeaponType: (weaponType: IWeaponType | null) => void;
  selectedRarity: IRarityType | null;
  setSelectedRarity: (rarity: IRarityType | null) => void;
  selectedSeries: string;
  setSelectedSeries: (series: string) => void;
  weaponSeries: IBaseWeaponSeries;
  weaponSearch: string;
  setWeaponSearch: (searchWeapon: string) => void;
};

export default function WeaponFilterStack({
  setIsFilterOpen,
  selectedWeaponType,
  setSelectedWeaponType,
  selectedRarity,
  setSelectedRarity,
  selectedSeries,
  setSelectedSeries,
  weaponSeries,
  weaponSearch,
  setWeaponSearch
}: Readonly<Props>) {
  const seriesOptions = Object.keys(weaponSeries).map((series) => ({
    value: series,
    label: series,
    itemCount: weaponSeries[series].length
  }));

  return (
    <>
      <SearchFilter
        {...{ searchValue: weaponSearch, setSearchValue: setWeaponSearch }}
      />
      <WeaponFilter
        {...{
          selectedWeapon: selectedWeaponType,
          setSelectedWeapon: setSelectedWeaponType
        }}
      />
      <RarityFilter
        {...{ selectedRarity, setSelectedRarity }}
        category="weapon"
      />
      <WeaponSeriesFilter
        {...{ selectedSeries, setSelectedSeries, series: seriesOptions }}
      />

      <button
        className="mb-3 flex h-[40px] w-full max-w-[300px] cursor-pointer items-center rounded-lg p-2 text-xs text-white hover:bg-slate-700 lg:w-auto"
        onClick={() => {
          setSelectedWeaponType(null);
          setSelectedRarity(null);
          setSelectedSeries("all");
          setIsFilterOpen(false);
        }}
      >
        Clear
        <DeleteIcon className="ml-2 size-4" />
      </button>
    </>
  );
}
