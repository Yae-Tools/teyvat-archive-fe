interface IBaseArtifact {
  id: number;
  name: string;
  eqipType: string;
  icon: string;
  stars: number;
  set: IBaseArtifactSet;
}

interface IBaseArtifactSet {
  id: number;
  name: string;
  icon: string;
  highestRarity: number;
}

interface ISetBonus {
  id: number;
  needCount: number;
  description: string;
  addProps: IEnkaStat[];
}

interface IEquipCollection {
  id: number;
  equipType: EquipType;
  equipTypeName: string;
  name: string;
  icon: string;
  stars: number;
  description: string;
}

interface IArtifactSet extends IBaseArtifactSet {
  rarities: number[];
  setBonus: ISetBonus[];
  collection: IEquipCollection[];
}
