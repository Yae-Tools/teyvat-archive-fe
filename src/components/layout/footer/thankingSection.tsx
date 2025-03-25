import DiscordIcon from "~/assets/icons/icons8-discord.svg";
import GithubIcon from "~/assets/icons/icons8-github.svg";
import TwitchIcon from "~/assets/icons/icons8-twitch.svg";
import Ximage from "~/assets/icons/icons8-x.svg";
import YoutubeIcon from "~/assets/icons/icons8-youtube.svg";
import SocialIcon from "~/components/common/socialIcon";
import thankingMembers from "~/data/specialThanks";

export default function ThankingSection() {
  return (
    <div className="mb-6 flex flex-col items-center md:items-start">
      <h5 className="mb-2.5 uppercase">Special Thanks Goes To</h5>
      <ul className="mb-0 list-none w-full items-center justify-center flex flex-col md:items-start">
        {thankingMembers.map((member) => (
          <li key={member.name}>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-slate-400 ">{member.name}</span>
              <span className="text-slate-200">•</span>
              <div className="text-slate-400 hover:text-slate-500">
                <SocialIcon name={member.name} url={member.x} icon={Ximage} />
              </div>
              {member.github && (
                <div className="text-slate-400 hover:text-slate-500">
                  <SocialIcon
                    name={member.name}
                    url={member.github}
                    icon={GithubIcon}
                  />
                </div>
              )}
              {member.discord && (
                <div className="text-slate-400 hover:text-slate-500">
                  <SocialIcon
                    name={member.name}
                    url={member.discord}
                    icon={DiscordIcon}
                  />
                </div>
              )}
              {member.twitch && (
                <div className="text-slate-400 hover:text-slate-500">
                  <SocialIcon
                    name={member.name}
                    url={member.twitch}
                    icon={TwitchIcon}
                  />
                </div>
              )}
              {member.youtube && (
                <div className="text-slate-400 hover:text-slate-500">
                  <SocialIcon
                    name={member.name}
                    url={member.youtube}
                    icon={YoutubeIcon}
                  />
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
