import { QueryClient, useQuery } from "@tanstack/react-query";

import { getDailyDomains } from "~/services/teyvatServer/teyvatArchive.service";
import { IDailyDomainData } from "~/types/enka/domain.types";
export const useDailyDomainData = () => {
  return useQuery({
    queryKey: ["dailyDomains"],
    queryFn: async () => {
      const dailyDomains: IDailyDomainData[] = await getDailyDomains();
      return dailyDomains;
    },
    initialData: []
  });
};

export const prefetchDailyDomains = async (queryClient: QueryClient) => {
  await queryClient.prefetchQuery({
    queryKey: ["dailyDomains"],
    queryFn: async () => {
      const dailyDomains: IDailyDomainData[] = await getDailyDomains();
      return dailyDomains;
    }
  });
};
