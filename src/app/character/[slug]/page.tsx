"use server";

import CharacterClient from "~/components/character/characterClient";
import { transforCharacterData } from "~/features/imageFetchOptimizer";
import { getCharacterBySkillDepotId } from "~/services/teyvatServer/teyvatArchive.service";
import { decryptCharacterUniqueRoute } from "~/utils/decryptUniqueId";

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
