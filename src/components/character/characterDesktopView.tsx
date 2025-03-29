/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";

import Image from "next/image";
import { getMarginRightValue, getZoomValue } from "~/utils/splashArtZoom";
import TabNavigation from "../common/basic/tabNavigation";
import LazyBackgroundImage from "../common/lazyBackgroundImage";
import RarityStars from "../common/rarityStars";
import AscensionMatsDesktop from "./characterAscension/ascensionMatsDesktop";
import DesktopConstellationView from "./characterConstellations/desktopConstellationView";
import CharacterDesktopOverview from "./characterOverview/characterDesktopOverview";
import CharacterProfileDesktop from "./characterProfile/characterProfileDesktop";
import TalentsDesktop from "./characterTalents/talentsDesktop";

type Props = {
  characterData: ICharacter;
};

function CharacterDesktopView({ characterData }: Readonly<Props>) {
  const {
    element,
    splashUrl,
    nameCard,
    stars,
    name,
    skills,
    passiveTalents,
    weaponType,
    location,
    constellation,
    constellations,
    description,
    title,
    nameId,
    constellationIcon,
    sideIcon,
    ascensionData,
    birthday,
    isTraveler,
  } = characterData;

  const TAB_NAV = [
    {
      name: "Talents",
      id: "talents",
      shouldDisplay: true,
    },
    {
      name: "Constellations",
      id: "constellations",
      shouldDisplay: true,
    },
    {
      name: "Ascension",
      id: "ascension",
      shouldDisplay: true,
    },
  ];

  const [selectedTab, setSelectedTab] = useState(TAB_NAV[0].id);

  return (
    <div className="py-4 px-12 flex-col items-center justify-start space-y-8 hidden xl:flex w-full overflow-x-hidden max-w-[1650px]">
      <LazyBackgroundImage
        img={nameCard}
        isDarkened
        className="hidden bg-slate-900 xl:flex w-full flex-col relative items-start justify-between p-10 xl:h-[650px] rounded-4xl"
      >
        <div className="w-2/3 flex flex-col items-start mr-4 absolute z-10">
          <div className="flex items-center justify-start space-x-1 mb-5">
            <Image
              className="size-12 mr-2"
              src={sideIcon}
              alt={name}
              height={100}
              width={100}
              style={{
                zoom: "1.5",
                transform: "translateY(-8px)",
              }}
            />
            <RarityStars stars={stars} />
          </div>
          <CharacterProfileDesktop {...{ name, title, description }} />
          <CharacterDesktopOverview
            {...{
              element,
              weapon: weaponType,
              affiliation: location,
              birthday,
              isTraveler,
            }}
          />
        </div>
        <div className="w-full xl:h-[400px]  flex items-center justify-end">
          <div className={`w-4/5 h-full ${nameId} relative`}>
            <img
              src={splashUrl}
              className={`bottom-[-140] right-0 absolute ${getMarginRightValue(
                characterData.bodyType,
                characterData.isTraveler
              )}`}
              alt={name}
              style={{
                height: "100%",
                marginTop: "15%",
                scale: `${getZoomValue(
                  characterData.rarity,
                  characterData.bodyType,
                  characterData.isTraveler,
                  characterData.isArchon
                )}`,
              }}
            />
          </div>
        </div>
      </LazyBackgroundImage>
      <div
        className="w-full flex items-start justify-between space-x-4 rounded-lg mt-20"
        style={{ backgroundColor: "rgba(16, 24, 40, 0.7)" }}
      >
        <TabNavigation
          tabs={TAB_NAV}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
        {/* tab content */}
        <div className="w-full">
          <div className="px-4 pb-6">
            {selectedTab === "talents" && (
              <TalentsDesktop {...{ element, skills, passiveTalents }} />
            )}
            {selectedTab === "constellations" && (
              <DesktopConstellationView
                {...{
                  consName: constellation,
                  constellations,
                  constellationIcon,
                  element,
                }}
              />
            )}
            {selectedTab === "ascension" && (
              <AscensionMatsDesktop {...{ ascensionData }} />
            )}
          </div>
        </div>
        {/* tab content ends */}
      </div>
    </div>
  );
}

export default CharacterDesktopView;
