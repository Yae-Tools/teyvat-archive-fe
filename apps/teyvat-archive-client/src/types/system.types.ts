export interface IGameVersion {
  version: string;
  build: string;
  background: string;
  logo: string;
}

export interface IUptimeInstance {
  status: string;
  responseTime: number;
  statusCode: number;
  timestamp: number;
}
