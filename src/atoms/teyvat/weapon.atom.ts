import { atom } from "jotai";

import { IRarityType, IWeaponType } from "~/types/enka/enka.types";

export const selectedWeaponTypeAtom = atom<IWeaponType | null>(null);
export const selectedWeaponRarityAtom = atom<IRarityType | null>(null);
export const selectedWeaponSeriesAtom = atom("");
export const weaponSearchAtom = atom("");
