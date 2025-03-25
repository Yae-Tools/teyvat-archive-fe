import { atom } from "jotai";

export const artifactSearchAtom = atom("");
export const artifactRarityAtom = atom("all");
export const selectedArtifactRarityAtom = atom<number | null>(null);
export const selectedArtifactEquipTypeAtom = atom<EquipType>("EQUIP_BRACER");
export const selectedRarityFullSetAtom = atom<IEquipCollection[]>([]);
