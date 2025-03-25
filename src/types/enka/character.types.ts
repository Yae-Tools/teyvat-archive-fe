interface IConstellation {
  id: string;
  name: string;
  description: string;
  icon: string;
}

interface IAscensionData {
  scoinCost: number;
  costItems: [
    {
      id: number;
      count: number;
    }
  ];
  addProps: [propType: string];
}

interface IBirthday {
  month: number;
  day: number;
}

interface ICharacterLocation {
  faction: string;
  region: string;
}

interface ITalent {
  id: number;
  name: string;
  icon: string;
  description: string;
}

interface IAllTalent extends ITalent {
  isPassive: boolean;
}

interface IBaseCharacter {
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

interface ICharacter extends IBaseCharacter {
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
