"use server";

import {
  dehydrate,
  HydrationBoundary,
  QueryClient
} from "@tanstack/react-query";
import { Metadata } from "next";

import WeaponsClient from "~/components/weapons/weaponsClient";
import {
  prefetchAllWeapons,
  prefetchAllWeaponSeries
} from "~/hooks/useWeaponData";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Teyvat Archive - Weapons",
    description: "Teyvat Archive - Weapons",
    keywords: "Teyvat Archive, Genshin Impact, Teyvat, Genshin, Impact, Weapons"
  };
}

export default async function Weapons() {
  const queryClient = new QueryClient();

  await Promise.all([
    prefetchAllWeapons(queryClient),
    prefetchAllWeaponSeries(queryClient)
  ]);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <WeaponsClient />
    </HydrationBoundary>
  );
}
