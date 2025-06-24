import { useQuery } from "@tanstack/react-query";

import { getUptime, getUptimeHistory } from "~/services/system/uptime.service";
import { IUptimeInstance } from "~/types/system.types";

export const useUptimeData = () => {
  return useQuery({
    queryKey: ["uptime"],
    queryFn: async () => {
      const uptime: {
        main: IUptimeInstance;
        dashboard: IUptimeInstance;
        api: IUptimeInstance;
        cdn: IUptimeInstance;
      } = await getUptime();
      return uptime;
    }
  });
};

export const useUptimeHistory = (
  instance: "main" | "cdn" | "api" | "dashboard"
) => {
  return useQuery({
    queryKey: ["uptimeHistory", instance],
    queryFn: async () => {
      const history: IUptimeInstance[] = await getUptimeHistory(instance);
      return history;
    }
  });
};

export const useAllUptimeHistories = () => {
  return useQuery({
    queryKey: ["uptimeHistories"],
    queryFn: async () => {
      const instances = ["main", "cdn", "api", "dashboard"] as const;
      const histories = await Promise.all(
        instances.map(async (instance) => {
          const history = await getUptimeHistory(instance);
          return { [instance]: history };
        })
      );
      
      return histories.reduce((acc, curr) => ({ ...acc, ...curr }), {}) as {
        main: IUptimeInstance[];
        cdn: IUptimeInstance[];
        api: IUptimeInstance[];
        dashboard: IUptimeInstance[];
      };
    }
  });
};
