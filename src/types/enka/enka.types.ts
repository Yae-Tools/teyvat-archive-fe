import {
  BODY_TYPE_KEYS,
  ELEMENT_TYPES,
  EQUIP_TYPES,
  RARITY_TYPES,
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
  use_rate: number;
  own_rate: number;
  use_by_own_rate: number;
  weapons: IAbyssGeneric[];
  artifacts: IAbyssCharacterArtifacts[];
  constellations: IAbyssGeneric[];
}

interface IAbyssPartyData {
  id: string;
  value: number;
  own_rate: number;
  use_by_own_rate: number;
}

interface IAbyssParty {
  [key: string]: {
    [key: string]: IAbyssPartyData[];
  };
}

export interface IAbyssDataResponse {
  meta: IAbyssMeta;
  data: {
    schedule: IAbyssSchedule;
    sample_collection_progress: number;
    sample_size: number;
    sample_size_x_a: number;
    sample_size_x_b: number;
    sample_countries: IAbyssSampleCountries[];
    threshold: {
      use_rate: number;
    };
  };
  characters: IAbyssCharacterResponse[];
}

export interface IAbyssBlessing {
  id: string;
  begin: string;
  end: string;
  icon: string;
  name: string;
  description: string;
}

export type IRarityType = keyof typeof RARITY_TYPES;

export type IElementType = keyof typeof ELEMENT_TYPES;

export type IWeaponType = keyof typeof WEAPON_TYPES;

export type IEquipType = keyof typeof EQUIP_TYPES;

export type IBodyType = keyof typeof BODY_TYPE_KEYS;
