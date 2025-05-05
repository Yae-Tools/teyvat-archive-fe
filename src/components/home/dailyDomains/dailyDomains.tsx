"use client";

import Image from "next/image";
import { useAtom } from "jotai";

import { useDomainState } from "~/hooks/domain/useDomainState";
import domainNameParser from "~/utils/parsers/domainNameParser";
import { getRegionImageByNumber } from "~/utils/regionImagePicker";
import CitySelector from "./citySelector";
import DaySelector from "./daySelector";
import { useSelectedTravelerAtom } from "~/atoms/feature.atoms";
import RewardUsers from "./rewardUsers";
import DomainRewards from "./domainRewards";

export default function DailyDomains() {
  const {
    filteredDomains,
    selectedCity,
    selectedDay,
    setSelectedCity,
    setSelectedDay,
    isLg
  } = useDomainState();

  const [selectedTraveller] = useAtom(useSelectedTravelerAtom);

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
                  <DomainRewards {...{ reward: domain.reward }} />
                </div>
                <RewardUsers
                  {...{ isLg, selectedTraveller, rewards: domain.reward }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
