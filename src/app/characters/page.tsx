"use server";

import CharactersClient from "~/components/characters/charactersClient";
import { getCharacters } from "~/services/teyvatServer/teyvatArchive.service";

export default async function Characters() {
  const characters = await getCharacters();

  return <CharactersClient {...{ characters }} />;
}
