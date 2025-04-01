import { QueryClient, useQuery } from "@tanstack/react-query";

import {
  getAbyssBlessings,
  getAbyssData
} from "~/services/teyvatServer/teyvatArchive.service";

export const useAbyssInfo = () => {
  return useQuery({
    queryKey: ["abyssInfo"],
    queryFn: async () => {
      const abyssInfo = await getAbyssData();
      return abyssInfo;
    }
  });
};

export const useAbyssBlessings = () => {
  return useQuery({
    queryKey: ["abyssBlessings"],
    queryFn: async () => {
      const abyssBlessings = await getAbyssBlessings();
      return abyssBlessings;
    }
  });
};

export const prefetchAbyssData = async (queryClient: QueryClient) => {
  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: ["abyssInfo"],
      queryFn: async () => await getAbyssData()
    }),
    queryClient.prefetchQuery({
      queryKey: ["abyssBlessings"],
      queryFn: async () => await getAbyssBlessings()
    })
  ]);
  return queryClient;
};
