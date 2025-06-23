import { Histories, IUptimeInstance } from "~/types/system.types";

export function getPercent(instanceName: string, histories: Histories) {
  switch (instanceName) {
    case "main":
      return getUptimePercent(histories.main);
    case "cdn":
      return getUptimePercent(histories.cdn);
    case "api":
      return getUptimePercent(histories.api);
    case "dashboard":
      return getUptimePercent(histories.dashboard);
    default:
      return 0;
  }
}

export function getLogData(instanceName: string, histories: Histories) {
  switch (instanceName) {
    case "main":
      return histories.main;
    case "cdn":
      return histories.cdn;
    case "api":
      return histories.api;
    case "dashboard":
      return histories.dashboard;
    default:
      return [];
  }
}

export function getAvgResponse(instanceName: string, histories: Histories) {
  switch (instanceName) {
    case "main":
      return getAverageResponseTime(histories.main);
    case "cdn":
      return getAverageResponseTime(histories.cdn);
    case "api":
      return getAverageResponseTime(histories.api);
    case "dashboard":
      return getAverageResponseTime(histories.dashboard);
    default:
      return 0;
  }
}

export function getUptimeSiteName(instance: string): string {
  switch (instance) {
    case "main":
      return "Teyvat Archive";
    case "cdn":
      return "Teyvat Archive CDN";
    case "api":
      return "Teyvat Archive API";
    case "dashboard":
      return "Teyvat Archive Dashboard";
    default:
      return "Unknown Site";
  }
}

export function getUptimeSiteUrl(instance: string): string {
  switch (instance) {
    case "main":
      return "https://teyvatarchive.online";
    case "cdn":
      return "https://cdn.teyvatarchive.online";
    case "api":
      return "https://server.teyvatarchive.online";
    case "dashboard":
      return "https://dashboard.teyvatarchive.online";
    default:
      return "";
  }
}

export const getUptimePercent = (historyData: IUptimeInstance[]) => {
  if (!historyData || historyData.length === 0) {
    return 0;
  }

  const totalInstances = historyData.length;

  if (totalInstances > 99) {
    historyData = historyData.slice(0, 100);
  }
  const operationalInstances = historyData.filter(
    (instance) => instance.status === "up"
  ).length;

  return Math.round((operationalInstances / totalInstances) * 100);
};

export const getAverageResponseTime = (historyData: IUptimeInstance[]) => {
  if (!historyData || historyData.length === 0) {
    return 0;
  }

  const totalResponseTime = historyData
    //   take top 20 most recent instances
    .slice(0, 20)
    .reduce((acc, instance) => acc + instance.responseTime, 0);

  return Math.round(totalResponseTime / historyData.length);
};
