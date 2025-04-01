import { IBaseCharacter, ITopCharacter } from "~/types/enka/character.types";
import { IAbyssCharacterResponse } from "~/types/enka/enka.types";

// Define the return type for better type safety

export const getTopTenCharacters = (
  usedByOwn: boolean,
  abyssCharacters: IAbyssCharacterResponse[],
  baseCharacters: IBaseCharacter[]
): ITopCharacter[] => {
  // Create a lookup map for baseCharacters to avoid repeated find operations
  const baseCharMap = new Map<number, IBaseCharacter>(
    baseCharacters.map((char) => [char.enkaId, char])
  );

  const topTenCharacters = abyssCharacters
    .toSorted((a, b) =>
      usedByOwn
        ? b.use_by_own_rate - a.use_by_own_rate
        : b.use_rate - a.use_rate
    )
    .slice(0, 10)
    .map((character) => {
      const baseChar = baseCharMap.get(Number(character.id));
      return {
        id: character.id,
        useRate: usedByOwn ? character.use_by_own_rate : character.use_rate,
        ownRate: character.own_rate,
        weapons: character.weapons,
        artifacts: character.artifacts,
        constellations: character.constellations,
        rarity: baseChar?.rarity,
        element: baseChar?.element,
        icon: baseChar?.iconUrl
      };
    });

  return topTenCharacters;
};
