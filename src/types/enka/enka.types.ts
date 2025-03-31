import {
  ELEMENT_TYPES,
  EQUIP_TYPES,
  RARITY_TYPES,
  WEAPON_TYPES,
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

export type IRarityType = keyof typeof RARITY_TYPES;

export type IElementType = keyof typeof ELEMENT_TYPES;

export type IWeaponType = keyof typeof WEAPON_TYPES;

export type IEquipType = keyof typeof EQUIP_TYPES;

type IBodyType =
  | "BODY_MALE"
  | "BODY_BOY"
  | "BODY_LADY"
  | "BODY_GIRL"
  | "BODY_LOLI";

type IWeaponCurve =
  | "GROW_CURVE_ATTACK_101"
  | "GROW_CURVE_ATTACK_102"
  | "GROW_CURVE_ATTACK_103"
  | "GROW_CURVE_ATTACK_104"
  | "GROW_CURVE_ATTACK_105"
  | "GROW_CURVE_CRITICAL_101"
  | "GROW_CURVE_ATTACK_201"
  | "GROW_CURVE_ATTACK_202"
  | "GROW_CURVE_ATTACK_203"
  | "GROW_CURVE_ATTACK_204"
  | "GROW_CURVE_ATTACK_205"
  | "GROW_CURVE_CRITICAL_201"
  | "GROW_CURVE_ATTACK_301"
  | "GROW_CURVE_ATTACK_302"
  | "GROW_CURVE_ATTACK_303"
  | "GROW_CURVE_ATTACK_304"
  | "GROW_CURVE_ATTACK_305"
  | "GROW_CURVE_CRITICAL_301";
