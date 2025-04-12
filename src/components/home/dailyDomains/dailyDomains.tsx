"use client";

import { useState } from "react";
import { useMediaQuery } from "react-responsive";

import ButtonGroup from "~/components/common/basic/buttonGroup";
import { useDailyDomainData } from "~/hooks/domain/useDomainData";

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

const domainNameParser = (domainName: string) => {
  // remove the prefix "Domain of" from the domain name
  const prefix = "Domain of ";
  if (domainName.startsWith(prefix)) {
    return domainName.slice(prefix.length);
  }
  return domainName;
};

export default function DailyDomains() {
  const { data: dailyDomains } = useDailyDomainData();
  const isLg = useMediaQuery({ minWidth: 1024 });

  const [selectedDay, setSelectedDay] = useState<string>(DAYS_OF_WEEK[0].id);

  return (
    <>
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
        {Object.entries(dailyDomains[selectedDay] || {}).map(([key, value]) => {
          return (
            <div key={key} className="flex flex-col gap-2">
              <div className="rounded-t-lg bg-slate-800 p-2">
                {domainNameParser(value.name)}
                {/* domain header */}
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-sm">{value.name}</div>

                <div className="text-sm">{value.city}</div>
                <div className="text-sm">{value.reward.join(", ")}</div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
