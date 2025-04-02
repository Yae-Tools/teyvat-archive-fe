"use client";

import { useEffect, useState } from "react";

import { IEvent } from "~/types/ambr.types";

import Carousel from "./carousel/carousel";
import OtherEvents from "./events/otherEvents";

type Props = {
  events: IEvent[];
};

export default function EventsClient({ events }: Readonly<Props>) {
  const [wishEventItems, setWishEventItems] = useState<IEvent[]>([]);
  const [otherEventItems, setOtherEventItems] = useState<IEvent[]>([]);

  useEffect(() => {
    const filterWishEvents = events.filter((event) =>
      event.title.includes("Event Wish")
    );

    const filterOtherEvents = events.filter(
      (event) =>
        !event.title.includes("Event Wish") && !event.title.includes("Update")
    );

    setWishEventItems(filterWishEvents);
    setOtherEventItems(filterOtherEvents);
  }, [events]);

  return (
    <div className="mt-3 flex w-full flex-col items-center justify-center xl:mb-4">
      <div className="mt-3 flex w-full flex-col items-center justify-center xl:mb-4">
        <Carousel items={wishEventItems} />
        <OtherEvents events={otherEventItems} />
      </div>
    </div>
  );
}
