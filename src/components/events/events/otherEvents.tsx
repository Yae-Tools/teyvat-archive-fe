import { IEvent } from "~/types/ambr.types";

import EventItem from "./eventItem";

type Props = {
  events: IEvent[];
};

export default function OtherEvents({ events }: Readonly<Props>) {
  return (
    <div className="mx-4 my-6 grid max-w-[1000px] auto-rows-auto grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {events.map((event) => (
        <EventItem key={event.id} {...{ event }} />
      ))}
    </div>
  );
}
