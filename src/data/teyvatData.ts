import {
  IBodyType,
  IElementType,
  IEquipType,
  IRarityType,
  IWeaponType
} from "~/types/enka/enka.types";

export const ELEMENT_TYPES = {
  Anemo: "Anemo",
  Geo: "Geo",
  Electro: "Electro",
  Dendro: "Dendro",
  Hydro: "Hydro",
  Pyro: "Pyro",
  Cryo: "Cryo"
} as const;
export const ELEMENTS_ARRAY = Object.keys(ELEMENT_TYPES) as IElementType[];

export const WEAPON_TYPES = {
  WEAPON_SWORD_ONE_HAND: "Sword",
  WEAPON_CLAYMORE: "Claymore",
  WEAPON_POLE: "Polearm",
  WEAPON_CATALYST: "Catalyst",
  WEAPON_BOW: "Bow"
} as const;
export const WEAPONS_ARRAY = Object.keys(WEAPON_TYPES) as IWeaponType[];

export const RARITY_TYPES = {
  QUALITY_GRAY: "1",
  QUALITY_GREEN: "2",
  QUALITY_BLUE: "3",
  QUALITY_PURPLE: "4",
  QUALITY_ORANGE: "5",
  QUALITY_ORANGE_SP: "5SP"
} as const;
export const RARITY_TYPE_KEYS = {
  QUALITY_GRAY: "QUALITY_GRAY",
  QUALITY_GREEN: "QUALITY_GREEN",
  QUALITY_BLUE: "QUALITY_BLUE",
  QUALITY_PURPLE: "QUALITY_PURPLE",
  QUALITY_ORANGE: "QUALITY_ORANGE",
  QUALITY_ORANGE_SP: "QUALITY_ORANGE_SP"
} as const;

export const RARITIES_ARRAY = Object.keys(RARITY_TYPES) as IRarityType[];

export const EQUIP_TYPES = {
  EQUIP_BRACER: "Flower of Life",
  EQUIP_NECKLACE: "Plume of Death",
  EQUIP_SHOES: "Sands of Eon",
  EQUIP_RING: "Goblet of Eonothem",
  EQUIP_DRESS: "Goblet of Eonothem"
} as const;

export const EQUIP_TYPE_KEYS = {
  EQUIP_BRACER: "EQUIP_BRACER",
  EQUIP_NECKLACE: "EQUIP_NECKLACE",
  EQUIP_SHOES: "EQUIP_SHOES",
  EQUIP_RING: "EQUIP_RING",
  EQUIP_DRESS: "EQUIP_DRESS"
} as const;

export const EQUIP_ARRAY = Object.keys(EQUIP_TYPES) as IEquipType[];

export const BODY_TYPE_KEYS = {
  BODY_MALE: "BODY_MALE",
  BODY_BODY: "BODY_BOY",
  BODY_LADY: "BODY_LADY",
  BODY_GIRL: "BODY_GIRL",
  BODY_LOLI: "BODY_LOLI"
} as const;
export const BODY_ARRAY = Object.keys(BODY_TYPE_KEYS) as IBodyType[];

export const CHARACTER_SORTING_OPTIONS = {
  Default: "Default",
  Release: "Release",
  Name: "Name",
  Rarity: "Rarity"
} as const;

export const CHARACTER_SORTING_ARRAY = Object.keys(
  CHARACTER_SORTING_OPTIONS
) as Array<keyof typeof CHARACTER_SORTING_OPTIONS>;
