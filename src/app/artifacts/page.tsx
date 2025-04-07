"use server";

import {
  dehydrate,
  HydrationBoundary,
  QueryClient
} from "@tanstack/react-query";
import { Metadata } from "next";

import ArtifactsClient from "~/components/artifacts/artifactsClient";
import { prefetchArtifactsSetData } from "~/hooks/useArtifactData";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Teyvat Archive - Artifacts",
    description: "Teyvat Archive - Artifacts",
    keywords:
      "Teyvat Archive, Genshin Impact, Teyvat, Genshin, Impact, Artifacts"
  };
}

export default async function Artifacts() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 60, // 1 hour
        gcTime: 1000 * 60 * 60 * 24 // 24 hours (previously cacheTime)
      }
    }
  });

  await prefetchArtifactsSetData(queryClient);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ArtifactsClient />
    </HydrationBoundary>
  );
}
