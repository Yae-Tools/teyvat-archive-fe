"use client";

import { useState } from "react";

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

export default function DailyDomains() {
  const { data: dailyDomains } = useDailyDomainData();

  const [selectedDay, setSelectedDay] = useState<string>(DAYS_OF_WEEK[0].id);

  return (
    <>
      <div>
        <ButtonGroup
          items={DAYS_OF_WEEK.map((day) => ({
            value: day.id,
            id: day.id,
            label: day.name,
            isSelected: selectedDay === day.id,
            onClick: (value: string) => {
              setSelectedDay(value);
            }
          }))}
          selectedItem={selectedDay}
        />
      </div>

      <div>
        {Object.entries(dailyDomains[selectedDay] || {}).map(([key, value]) => {
          return (
            <div key={key} className="flex flex-col gap-2">
              <div className="flex flex-row gap-2">
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
