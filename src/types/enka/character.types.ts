import {
  IAbyssCharacterResponse,
  IBodyType,
  IElementType,
  IRarityType,
  IWeaponType
} from "./enka.types";

export interface IConstellation {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface IAscensionData {
  scoinCost: number;
  costItems: [
    {
      id: number;
      count: number;
    }
  ];
  addProps: [propType: string];
}

export interface IBirthday {
  month: number;
  day: number;
}

export interface ICharacterLocation {
  faction: string;
  region: string;
}

export interface ITalent {
  id: number;
  name: string;
  icon: string;
  description: string;
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
  ascensionData: IAscensionData[];
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
