import socials from "~/data/socialData";
import SiteMapSection from "./siteMapSection";
import ThankingSection from "./thankingSection";
import SocialIcon from "~/components/common/socialIcon";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center bg-zinc-50 text-center text-surface dark:bg-gray-900 dark:text-white w-full shadow-lg border-t-2 border-gray-800 mt-8 mb-4">
      <div className="container px-6 pt-6">
        {/* Social media icons container */}
        <div className="mb-6 flex justify-center items-center space-x-2 w-full">
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
      {/* Copyright section */}
      <div className="text-slate-400 text-sm font-algoindeEnka text-center py-1">{`© ${new Date().getFullYear()} Teyvat Archive • Yae Publishing House `}</div>
    </footer>
  );
}
