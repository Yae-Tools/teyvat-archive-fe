"use server";

import { Metadata } from "next";
import PageTitle from "~/components/common/typography/pageTitle";
import EventsClient from "~/components/events/eventsClient";
import { getAllEvents } from "~/services/teyvatServer/teyvatArchive.service";
import { IEvent } from "~/types/ambr.types";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Teyvat Archive - Events",
    description: "Teyvat Archive - Events",
    keywords: "Teyvat Archive, Genshin Impact, Teyvat, Genshin, Impact, Events",
  };
}

export default async function Events() {
  const events: IEvent[] = await getAllEvents();

  return (
    <div className="w-full flex flex-col items-center justify-center xl:mb-4 mt-3">
      <PageTitle title="Teyvat Events" />
      <EventsClient {...{ events }} />
    </div>
  );
}
