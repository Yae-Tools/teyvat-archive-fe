import { atom } from "jotai";

import { SORTING_OPTIONS } from "~/data/teyvatData";
import {
  IDefaultSorting,
  IRarityType,
  IWeaponType
} from "~/types/enka/enka.types";

export const selectedWeaponTypeAtom = atom<IWeaponType | null>(null);
export const selectedWeaponRarityAtom = atom<IRarityType | null>(null);
export const selectedWeaponSeriesAtom = atom("");
export const weaponSearchAtom = atom("");
export const weaponSortAscAtom = atom(true);
export const weaponSortingAtom = atom<IDefaultSorting>(SORTING_OPTIONS.Default);
