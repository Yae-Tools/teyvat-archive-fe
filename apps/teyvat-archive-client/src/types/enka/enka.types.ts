import {
  BODY_TYPE_KEYS,
  CHARACTER_SORTING_OPTIONS,
  ELEMENT_TYPES,
  EQUIP_TYPES,
  RARITY_TYPES,
  SORTING_OPTIONS,
  WEAPON_TYPES
} from "~/data/teyvatData";

export interface IEnkaStat {
  fightProp: string;
  fightPropName: string;
  isPercent: boolean;
  value: number;
  rawValue: number;
  multiplier: number;
}

export interface IReward {
  id: number;
  name: string;
  icon: string;
  rarity: number;
  amount: number;
}

export interface ICalendarBannerWeapon {
  id: string;
  name: string;
  rarity: number;
  icon: string;
}

export interface ICalendarBannerCharacter extends ICalendarBannerWeapon {
  element: string;
}

export interface ICalendarBaseEvent {
  id: number;
  name: string;
  type_name: string;
  start_time: string;
  end_time: string;
  rewards: IReward[];
}
export interface ICalendarEvent extends ICalendarBaseEvent {
  description: string;
  image_url: string;
}

export interface ICalendarBanner {
  id: string;
  name: string;
  version: string;
  characters: ICalendarBannerCharacter[];
  weapons: ICalendarBannerWeapon[];
}

interface ICalendarChallenge extends ICalendarBaseEvent {
  special_reward: null;
}

export interface ICalendar {
  events: ICalendarEvent[];
  banners: ICalendarBanner[];
  challenges: ICalendarChallenge[];
}

export interface IRedeemCode {
  code: string;
  rewards: string[];
}

export interface IRedeemCodeResponse {
  [key: string]: IRedeemCode[];
}
interface IAbyssMeta {
  author: string;
  version: string;
}

interface IAbyssSchedule {
  id: number;
  start_time: number;
  end_time: number;
}

interface IAbyssSampleCountries {
  id: string;
  value: string;
  color: string;
}

interface IAbyssCharacterArtifacts {
  set: {
    [key: string]: number;
  };
  value: number;
}

interface IAbyssGeneric {
  id: string;
  value: number;
}

export interface IAbyssCharacterResponse {
  id: string;
  useRate: number;
  ownRate: number;
  useByOwnRate: number;
  weapons: IAbyssGeneric[];
  artifacts: IAbyssCharacterArtifacts[];
  constellations: IAbyssGeneric[];
}

export interface IAbyssParty {
  characterIds: string[];
  value: number;
  ownRate: number;
  useByOwnRate: number;
}

export interface IAbyssPartyData {
  value: number;
  ownRate: number;
  useByOwnRate: number;
  characters: {
    id: string;
    name: string;
    icon: string;
    element: IElementType;
    rarity: IRarityType;
    skillDepotId: string;
    nameId: string;
  }[];
}

export interface IAbyssPartyDetails {
  firstHalf: IAbyssParty[];
  secondHalf: IAbyssParty[];
}

export interface IAbyssDataResponse {
  meta: IAbyssMeta;
  data: {
    schedule: IAbyssSchedule;
    sampleCollectionProgress: number;
    sampleSize: number;
    sampleSize_x_a: number;
    sampleSize_x_b: number;
    sampleCountries: IAbyssSampleCountries[];
    threshold: {
      use_rate: number;
    };
  };
  characters: IAbyssCharacterResponse[];
  parties: IAbyssPartyDetails;
}

export interface IAbyssBlessing {
  id: string;
  begin: string;
  end: string;
  icon: string;
  name: string;
  description: string;
}

export type IDefaultSorting = keyof typeof SORTING_OPTIONS;

export type ICharacterSorting = keyof typeof CHARACTER_SORTING_OPTIONS;

export type IRarityType = keyof typeof RARITY_TYPES;

export type IElementType = keyof typeof ELEMENT_TYPES;

export type IWeaponType = keyof typeof WEAPON_TYPES;

export type IEquipType = keyof typeof EQUIP_TYPES;

export type IBodyType = keyof typeof BODY_TYPE_KEYS;
