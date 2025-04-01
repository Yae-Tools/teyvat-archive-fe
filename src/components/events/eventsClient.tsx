"use client";

import { useEffect, useState } from "react";
import Carousel from "./carousel/carousel";
import OtherEvents from "./events/otherEvents";
import { IEvent } from "~/types/ambr.types";

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
    <div className="w-full flex flex-col items-center justify-center xl:mb-4 mt-3">
      <div className="w-full flex flex-col items-center justify-center xl:mb-4 mt-3">
        <Carousel items={wishEventItems} />
        <OtherEvents events={otherEventItems} />
      </div>
    </div>
  );
}
