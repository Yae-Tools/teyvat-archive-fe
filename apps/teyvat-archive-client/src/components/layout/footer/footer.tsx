import Image from "next/image";

import ElysiaIcon from "~/assets/icons/elysia.svg";
import NextIcon from "~/assets/icons/icons8-nextjs.svg";
import TailwindIcon from "~/assets/icons/tailwind-css.svg";
import SocialIcon from "~/components/common/socialIcon";
import socials from "~/data/socialData";

import SiteMapSection from "./siteMapSection";
import ThankingSection from "./thankingSection";

export default function Footer() {
  return (
    <footer
      className="text-surface flex w-full flex-col items-center border-t-2 border-gray-800 bg-zinc-50 text-center shadow-lg dark:bg-gray-900 dark:text-white"
      style={{ backgroundColor: "rgba(16, 24, 40, 0.5)" }}
    >
      <div className="container px-6 pt-6">
        {/* Social media icons container */}
        <div className="mb-6 flex w-full items-center justify-center space-x-2">
          {socials.map((social) => (
            <SocialIcon
              key={social.name}
              name={social.name}
              url={social.link}
              icon={social.icon}
            />
          ))}
        </div>

        {/* Links section */}
        <div className="grid md:grid-cols-2">
          <ThankingSection />
          <SiteMapSection />
        </div>
      </div>
      {/* built with Next, Tailwind and Elysia */}
      <div className="flex items-center justify-center space-x-2 py-2">
        <span>Built in ♡ with</span>
        <Image src={NextIcon} alt="Next.js" className="size-6 text-white" />
        <Image src={TailwindIcon} alt="Tailwind CSS" className="size-6" />
        <span>and</span>
        <Image src={ElysiaIcon} alt="Elysia" className="size-6" />
      </div>
      {/* Copyright section */}
      <div className="font-algoindeEnka py-1 text-center text-sm text-slate-400">
        {`© ${new Date().getFullYear()} Teyvat Archive • `}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://yaepublishinghouse.online/"
        >
          Yae Publishing House
        </a>
      </div>
    </footer>
  );
}
