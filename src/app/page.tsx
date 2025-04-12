"use server";

import {
  dehydrate,
  HydrationBoundary,
  QueryClient
} from "@tanstack/react-query";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import BlurBg from "~/assets/images/bgs/teyvat-wallpaper.jpg";
import PageTitle from "~/components/common/typography/pageTitle";
import DailyDomains from "~/components/home/dailyDomains/dailyDomains";
import RedeemCodes from "~/components/home/redeemCodes";
import TimeUntilReset from "~/components/home/timer/timeUntilReset";
import { prefetchDailyDomains } from "~/hooks/domain/useDomainData";
import { prefetchGameData } from "~/hooks/useGameData";
import { IDailyDomainDataResponse } from "~/types/enka/domain.types";
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
  const dailyDomains = queryClient.getQueryData<IDailyDomainDataResponse>([
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
      <div className="my-3 flex w-full flex-col items-center justify-center xl:mb-4">
        <PageTitle title="Day of the Flame's Return" />
        <div className="flex h-full w-full max-w-[1650px] flex-col items-start justify-center space-y-4 rounded-xl px-3 xl:flex-row xl:space-y-0 xl:space-x-5 xl:px-6 xl:py-6">
          <div className="flex h-full w-full items-center justify-center xl:w-2/3">
            {/* <Image
              src={gameData.background}
              alt="background"
              width={1920}
              height={1080}
              priority={false} // Ensures lazy loading
              placeholder="blur" // Helps with perceived performance
              blurDataURL={BlurBg.src}
              className="rounded-xl"
            /> */}
            <div className="flex h-full w-full flex-col items-center justify-center space-y-4 rounded-xl bg-slate-500/5 p-4 text-white dark:bg-slate-400/20">
              <h5 className="font-enka text-center text-2xl">Daily Domains</h5>
              <DailyDomains />
            </div>
          </div>
          <div className="flex h-full w-full flex-col items-start justify-center space-y-4 px-4 xl:w-1/3">
            <p className="font-enka text-center text-lg xl:text-left">
              Version{" "}
              {gameData.version.split(".").slice(0, 2).join(".").toString()} is
              now live! Head on to{" "}
              <Link href="/events" className="text-teal-500">
                <span className="font-semibold text-teal-500">Events</span>
              </Link>{" "}
              tab to see what's new!
            </p>
            <TimeUntilReset />
            <RedeemCodes />
          </div>
        </div>
      </div>
    </HydrationBoundary>
  );
}
