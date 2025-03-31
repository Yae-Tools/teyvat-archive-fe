import { Metadata } from "next";
import PageTitle from "~/components/common/typography/pageTitle";
import TitleHeading from "~/components/common/typography/titleHeading";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Teyvat Archive - Spiral Abyss",
    description: "Teyvat Archive - Spiral Abyss",
    keywords:
      "Teyvat Archive, Genshin Impact, Teyvat, Genshin, Impact, Abyss, Spiral, Spiral Abyss",
  };
}

export default function SpiralAbyss() {
  return (
    <div className="w-full flex flex-col items-center justify-center xl:mb-4 mt-3">
      <PageTitle title="Spiral Abyss" />
      <div className="my-4">
        <TitleHeading text="Top 10 Used Characters" customClass="text-xl" />
        <div></div>
      </div>
    </div>
  );
}
