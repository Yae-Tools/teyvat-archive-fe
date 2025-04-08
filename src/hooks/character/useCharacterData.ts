import { QueryClient, useQuery } from "@tanstack/react-query";

import { getCharacters } from "~/services/teyvatServer/teyvatArchive.service";
import { IBaseCharacter } from "~/types/enka/character.types";

export const useAllCharacterData = () => {
  return useQuery({
    queryKey: ["characters"],
    queryFn: async () => {
      const data: IBaseCharacter[] = await getCharacters();
      return data;
    },
    initialData: [],
    // refetchInterval: 1000 * 60 * 60 // 1 hour
    staleTime: 1000 * 60 * 60, // 1 hour
    gcTime: 1000 * 60 * 60 * 24 // 24 hours (previously cacheTime)
  });
};

export const prefetchAllCharacters = async (queryClient: QueryClient) => {
  await queryClient.prefetchQuery({
    queryKey: ["characters"],
    queryFn: async () => {
      const data: IBaseCharacter[] = await getCharacters();
      return data;
    },
    staleTime: 1000 * 60 * 60, // 1 hour
    gcTime: 1000 * 60 * 60 * 24 // 24 hours (previously cacheTime)
  });
};
