import { IEnkaStat, IWeaponType } from "./enka.types";

export interface IBaseWeapon {
  id: string;
  name: string;
  enkaId: number;
}

export interface IWeaponData {
  rankLevel: number;
  weaponBaseExp: number;
  skillAffix: number[];
  weaponProp: {
    propType: string;
    initValue: number;
  }[];
}
export interface IRefinement {
  name: string;
  description: string;
  level: number;
  id: number;
}

export interface IBasicWeapon extends IBaseWeapon {
  icon: string;
  awakenIcon: string;
  stars: number;
  weaponType: IWeaponType;
  series: string;
}

export interface IWeapon extends IBasicWeapon {
  description: string;
  splashImage: string;
  refinements: IRefinement[];
  stats: {
    [key: number]: IEnkaStat[];
  };
  data: IWeaponData;
}

export interface IBaseWeaponSeries {
  [key: string]: IBaseWeapon[];
}
