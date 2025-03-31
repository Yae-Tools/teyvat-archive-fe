import {
  IBodyType,
  IElementType,
  IEquipType,
  IRarityType,
  IWeaponType,
} from "~/types/enka/enka.types";

export const ELEMENT_TYPES = {
  Anemo: "Anemo",
  Geo: "Geo",
  Electro: "Electro",
  Dendro: "Dendro",
  Hydro: "Hydro",
  Pyro: "Pyro",
  Cryo: "Cryo",
};
export const ELEMENTS_ARRAY = Object.keys(ELEMENT_TYPES) as IElementType[];

export const WEAPON_TYPES = {
  WEAPON_SWORD_ONE_HAND: "Sword",
  WEAPON_CLAYMORE: "Claymore",
  WEAPON_POLE: "Polearm",
  WEAPON_CATALYST: "Catalyst",
  WEAPON_BOW: "Bow",
};
export const WEAPONS_ARRAY = Object.keys(WEAPON_TYPES) as IWeaponType[];

export const RARITY_TYPES = {
  QUALITY_GRAY: "1",
  QUALITY_GREEN: "2",
  QUALITY_BLUE: "3",
  QUALITY_PURPLE: "4",
  QUALITY_ORANGE: "5",
  QUALITY_ORANGE_SP: "5SP",
};
export const RARITIES_ARRAY = Object.keys(RARITY_TYPES) as IRarityType[];

export const EQUIP_TYPES = {
  EQUIP_BRACER: "Flower of Life",
  EQUIP_NECKLACE: "Plume of Death",
  EQUIP_SHOES: "Sands of Eon",
  EQUIP_RING: "Goblet of Eonothem",
  EQUIP_DRESS: "Goblet of Eonothem",
};

export const EQUIP_ARRAY = Object.keys(EQUIP_TYPES) as IEquipType[];

export const BODY_TYPES = {
  BODY_MALE: "BODY_MALE",
  BODY_BODY: "BODY_BOY",
  BODY_LADY: "BODY_LADY",
  BODY_GIRL: "BODY_GIRL",
  BODY_LOLI: "BODY_LOLI",
};
export const BODY_ARRAY = Object.keys(BODY_TYPES) as IBodyType[];
