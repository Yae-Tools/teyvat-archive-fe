"use server";

import {
  dehydrate,
  HydrationBoundary,
  QueryClient
} from "@tanstack/react-query";
import { Metadata } from "next";

import PageTitle from "~/components/common/typography/pageTitle";
import HomeClient from "~/components/home/homeClient";
import { prefetchDailyDomains } from "~/hooks/domain/useDomainData";
import { prefetchGameData } from "~/hooks/useGameData";
import { IDailyDomainData } from "~/types/enka/domain.types";
import { IGameVersion } from "~/types/system.types";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Teyvat Archive",
    description:
      "Welcome to Teyvat Archive! Your ultimate Genshin Impact companion. Dive into Teyvat Archive, the premier destination for Genshin Impact fans! Explore lore, character guides, and secrets of Teyvat in one epic hub.",
    keywords:
      "Teyvat Archive, Genshin Impact, Teyvat lore, Genshin guides, RPG adventure, open-world gaming",
    openGraph: {
      title: "Teyvat Archive",
      description:
        "Welcome to Teyvat Archive! Your ultimate Genshin Impact companion. Dive into Teyvat Archive, the premier destination for Genshin Impact fans! Explore lore, character guides, and secrets of Teyvat in one epic hub.",
      url: "https://teyvatarchive.online",
      images: [
        {
          url: "/logo.jpg",
          width: 1200,
          height: 630
        }
      ],
      siteName: "Teyvat Archive",
      type: "website",
      locale: "en_US"
    },
    twitter: {
      card: "summary_large_image",
      title: "Teyvat Archive",
      description:
        "Welcome to Teyvat Archive! Your ultimate Genshin Impact companion. Dive into Teyvat Archive, the premier destination for Genshin Impact fans! Explore lore, character guides, and secrets of Teyvat in one epic hub.",
      images: ["/logo.jpg"],
      creator: "@azula9713",
      site: "@archive_teyvat"
    },
    icons: {
      icon: "/logo.jpg",
      shortcut: "/logo.jpg",
      apple: "/logo.jpg"
    }
  };
}

export default async function Home() {
  const queryClient = new QueryClient();

  await Promise.all([
    prefetchDailyDomains(queryClient),
    prefetchGameData(queryClient)
  ]);

  const gameData = queryClient.getQueryData<IGameVersion>(["gameVersion"]);
  const dailyDomains = queryClient.getQueryData<IDailyDomainData[]>([
    "dailyDomains"
  ]);
  if (!dailyDomains) {
    throw new Error("Daily domains data not found");
  }

  if (!gameData) {
    throw new Error("Game data not found");
  }

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="w-usable my-3 flex flex-col items-center justify-center xl:mb-4">
        <PageTitle title="A Space and Time for You" />
        <HomeClient gameData={gameData} />
      </div>
    </HydrationBoundary>
  );
}
