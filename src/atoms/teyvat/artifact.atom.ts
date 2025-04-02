import { atom } from "jotai";

import { EQUIP_TYPE_KEYS } from "~/data/teyvatData";
import { IEquipCollection } from "~/types/enka/artifacts.types";
import { IEquipType, IRarityType } from "~/types/enka/enka.types";

export const artifactSearchAtom = atom("");
export const artifactRarityAtom = atom<IRarityType | null>(null);
export const selectedArtifactRarityAtom = atom<number | null>(null);
export const selectedArtifactEquipTypeAtom = atom<IEquipType>(
  EQUIP_TYPE_KEYS.EQUIP_BRACER
);
export const selectedRarityFullSetAtom = atom<IEquipCollection[]>([]);
