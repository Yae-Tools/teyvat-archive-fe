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
    initialData: []
  });
};

export const prefetchArtifactsSetData = async (queryClient: QueryClient) => {
  await queryClient.prefetchQuery({
    queryKey: ["artifactsSets"],
    queryFn: async () => {
      const artifactSets: IBaseArtifactSet[] = await getArtifactSets();
      return artifactSets;
    }
  });
  return queryClient;
};
