import { atom } from "jotai";
import {
  IElementType,
  IRarityType,
  IWeaponType,
} from "~/types/enka/enka.types";

export const selectedCharacterElementAtom = atom<IElementType | null>(null);
export const selectedCharacterWeaponAtom = atom<IWeaponType | null>(null);
export const selectedCharacterRarityAtom = atom<IRarityType | null>(null);
export const characterSearchAtom = atom("");
