import { IElementType, IRarityType } from "./enka.types";

export enum DateEnum {
  MONDAY = "monday",
  TUESDAY = "tuesday",
  WEDNESDAY = "wednesday",
  THURSDAY = "thursday",
  FRIDAY = "friday",
  SATURDAY = "saturday",
  SUNDAY = "sunday"
}

export interface IRewardUsedByCharacter {
  id: number;
  name: string;
  iconUrl: string;
  skillDepotId: number;
  isTraveler: boolean;
  rarity: IRarityType;
  element: IElementType;
  nameId: string;
}

export interface IRewardUsedByWeapon {
  id: number;
  name: string;
  iconUrl: string;
  rarity: IRarityType;
  nameId: string;
}

export interface IDomainReward {
  id: number;
  name: string;
  icon: string;
  stars: number;
  materialType: string;
  itemType: string;
  usedBy: IRewardUsedByCharacter[] | IRewardUsedByWeapon[];
}

export type IDomainType = "CHAR_ASC" | "WEAPON_ASC";

export interface IDailyDomain {
  id: string;
  name: string;
  reward: IDomainReward[];
  city: number;
  domainType: IDomainType;
}

export interface IDailyDomainData {
  day: DateEnum;
  domains: IDailyDomain[];
}

// response is an array of IDailyDomainData
