import { atom } from "jotai";

import { CHARACTER_SORTING_OPTIONS } from "~/data/teyvatData";
import {
  ICharacterSorting,
  IElementType,
  IRarityType,
  IWeaponType
} from "~/types/enka/enka.types";

export const selectedCharacterElementAtom = atom<IElementType | null>(null);
export const selectedCharacterWeaponAtom = atom<IWeaponType | null>(null);
export const selectedCharacterRarityAtom = atom<IRarityType | null>(null);
export const characterSortingAtom = atom<ICharacterSorting>(CHARACTER_SORTING_OPTIONS.Default);
export const characterSearchAtom = atom("");
