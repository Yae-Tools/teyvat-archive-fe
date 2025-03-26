"use server"

import CustomCursor from "~/assets/cursor/cursor.png";
import Footer from "../footer/footer";
import Header from "../header/header";
import AnnouncementBanner from "../banner/announcementBanner";
import { getGameVersion } from "~/services/system/system.service";

type Props = {
  children: React.ReactNode;
};

const BANNER_VISIBLE = process.env.NEXT_PUBLIC_BANNER_VISIBLE === "true";

export default async function BaseLayout({ children }: Readonly<Props>) {

  const gameVersion:{
    version: string;
    build: string;
  } =  await getGameVersion();

  return (
    <div
      className="bg-slate-200 dark:bg-gray-900 w-full flex flex-col items-center justify-start min-h-svh"
      style={{
        cursor: "url(" + CustomCursor.src + "), auto",
      }}
    >
      <Header />
      {BANNER_VISIBLE && (
        <AnnouncementBanner message={`${gameVersion.version} Update is still in progress. Please be patient.`} />
      )}
      <main className="bg-slate-200 dark:bg-gray-900 primary-text flex-1 w-full flex flex-col items-center justify-start mt-4 md:mt-8 lg:mt-12 xl:mt-16 max-w-[1500px]">
        {children}
      </main>
      <Footer />
    </div>
  );
}
