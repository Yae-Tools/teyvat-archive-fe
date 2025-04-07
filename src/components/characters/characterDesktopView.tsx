/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import { useState } from "react";

import { ICharacter } from "~/types/enka/character.types";
import { getMarginRightValue, getZoomValue } from "~/utils/splashArtZoom";

import TabNavigation from "../common/basic/tabNavigation";
import LazyBackgroundImage from "../common/lazyBackgroundImage";
import RarityStars from "../common/rarityStars";

import AscensionDetailsDesktop from "./characterAscension/ascensionDetailsDesktop";
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
    isTraveler
  } = characterData;

  const TAB_NAV = [
    {
      name: "Talents",
      id: "talents",
      shouldDisplay: true
    },
    {
      name: "Constellations",
      id: "constellations",
      shouldDisplay: true
    },
    {
      name: "Ascension",
      id: "ascension",
      shouldDisplay: true
    }
  ];

  const [selectedTab, setSelectedTab] = useState(TAB_NAV[0].id);

  return (
    <div className="hidden w-full max-w-[1650px] flex-col items-center justify-start space-y-8 overflow-x-hidden px-12 py-4 xl:flex">
      <LazyBackgroundImage
        img={nameCard}
        isDarkened
        className="relative hidden w-full flex-col items-start justify-between rounded-4xl bg-slate-900 p-10 xl:flex xl:h-[650px]"
      >
        <div className="absolute z-10 mr-4 flex w-2/3 flex-col items-start">
          <div className="mb-5 flex items-center justify-start space-x-1">
            <Image
              className="mr-2 size-12"
              src={sideIcon}
              alt={name}
              height={100}
              width={100}
              style={{
                zoom: "1.5",
                transform: "translateY(-8px)"
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
              isTraveler
            }}
          />
        </div>
        <div className="flex w-full items-center justify-end xl:h-[400px]">
          <div className={`relative h-full w-4/5`}>
            <img
              src={splashUrl}
              className={`absolute right-0 bottom-[-140] ${getMarginRightValue(
                characterData.bodyType,
                characterData.isTraveler
              )}`}
              alt={nameId}
              style={{
                height: "100%",
                marginTop: "15%",
                scale: `${getZoomValue(
                  characterData.rarity,
                  characterData.bodyType,
                  characterData.isTraveler,
                  characterData.isArchon
                )}`
              }}
            />
          </div>
        </div>
      </LazyBackgroundImage>
      <div
        className="mt-20 flex w-full items-start justify-between space-x-4 rounded-lg"
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
                  element
                }}
              />
            )}
            {selectedTab === "ascension" && (
              <AscensionDetailsDesktop {...{ ascensionData }} />
            )}
          </div>
        </div>
        {/* tab content ends */}
      </div>
    </div>
  );
}

export default CharacterDesktopView;
