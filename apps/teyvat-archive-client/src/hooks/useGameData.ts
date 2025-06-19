import { QueryClient, useQuery } from "@tanstack/react-query";

import {
  getGameVersion,
  getRedeemCodes
} from "~/services/system/system.service";

export const useGameVersion = () => {
  return useQuery({
    queryKey: ["gameVersion"],
    queryFn: async () => await getGameVersion()
  });
};

export const useRedeemCodes = () => {
  return useQuery({
    queryKey: ["redeemCodes"],
    queryFn: async () => await getRedeemCodes()
  });
};

export const prefetchGameData = async (queryClient: QueryClient) => {
  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: ["gameVersion"],
      queryFn: async () => await getGameVersion()
    }),
    queryClient.prefetchQuery({
      queryKey: ["redeemCodes"],
      queryFn: async () => await getRedeemCodes()
    })
  ]);
  return queryClient;
};
