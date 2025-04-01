import { Metadata } from "next";

import PageTitle from "~/components/common/typography/pageTitle";
import SpiralAbyssClient from "~/components/spiralAbyss/spiralAbyssClient";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Teyvat Archive - Spiral Abyss",
    description: "Teyvat Archive - Spiral Abyss",
    keywords:
      "Teyvat Archive, Genshin Impact, Teyvat, Genshin, Impact, Abyss, Spiral, Spiral Abyss"
  };
}

export default function SpiralAbyss() {
  return (
    <div className="mt-3 flex w-full flex-col items-center justify-center xl:mb-4">
      <PageTitle title="Spiral Abyss" />
      <div className="m-4">
        <SpiralAbyssClient />
      </div>
    </div>
  );
}
