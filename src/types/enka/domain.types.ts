export enum DateEnum {
  MONDAY = "monday",
  TUESDAY = "tuesday",
  WEDNESDAY = "wednesday",
  THURSDAY = "thursday",
  FRIDAY = "friday",
  SATURDAY = "saturday",
  SUNDAY = "sunday"
}

export interface IDomainReward {
  id: number;
  name: string;
  icon: string;
  stars: number;
}

export interface IDailyDomain {
  id: string;
  name: string;
  reward: IDomainReward[];
  city: number;
}

export interface IDailyDomainData {
  day: DateEnum;
  domains: IDailyDomain[];
}

// response is an array of IDailyDomainData
