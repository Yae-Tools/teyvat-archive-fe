"use server";

import CustomCursor from "~/assets/cursor/cursor.png";
import { getGameVersion } from "~/services/system/system.service";
import AnnouncementBanner from "../banner/announcementBanner";
import Footer from "../footer/footer";
import Header from "../header/header";

type Props = {
  children: React.ReactNode;
};

const BANNER_VISIBLE = process.env.NEXT_PUBLIC_BANNER_VISIBLE === "true";

export default async function BaseLayout({ children }: Readonly<Props>) {
  const gameVersion: {
    version: string;
    build: string;
  } = await getGameVersion();

  const bg =
    "https://fastcdn.hoyoverse.com/static-resource-v2/2025/03/14/b4706346aee7857c99a74e3b73d6a865_6111596366082103572.webp";

  return (
    <div
      className="min-h-svh max-h-[100vh] overflow-y-auto overflow-x-hidden"
      style={{
        cursor: "url(" + CustomCursor.src + "), auto",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(16, 24, 40, 0.8)",
      }}
    >
      <div className="w-full h-full flex flex-col items-center justify-between mx-auto">
        <Header />
        {BANNER_VISIBLE && (
          <AnnouncementBanner
            message={`${gameVersion.version} Update is still in progress. Please be patient.`}
          />
        )}
        <main className="primary-text flex-1 w-full flex flex-col items-center justify-start">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}
