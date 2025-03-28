"use server";

import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageTitle from "~/components/common/typography/pageTitle";
import RedeemCodes from "~/components/home/redeemCodes";
import TimeUntilReset from "~/components/home/timeUntilReset";
import { getGameVersion } from "~/services/system/system.service";

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
          height: 630,
        },
      ],
      siteName: "Teyvat Archive",
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: "Teyvat Archive",
      description:
        "Welcome to Teyvat Archive! Your ultimate Genshin Impact companion. Dive into Teyvat Archive, the premier destination for Genshin Impact fans! Explore lore, character guides, and secrets of Teyvat in one epic hub.",
      images: ["/logo.jpg"],
      creator: "@azula9713",
      site: "@archive_teyvat",
    },
    icons: {
      icon: "/logo.jpg",
      shortcut: "/logo.jpg",
      apple: "/logo.jpg",
    },
  };
}

export default async function Home() {
  const gameData: IGameVersion = await getGameVersion();

  return (
    <div className="w-full flex flex-col items-center justify-center xl:mb-4 my-3">
      <PageTitle title="Day of the Flame's Return" />
      <div className="rounded-xl h-full w-full px-3 xl:px-6 max-w-[1650px] xl:py-6 flex flex-col xl:flex-row items-start justify-center space-y-4 xl:space-y-0 xl:space-x-5">
        <div className="w-full xl:w-2/3 h-full felx items-center justify-center">
          <Image
            src={gameData.background}
            alt="background"
            width={1920}
            height={1080}
            className="rounded-xl"
          />
        </div>
        <div className="w-full xl:w-1/3 h-full flex flex-col items-start justify-center px-4 space-y-4">
          <p className="font-enka text-center text-lg xl:text-left">
            Version{" "}
            {gameData.version.split(".").slice(0, 2).join(".").toString()} is
            now live! Head on to{" "}
            <Link href="/events" className="text-teal-500">
              Events
            </Link>{" "}
            tab to see what's new!
          </p>
          <TimeUntilReset />
          <RedeemCodes />
        </div>
      </div>
    </div>
  );
}
