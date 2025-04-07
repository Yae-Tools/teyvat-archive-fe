"use server";

import {
  dehydrate,
  HydrationBoundary,
  QueryClient
} from "@tanstack/react-query";
import { Metadata } from "next";

import SpiralAbyssClient from "~/components/spiralAbyss/spiralAbyssClient";
import { prefetchAbyssData } from "~/hooks/useAbyssData";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Teyvat Archive - Spiral Abyss",
    description: "Teyvat Archive - Spiral Abyss",
    keywords:
      "Teyvat Archive, Genshin Impact, Teyvat, Genshin, Impact, Abyss, Spiral, Spiral Abyss"
  };
}

export default async function SpiralAbyss() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 60, // 1 hour
        gcTime: 1000 * 60 * 60 * 24 // 24 hours (previously cacheTime)
      }
    }
  });

  await prefetchAbyssData(queryClient);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <SpiralAbyssClient />
    </HydrationBoundary>
  );
}
