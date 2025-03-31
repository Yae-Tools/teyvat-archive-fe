import RarityFilter from "~/components/common/filters/rarityFilter";
import SearchFilter from "~/components/common/filters/searchFilter";
import WeaponFilter from "~/components/common/filters/weaponFilter";
import WeaponSeriesFilter from "./weaponSeriesFilter";
import { DeleteIcon } from "lucide-react";
import { IRarityType, IWeaponType } from "~/types/enka/enka.types";

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
  setWeaponSearch,
}: Readonly<Props>) {
  const seriesOptions = Object.keys(weaponSeries).map((series) => ({
    value: series,
    label: series,
    itemCount: weaponSeries[series].length,
  }));

  return (
    <>
      <SearchFilter
        {...{ searchValue: weaponSearch, setSearchValue: setWeaponSearch }}
      />
      <WeaponFilter
        {...{
          selectedWeapon: selectedWeaponType,
          setSelectedWeapon: setSelectedWeaponType,
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
        className="w-full lg:w-auto p-2 mb-3 max-w-[300px] cursor-pointer rounded-lg h-[40px] text-xs hover:bg-slate-700 text-white flex items-center"
        onClick={() => {
          setSelectedWeaponType(null);
          setSelectedRarity(null);
          setSelectedSeries("all");
          setIsFilterOpen(false);
        }}
      >
        Clear
        <DeleteIcon className="size-4 ml-2" />
      </button>
    </>
  );
}
