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
