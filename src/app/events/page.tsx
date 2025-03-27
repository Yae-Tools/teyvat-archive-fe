"use server";

import { Metadata } from "next";
import PageTitle from "~/components/common/typography/pageTitle";
import EventsClient from "~/components/home/homeClient";
import { getAllEvents } from "~/services/teyvatServer/teyvatArchive.service";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Teyvat Archive",
    description: "Welcome to Teyvat Archive!",
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
