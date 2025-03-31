import { atom } from "jotai";

import { IEquipType, IRarityType } from "~/types/enka/enka.types";

export const artifactSearchAtom = atom("");
export const artifactRarityAtom = atom<IRarityType | null>(null);
export const selectedArtifactRarityAtom = atom<number | null>(null);
export const selectedArtifactEquipTypeAtom = atom<IEquipType>("EQUIP_BRACER");
export const selectedRarityFullSetAtom = atom<IEquipCollection[]>([]);
