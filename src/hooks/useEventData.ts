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
    initialData: []
  });
};

export const prefetchEventData = async (queryClient: QueryClient) => {
  await queryClient.prefetchQuery({
    queryKey: ["events"],
    queryFn: async () => await getAllEvents()
  });
  return queryClient;
};
