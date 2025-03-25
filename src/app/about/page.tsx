import Link from "next/link";
import { Metadata } from "next";

import Paragraph from "~/components/common/typography/paragraph";
import LogoHolder from "~/components/common/logoHolder";
import PageTitle from "~/components/common/typography/pageTitle";
import TitleHeading from "~/components/common/typography/titleHeading";

export const metadata: Metadata = {
  title: "Teyvat Archive - About Us",
  description: "Welcome to Teyvat Archive!",
};

export default function About() {
  return (
    <div className="w-full pt-3 mt-3 mx-2 px-2 flex flex-col items-center">
      <PageTitle title="About Us" />
      <div className="flex flex-col items-center justify-center space-y-2 w-full">
        <div className="mt-4 lg:mt-6 xl:mt-8 flex flex-col items-center justify-center space-y-2">
          <LogoHolder size={48} />
          <TitleHeading
            text="Teyvat Archive"
            customClass="text-2xl lg:text-3xl ml-4 font-sans"
          />
        </div>
        <div className="mt-4 lg:mt-6 xl:mt-8 flex flex-col items-center justify-center space-y-2 text-left px-4">
          <TitleHeading
            text="Disclaimer!"
            customClass="text-xl lg:text-2xl ml-4 font-sans"
          />
          <Paragraph text="Teyvat Archive is a fan-made website that provides information about the characters and the world of Teyvat from the game Genshin Impact." />
          <Paragraph text="This website is made for educational purposes and is not affiliated with miHoYo." />
          <Paragraph text="If you have any questions or concerns, please contact us at our email" />
        </div>
        <div className="mt-4 lg:mt-6 xl:mt-8 flex flex-col items-center justify-center space-y-2 text-left outline-none border-2 border-slate-600 rounded-lg p-4">
          <TitleHeading
            text="Created By"
            customClass="text-xl lg:text-2xl ml-4 font-sans"
          />
          <div className="flex flex-col items-center justify-center space-y-2">
            <div className="flex flex-col items-center justify-center space-y-2">
              <p className="text-white text-md font-bold">
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
