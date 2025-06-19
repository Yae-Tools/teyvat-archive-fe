import { ICharacter } from "~/types/enka/character.types";

import AscensionDetailsMobile from "./characterAscension/ascensionDetailsMobile";
import MobileConstellationView from "./characterConstellations/mobileConstellationView";
import CharacterMobileOverview from "./characterOverview/characterMobileOverview";
import CharacterProfileMobile from "./characterProfile/characterProfileMobile";
import TalentsMobile from "./characterTalents/talentsMobile";

type Props = {
  characterData: ICharacter;
};

export default function CharacterMobileView({
  characterData
}: Readonly<Props>) {
  const {
    constellations,
    skills,
    passiveTalents,
    constellation,
    constellationIcon,
    ascensionData,
    name,
    stars,
    splashUrl,
    element,
    weaponType,
    location,
    description,
    birthday,
    isTraveler
  } = characterData;
  return (
    <div className="w-full p-2 md:p-10 xl:hidden">
      <CharacterProfileMobile {...{ name, stars, splashUrl, element }} />
      <CharacterMobileOverview
        {...{
          element,
          weapon: weaponType,
          affiliation: location,
          description,
          birthday,
          isTraveler
        }}
      />
      <TalentsMobile {...{ skills, passiveTalents }} />
      <MobileConstellationView
        {...{
          constellation,
          constellations,
          chapterIcon: constellationIcon
        }}
      />
      <AscensionDetailsMobile {...{ ascensionData }} />
    </div>
  );
}
