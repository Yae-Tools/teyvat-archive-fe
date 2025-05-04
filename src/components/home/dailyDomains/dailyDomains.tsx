"use client";

import Image from "next/image";

import { useDomainState } from "~/hooks/domain/useDomainState";
import domainNameParser from "~/utils/parsers/domainNameParser";
import { getRegionImageByNumber } from "~/utils/regionImagePicker";
import CitySelector from "./citySelector";
import DaySelector from "./daySelector";
import { useRewardUsers } from "~/hooks/domain/useRewardUsers";
import MiniAvatar from "~/components/common/miniAvatar";
import { useAtom } from "jotai";
import { useSelectedTravelerAtom } from "~/atoms/feature.atoms";

const EXCLUDED_REWARD_IDS = [102, 105, 202]; //102: Adventure XP, 105: Companion XP, 202: Mora

export default function DailyDomains() {
  const {
    filteredDomains,
    selectedCity,
    selectedDay,
    setSelectedCity,
    setSelectedDay,
    isLg
  } = useDomainState();

  const [selectedTraveller] =  useAtom(useSelectedTravelerAtom);

  return (
    <div className="flex h-full w-full items-center justify-center xl:order-1 xl:w-3/5">
      <div className="flex h-full w-full flex-col items-center justify-center space-y-4">
        <h5 className="font-enka text-center text-2xl">Daily Domains</h5>
        <div className="flex w-full flex-col items-center justify-center gap-4">
          <div className="flex w-full flex-col items-center justify-center gap-2 lg:gap-3 xl:gap-4">
            <DaySelector {...{ selectedDay, setSelectedDay, isLg }} />
            <div className="flex w-full flex-row items-center justify-center">
              <CitySelector {...{ selectedCity, setSelectedCity }} />
            </div>
          </div>

          <div className="flex w-full flex-col items-center justify-center gap-2 lg:gap-3 xl:gap-4">
            {filteredDomains.map((domain) => (
              <div
                key={domain.id}
                className="flex w-full flex-col gap-1 rounded-lg bg-slate-800/60 px-2 py-1"
              >
                <div className="flex w-full flex-col items-center justify-between lg:flex-row">
                  <div className="flex flex-row items-center justify-center">
                    {selectedCity === "all" && (
                      <Image
                        src={getRegionImageByNumber(domain.city)}
                        alt="region"
                        width={100}
                        height={100}
                        className="mr-2 inline-block size-8"
                      />
                    )}
                    <h5>{domainNameParser(domain.name)}</h5>
                  </div>
                  <div className="flex flex-row gap-2">
                    {domain.reward
                      .filter(
                        (reward) => !EXCLUDED_REWARD_IDS.includes(reward.id)
                      )
                      .map((reward) => (
                        <div key={reward.id}>
                          <Image
                            src={reward.icon}
                            alt={reward.name}
                            width={100}
                            height={100}
                            className="size-8 xl:size-12"
                          />
                        </div>
                      ))}
                  </div>
                </div>
                <div
                  className={`flex w-full flex-wrap flex-row items-center justify-center gap-2 overflow-x-auto ${
                    isLg ? "justify-start" : "justify-center"
                  }`}
                >
                  {useRewardUsers(domain.reward, selectedTraveller).map((user) => (
                    <MiniAvatar
                      key={user.id}
                      char={{
                        id: user.id.toString(),
                        icon: user.iconUrl,
                        element: user.element,
                        rarity: user.rarity
                      }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
