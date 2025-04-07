"use server";

import {
  dehydrate,
  HydrationBoundary,
  QueryClient
} from "@tanstack/react-query";
import { Metadata } from "next";

import WeaponsClient from "~/components/weapons/weaponsClient";
import { prefetchAllWeaponData } from "~/hooks/useWeaponData";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Teyvat Archive - Weapons",
    description: "Teyvat Archive - Weapons",
    keywords: "Teyvat Archive, Genshin Impact, Teyvat, Genshin, Impact, Weapons"
  };
}

export default async function Weapons() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 60, // 1 hour
        gcTime: 1000 * 60 * 60 * 24 // 24 hours (previously cacheTime)
      }
    }
  });

  await prefetchAllWeaponData(queryClient);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <WeaponsClient />
    </HydrationBoundary>
  );
}
