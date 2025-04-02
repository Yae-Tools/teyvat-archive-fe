import { IBaseCharacter, ITopCharacter } from "~/types/enka/character.types";
import {
  IAbyssBlessing,
  IAbyssCharacterResponse,
  IAbyssParty
} from "~/types/enka/enka.types";

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
      usedByOwn ? b.useByOwnRate - a.useByOwnRate : b.useRate - a.useRate
    )
    .slice(0, 10)
    .map((character) => {
      const baseChar = baseCharMap.get(Number(character.id));
      return {
        id: character.id,
        useRate: usedByOwn ? character.useByOwnRate : character.useRate,
        ownRate: character.ownRate,
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

export const getFinalizedAbyssBlessings = (blessings: IAbyssBlessing[]) => {
  const filteredBlessings = blessings
    .filter((blessing) => blessing.name !== "" && blessing.name !== undefined)
    .sort((a, b) => {
      return Number(b.id) - Number(a.id);
    });

  return filteredBlessings;
};

export const isCurrentBlessing = (startDate: string, endDate: string) => {
  const currentDate = new Date();

  const start = new Date(startDate);
  const end = new Date(endDate);

  const isCurrent = currentDate >= start && currentDate <= end;

  return isCurrent;
};

export const getTopFourTeams = (
  parties: IAbyssParty[],
  baseCharacters: IBaseCharacter[]
) => {
  const baseCharMap = new Map<number, IBaseCharacter>(
    baseCharacters.map((char) => [char.enkaId, char])
  );
  // get highest useByOwnRate

  const sortedParties = parties
    .toSorted((a, b) => b.useByOwnRate - a.useByOwnRate)
    .slice(0, 4)
    .map((party) => {
      const characters = party.characterIds.map((id) => {
        const baseChar = baseCharMap.get(Number(id));
        return {
          id: id,
          name: baseChar!.name,
          icon: baseChar!.iconUrl,
          element: baseChar!.element,
          rarity: baseChar!.rarity
        };
      });
      return {
        useByOwnRate: party.useByOwnRate,
        ownRate: party.ownRate,
        value: party.value,
        characters
      };
    });

  return sortedParties;
};
