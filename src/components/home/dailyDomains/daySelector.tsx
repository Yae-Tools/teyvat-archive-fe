import React from "react";
import ButtonGroup from "~/components/common/basic/buttonGroup";
import { DAYS_OF_WEEK } from "~/hooks/domain/useDomainState";

type Props = {
  selectedDay: string;
  setSelectedDay: (day: string) => void;
  isLg: boolean;
};

export default function DaySelector({
  selectedDay,
  setSelectedDay,
  isLg
}: Readonly<Props>) {
  return (
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
  );
}
