export interface IDailyDomainData {
  id: number;
  name: string;
  reward: number[];
  city: number;
}

export interface IDailyDomainDataResponse {
  [key: string]: IDailyDomainData;
}
