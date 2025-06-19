import {
  IAbyssCharacterResponse,
  IBodyType,
  IElementType,
  IEnkaStat,
  IRarityType,
  IWeaponType
} from "./enka.types";

export interface IConstellation {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface IAscenstionCostItem {
  count: number;
  materialId: number;
  materialName: string;
  materialIcon: string;
  materialRarity: number;
}
export interface ICharacterAscensionData {
  level: number;
  unlockMaxLevel: number;
  requiredAdventureRank: number;
  items: IAscenstionCostItem[];
  addProps: IEnkaStat[];
  coins: number;
}

export interface IBirthday {
  month: number;
  day: number;
}

export interface ICharacterLocation {
  faction: string;
  region: string;
}

export interface ICharacterTalentStats {
  name: string;
  usedNumbers: {
    level: number;
    value: number[];
  }[];
  values: {
    level: number;
    value: string;
  }[];
}

export interface ITalentAscensionCost {
  level: number;
  items: IAscenstionCostItem[];
  coins: number;
}

export interface ITalent {
  id: number;
  name: string;
  icon: string;
  description: string;
  stats: ICharacterTalentStats[];
  ascensionCost: ITalentAscensionCost[];
}

export interface IAllTalent extends ITalent {
  isPassive: boolean;
}

export interface IBaseCharacter {
  element: IElementType;
  nameId: string;
  iconUrl: string;
  id: string;
  enkaId: number;
  skillDepotId: string;
  isTraveler: boolean;
  name: string;
  nameCard: string;
  rarity: IRarityType;
  weaponType: IWeaponType;
  releasedAt: string;
}

export interface ICharacter extends IBaseCharacter {
  enkaId: number;
  splashUrl: string;
  constellations: IConstellation[];
  weaponType: IWeaponType;
  stars: number;
  location: ICharacterLocation;
  description: string;
  constellation: string;
  constellationIcon: string;
  skills: ITalent[];
  sideIcon: string;
  passiveTalents: ITalent[];
  ascensionData: ICharacterAscensionData[];
  title: string;
  birthday: IBirthday | null;
  bodyType: IBodyType;
  isArchon: boolean;
}

export interface ITopCharacter {
  id: string;
  useRate: number;
  ownRate: number;
  weapons: IAbyssCharacterResponse["weapons"];
  artifacts: IAbyssCharacterResponse["artifacts"];
  constellations: IAbyssCharacterResponse["constellations"];
  rarity?: IRarityType;
  element?: string;
  icon?: string;
}
