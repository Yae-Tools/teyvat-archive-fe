"use server";

import { Metadata } from "next";
import CharacterClient from "~/components/character/characterClient";
import { transforCharacterData } from "~/features/imageFetchOptimizer";
import { getCharacterBySkillDepotId } from "~/services/teyvatServer/teyvatArchive.service";
import { ICharacter } from "~/types/enka/character.types";
import { decryptCharacterUniqueRoute } from "~/utils/decryptUniqueId";

async function fetchCharacter(slug: string) {
  const { skillDepotId, enkaId } = decryptCharacterUniqueRoute(slug);

  const character: ICharacter = await getCharacterBySkillDepotId(
    enkaId,
    skillDepotId
  );
  const transformedCharacter = transforCharacterData(character);

  if (!character) {
    throw new Error("Character not found");
  }
  return transformedCharacter;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const character: ICharacter = await fetchCharacter(slug);

  return {
    title: `Teyvat Archive - ${character.name}`,
    description: `Artifact Set: ${character.name}`,
    keywords: `Teyvat Archive, Genshin Impact, Teyvat, Genshin, Impact, Character, ${character.name}`,
  };
}

export default async function Character({
  params,
}: Readonly<{ params: Promise<{ slug: string }> }>) {
  const { slug } = await params;

  const character = await fetchCharacter(slug);

  return <CharacterClient {...{ character }} />;
}
