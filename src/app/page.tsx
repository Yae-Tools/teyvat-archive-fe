"use server";

import { Metadata } from "next";
import Image from "next/image";
import { getGameVersion } from "~/services/system/system.service";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Teyvat Archive",
    description: "Welcome to Teyvat Archive!",
  };
}

export default async function Home() {
  const gameData:IGameVersion = await getGameVersion()
  return (
    <div className="w-full flex flex-col items-center justify-center xl:mb-4 mt-3">
      {/* <PageTitle title="Welcome to Teyvat Archive" />
      <EventsClient {...{ events }} /> */}
      <div className="rounded-lg w-[700px]">

      <Image src={gameData.background} alt="background" width={1920} height={1080} />
      </div>
    </div>
  );
}
