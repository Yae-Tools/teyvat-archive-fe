"use client";

import Image from "next/image";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

import ButtonGroup from "~/components/common/basic/buttonGroup";
import { useDailyDomainData } from "~/hooks/domain/useDomainData";
import { IDailyDomainData } from "~/types/enka/domain.types";
import domainNameParser from "~/utils/parsers/domainNameParser";
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

export default function DailyDomains() {
  const { data: dailyDomains } = useDailyDomainData();
  const isLg = useMediaQuery({ minWidth: 1024 });

  const [selectedDay, setSelectedDay] = useState<string>(DAYS_OF_WEEK[0].id);

  return (
    <div className="flex flex-col gap-4">
      <div>
        <ButtonGroup
          items={DAYS_OF_WEEK.map((day) => ({
            value: day.id,
            id: day.id,
            label: isLg ? day.name : day.name.slice(0, 1).toUpperCase(),
            isSelected: selectedDay === day.id,
            onClick: (value: string) => {
              setSelectedDay(value);
            }
          }))}
          selectedItem={selectedDay}
        />
      </div>

      <div className="flex flex-col gap-2">
        {Object.entries(dailyDomains[selectedDay]).map(
          ([key, value]: [string, IDailyDomainData]) => {
            return (
              <div key={key} className="flex flex-col gap-2">
                <div className="flex w-full items-center justify-between rounded-t-lg bg-slate-800 p-2">
                  <h5>{domainNameParser(value.name)}</h5>
                  <Image
                    src={getRegionImageByNumber(value.city)}
                    alt="region"
                    width={100}
                    height={100}
                    className="ml-2 inline-block size-8"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-sm">{value.reward.join(", ")}</div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}
