"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Tooltip } from "react-tooltip";

import ButtonGroup from "~/components/common/basic/buttonGroup";
import MiniIconContainer from "~/components/layout/container/miniIconContainer";
import { useDailyDomainData } from "~/hooks/domain/useDomainData";
import domainNameParser from "~/utils/parsers/domainNameParser";
import rarityParser from "~/utils/parsers/rarityParser";
import { getRegionImageByNumber } from "~/utils/regionImagePicker";

const DAYS_OF_WEEK = [
  {
    id: "monday",
    name: "Mon"
  },
  {
    id: "tuesday",
    name: "Tue"
  },
  {
    id: "wednesday",
    name: "Wed"
  },
  {
    id: "thursday",
    name: "Thu"
  },
  {
    id: "friday",
    name: "Fri"
  },
  {
    id: "saturday",
    name: "Sat"
  },
  {
    id: "sunday",
    name: "Sun"
  }
];

const EXCLUDED_REWARD_IDS = [102, 105, 202]; //102: Adventure XP, 105: Companion XP, 202: Mora
const CITY_NUM_ARRAY = [1, 2, 3, 4, 5, 6, "all"];

export default function DailyDomains() {
  const { data: dailyDomains } = useDailyDomainData();
  const isLg = useMediaQuery({ minWidth: 1024 });
  const [selectedDay, setSelectedDay] = useState(DAYS_OF_WEEK[0].id);
  const [selectedCity, setSelectedCity] = useState(CITY_NUM_ARRAY[0]);

  // Simplified filtering in one pass
  const filteredDomains = useMemo(() => {
    const domainsForDay = dailyDomains.find(
      (domain) => domain.day === selectedDay
    );
    const domainsForCity = domainsForDay?.domains.filter(
      (domain) => domain.city === selectedCity || selectedCity === "all"
    );
    return domainsForCity
      ? [...domainsForCity].sort((a, b) => a.city - b.city)
      : [];
  }, [dailyDomains, selectedDay, selectedCity]);

  return (
    <div className="flex flex-col gap-4">
      <div>
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
      </div>
      <div className="w-max">
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

      <div className="flex flex-col gap-2 lg:gap-3 xl:gap-4">
        {filteredDomains.map((domain) => (
          <div key={domain.id} className="flex flex-col">
            <div className="flex w-full items-center justify-between rounded-t-lg bg-slate-800/80 p-2">
              <h5>{domainNameParser(domain.name)}</h5>

              {selectedCity === "all" && (
                <Image
                  src={getRegionImageByNumber(domain.city)}
                  alt="region"
                  width={100}
                  height={100}
                  className="ml-2 inline-block size-8"
                />
              )}
            </div>
            <div className="flex w-full flex-row gap-2 rounded-b-lg bg-slate-600/60">
              {domain.reward
                .filter((reward) => !EXCLUDED_REWARD_IDS.includes(reward.id))
                .map((reward) => (
                  <MiniIconContainer
                    key={reward.id}
                    rarity={rarityParser(reward.stars)}
                    bgFlow="fromTo"
                  >
                    <div
                      className="flex h-full w-full flex-col items-center justify-end"
                      data-tooltip-id="asc-item-tooltip"
                      data-tooltip-content={`${reward.name}`}
                    >
                      <Image
                        className="size-17"
                        src={reward.icon}
                        alt={reward.name}
                        width={100}
                        height={100}
                      />
                    </div>
                    <Tooltip
                      id="asc-item-tooltip"
                      className="font-enka"
                      style={{
                        fontSize: "0.8rem"
                      }}
                    />
                  </MiniIconContainer>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
