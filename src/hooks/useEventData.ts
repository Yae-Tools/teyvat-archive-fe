import { QueryClient, useQuery } from "@tanstack/react-query";

import { getAllEvents } from "~/services/teyvatServer/teyvatArchive.service";
import { IEvent } from "~/types/ambr.types";

export const useEventData = () => {
  return useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      const events: IEvent[] = await getAllEvents();
      return events;
    },
    initialData: [],
    staleTime: 1000 * 60 * 60, // 1 hour
    gcTime: 1000 * 60 * 60 * 24 // 24 hours (previously cacheTime)
  });
};

export const prefetchEventData = async (queryClient: QueryClient) => {
  await queryClient.prefetchQuery({
    queryKey: ["events"],
    queryFn: async () => await getAllEvents(),
    staleTime: 1000 * 60 * 60, // 1 hour
    gcTime: 1000 * 60 * 60 * 24 // 24 hours (previously cacheTime)
  });
  return queryClient;
};
