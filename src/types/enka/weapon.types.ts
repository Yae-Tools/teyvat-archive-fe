interface IBaseWeapon {
  id: string;
  name: string;
  enkaId: number;
}

interface IWeaponData {
  rankLevel: number;
  weaponBaseExp: number;
  skillAffix: number[];
  weaponProp: {
    propType: string;
    initValue: number;
    type: IWeaponCurve;
  }[];
}

interface IRefinement {
  name: string;
  description: string;
  level: number;
  id: number;
}

interface IBasicWeapon extends IBaseWeapon {
  icon: string;
  awakenIcon: string;
  stars: number;
  weaponType: IWeaponType;
  series: string;
}

interface IWeapon extends IBasicWeapon {
  description: string;
  splashImage: string;
  refinements: IRefinement[];
  stats: {
    [key: number]: IEnkaStat[];
  };
  data: IWeaponData;
}

interface IBaseWeaponSeries {
  [key: string]: IBaseWeapon[];
}
