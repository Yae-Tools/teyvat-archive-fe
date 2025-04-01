import { QueryClient, useQuery } from "@tanstack/react-query";

import { getCharacters } from "~/services/teyvatServer/teyvatArchive.service";
import { IBaseCharacter } from "~/types/enka/character.types";

export const useAllCharacterData = () => {
  return useQuery({
    queryKey: ["characters"],
    queryFn: async () => {
      const data: IBaseCharacter[] = await getCharacters();
      return data;
    }
  });
};

export const prefetchAllCharacters = async (queryClient: QueryClient) => {
  return queryClient.prefetchQuery({
    queryKey: ["characters"],
    queryFn: async () => {
      const data: IBaseCharacter[] = await getCharacters();
      return data;
    }
  });
};
