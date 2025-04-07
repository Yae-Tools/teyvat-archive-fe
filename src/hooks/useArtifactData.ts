import { QueryClient, useQuery } from "@tanstack/react-query";

import { getArtifactSets } from "~/services/teyvatServer/teyvatArchive.service";
import { IBaseArtifactSet } from "~/types/enka/artifacts.types";

export const useArtifactsSetData = () => {
  return useQuery({
    queryKey: ["artifactsSets"],
    queryFn: async () => {
      const artifactSets: IBaseArtifactSet[] = await getArtifactSets();
      return artifactSets;
    },
    initialData: [],
    staleTime: 1000 * 60 * 60, // 1 hour
    gcTime: 1000 * 60 * 60 * 24 // 24 hours (previously cacheTime)
  });
};

export const prefetchArtifactsSetData = async (queryClient: QueryClient) => {
  await queryClient.prefetchQuery({
    queryKey: ["artifactsSets"],
    queryFn: async () => {
      const artifactSets: IBaseArtifactSet[] = await getArtifactSets();
      return artifactSets;
    },
    staleTime: 1000 * 60 * 60, // 1 hour
    gcTime: 1000 * 60 * 60 * 24 // 24 hours (previously cacheTime)
  });
  return queryClient;
};
