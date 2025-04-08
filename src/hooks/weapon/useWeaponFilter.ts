import { useAtomValue } from "jotai";

import {
  selectedWeaponRarityAtom,
  selectedWeaponSeriesAtom,
  selectedWeaponTypeAtom,
  weaponSearchAtom,
  weaponSortAscAtom,
  weaponSortingAtom
} from "~/atoms/teyvat/weapon.atom";

function useWeaponFilters() {
  const weaponType = useAtomValue(selectedWeaponTypeAtom);
  const weaponRarity = useAtomValue(selectedWeaponRarityAtom);
  const weaponSeries = useAtomValue(selectedWeaponSeriesAtom);
  const search = useAtomValue(weaponSearchAtom);
  const sort = useAtomValue(weaponSortingAtom);
  const isAsc = useAtomValue(weaponSortAscAtom);

  return { weaponType, weaponRarity, weaponSeries, search, sort, isAsc };
}

export default useWeaponFilters;
