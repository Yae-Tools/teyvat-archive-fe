"use server";

import CharacterClient from "~/components/character/characterClient";
import { transforCharacterData } from "~/features/imageFetchOptimizer";
import {
  getCharacterBySkillDepotId,
  getCharacters,
} from "~/services/teyvatServer/teyvatArchive.service";
import { decryptCharacterUniqueRoute } from "~/utils/decryptUniqueId";

export async function generateStaticParms() {
  const characters: IBaseCharacter[] = await getCharacters();
  return {
    paths: characters.map((character) => ({
      params: {
        slug: character.id,
      },
    })),
  };
}

export default async function Character({
  params,
}: Readonly<{ params: Promise<{ slug: string }> }>) {
  const { slug } = await params;

  const { skillDepotId, enkaId } = decryptCharacterUniqueRoute(slug);

  const character: ICharacter = await getCharacterBySkillDepotId(
    enkaId,
    skillDepotId
  );
  const transformedCharacter = transforCharacterData(character);

  return <CharacterClient {...{ character: transformedCharacter }} />;
}
