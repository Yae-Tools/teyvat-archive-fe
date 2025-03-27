interface IEnkaStat {
  fightProp: string;
  fightPropName: string;
  isPercent: boolean;
  value: number;
  rawValue: number;
  multiplier: number;
}

interface IReward {
  id: number;
  name: string;
  icon: string;
  rarity: number;
  amount: number;
}

interface ICalendarBannerWeapon {
  id: string;
  name: string;
  rarity: number;
  icon: string;
}

interface ICalendarBannerCharacter extends ICalendarBannerWeapon {
  element: string;
}

interface ICalendarBaseEvent {
  id: number;
  name: string;
  type_name: string;
  start_time: string;
  end_time: string;
  rewards: IReward[];
}
interface ICalendarEvent extends ICalendarBaseEvent {
  description: string;
  image_url: string;
}

interface ICalendarBanner {
  id: string;
  name: string;
  version: string;
  characters: ICalendarBannerCharacter[];
  weapons: ICalendarBannerWeapon[];
}

interface ICalendarChallenge extends ICalendarBaseEvent {
  special_reward: null;
}

interface ICalendar {
  events: ICalendarEvent[];
  banners: ICalendarBanner[];
  challenges: ICalendarChallenge[];
}

interface IRedeemCode {
  code: string;
  rewards: string[];
}

interface IRedeemCodeResponse {
  [key: string]: IRedeemCode[];
}
