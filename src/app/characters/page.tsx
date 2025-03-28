"use server";

import { Metadata } from "next";
import CharactersClient from "~/components/characters/charactersClient";
import { getCharacters } from "~/services/teyvatServer/teyvatArchive.service";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Teyvat Archive - Characters",
    description: "Teyvat Archive - Characters",
    keywords:
      "Teyvat Archive, Genshin Impact, Teyvat, Genshin, Impact, Characters",
  };
}

export default async function Characters() {
  const characters = await getCharacters();

  return <CharactersClient {...{ characters }} />;
}
