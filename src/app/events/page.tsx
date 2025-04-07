"use server";

import {
  dehydrate,
  HydrationBoundary,
  QueryClient
} from "@tanstack/react-query";
import { Metadata } from "next";

import EventsClient from "~/components/events/eventsClient";
import { prefetchEventData } from "~/hooks/useEventData";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Teyvat Archive - Events",
    description: "Teyvat Archive - Events",
    keywords: "Teyvat Archive, Genshin Impact, Teyvat, Genshin, Impact, Events"
  };
}

export default async function Events() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 60, // 1 hour
        gcTime: 1000 * 60 * 60 * 24 // 24 hours (previously cacheTime)
      }
    }
  });

  await prefetchEventData(queryClient);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <EventsClient />
    </HydrationBoundary>
  );
}
