"use server";

import {
  dehydrate,
  HydrationBoundary,
  QueryClient
} from "@tanstack/react-query";
import { Metadata } from "next";

import CharactersClient from "~/components/characters/charactersClient";
import { prefetchAllCharacters } from "~/hooks/character/useCharacterData";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Teyvat Archive - Characters",
    description: "Teyvat Archive - Characters",
    keywords:
      "Teyvat Archive, Genshin Impact, Teyvat, Genshin, Impact, Characters"
  };
}

export default async function Characters() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 60, // 1 hour
        gcTime: 1000 * 60 * 60 * 24 // 24 hours (previously cacheTime)
      }
    }
  });

  await prefetchAllCharacters(queryClient);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CharactersClient />
    </HydrationBoundary>
  );
}
