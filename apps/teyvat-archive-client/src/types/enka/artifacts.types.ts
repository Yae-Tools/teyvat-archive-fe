import { IEnkaStat, IEquipType } from "./enka.types";

export interface IBaseArtifact {
  id: number;
  name: string;
  eqipType: string;
  icon: string;
  stars: number;
  set: IBaseArtifactSet;
}

export interface IBaseArtifactSet {
  id: number;
  name: string;
  icon: string;
  highestRarity: number;
}

export interface ISetBonus {
  id: number;
  needCount: number;
  description: string;
  addProps: IEnkaStat[];
}

export interface IEquipCollection {
  id: number;
  equipType: IEquipType;
  equipTypeName: string;
  name: string;
  icon: string;
  stars: number;
  description: string;
}

export interface IArtifactSet extends IBaseArtifactSet {
  rarities: number[];
  setBonus: ISetBonus[];
  collection: IEquipCollection[];
}
