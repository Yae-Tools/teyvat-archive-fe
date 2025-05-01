"use client";

import Image from "next/image";

import ButtonGroup from "~/components/common/basic/buttonGroup";
import {
  CITY_NUM_ARRAY,
  DAYS_OF_WEEK,
  useDomainState
} from "~/hooks/domain/useDomainState";
import domainNameParser from "~/utils/parsers/domainNameParser";
import { getRegionImageByNumber } from "~/utils/regionImagePicker";

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

  return (
    <div className="flex h-full w-full items-center justify-center xl:order-1 xl:w-3/5">
      <div className="flex h-full w-full flex-col items-center justify-center space-y-4">
        <h5 className="font-enka text-center text-2xl">Daily Domains</h5>
        <div className="flex w-full flex-col items-center justify-center gap-4">
          <div className="flex w-full flex-col items-center justify-center gap-2 lg:gap-3 xl:gap-4">
            <ButtonGroup
              items={DAYS_OF_WEEK.map((day) => ({
                value: day.id,
                id: day.id,
                label: isLg ? day.name : day.name.charAt(0).toUpperCase(),
                isSelected: selectedDay === day.id,
                onClick: (value) => setSelectedDay(value)
              }))}
              selectedItem={selectedDay}
            />
            <div className="flex w-full flex-row items-center justify-center">
              <ButtonGroup
                items={CITY_NUM_ARRAY.map((city) => ({
                  value: city,
                  id: city,
                  label: (
                    <div className="flex flex-row items-center justify-center xl:p-1">
                      {typeof city === "string" ? (
                        "All"
                      ) : (
                        <Image
                          src={getRegionImageByNumber(city)}
                          alt="region"
                          width={100}
                          height={100}
                          className="size-4.5 xl:size-8"
                        />
                      )}
                    </div>
                  ),
                  isSelected: selectedCity === city,
                  onClick: (value) => setSelectedCity(value)
                }))}
                selectedItem={selectedCity}
                customHeight="8"
              />
            </div>
          </div>

          <div className="flex w-full flex-col items-center justify-center gap-2 lg:gap-3 xl:gap-4">
            {filteredDomains.map((domain) => (
              <div key={domain.id} className="flex w-full flex-col">
                <div className="flex w-full flex-col items-start justify-between gap-2 rounded-t-lg bg-slate-800/80 p-2 lg:flex-row">
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
                            className="size-8"
                          />
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
