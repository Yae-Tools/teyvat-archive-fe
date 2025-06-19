import { Metadata } from "next";
import Link from "next/link";

import LogoHolder from "~/components/common/logoHolder";
import PageTitle from "~/components/common/typography/pageTitle";
import Paragraph from "~/components/common/typography/paragraph";
import TitleHeading from "~/components/common/typography/titleHeading";

export const metadata: Metadata = {
  title: "Teyvat Archive - About Us",
  description: "Welcome to Teyvat Archive!"
};

export default function About() {
  return (
    <div className="mx-2 mt-3 flex w-full flex-col items-center px-2 pt-3">
      <PageTitle title="About Us" />
      <div className="flex w-full flex-col items-center justify-center space-y-2">
        <div className="mt-4 flex flex-col items-center justify-center space-y-2 lg:mt-6 xl:mt-8">
          <LogoHolder size={48} />
          <TitleHeading
            text="Teyvat Archive"
            customClass="text-2xl lg:text-3xl ml-4 font-sans"
          />
        </div>
        <div className="mt-4 flex flex-col items-center justify-center space-y-2 px-4 text-left lg:mt-6 xl:mt-8">
          <TitleHeading
            text="Disclaimer!"
            customClass="text-xl lg:text-2xl ml-4 font-sans"
          />
          <Paragraph text="Teyvat Archive is a fan-made website that provides information about the characters and the world of Teyvat from the game Genshin Impact." />
          <Paragraph text="This website is made for educational purposes and is not affiliated with miHoYo." />
          <Paragraph text="If you have any questions or concerns, please contact us at our email" />
        </div>
        <div className="mt-4 flex flex-col items-center justify-center space-y-2 rounded-lg border-2 border-slate-600 p-4 text-left outline-none lg:mt-6 xl:mt-8">
          <TitleHeading
            text="Created By"
            customClass="text-xl lg:text-2xl ml-4 font-sans"
          />
          <div className="flex flex-col items-center justify-center space-y-2">
            <div className="flex flex-col items-center justify-center space-y-2">
              <p className="text-md font-bold text-white">
                Azula9713 @
                <Link
                  href="https://www.yaepublishinghouse.online"
                  className="text-blue-400"
                  target="_blank"
                >
                  {" "}
                  Yae Publishing House
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
