import { useQuery } from "@tanstack/react-query";

import { getDailyDomains } from "~/services/teyvatServer/teyvatArchive.service";
import { IDailyDomainDataResponse } from "~/types/enka/domain.types";

export const useDailyDomainData = () => {
  return useQuery({
    queryKey: ["dailyDomains"],
    queryFn: async () => {
      const dailyDomains: IDailyDomainDataResponse = await getDailyDomains();
      return dailyDomains;
    },
    initialData: {}
  });
};
