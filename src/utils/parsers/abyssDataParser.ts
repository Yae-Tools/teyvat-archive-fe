import { IAbyssCharacterResponse } from "~/types/enka/enka.types";

export const getTopTenCharacters = (
  usedByOwn: boolean,
  charcters: IAbyssCharacterResponse[]
) => {
  const topTenCharacters = charcters
    .toSorted((a, b) => {
      if (usedByOwn) {
        return b.use_by_own_rate - a.use_by_own_rate;
      }
      return b.use_rate - a.use_rate;
    })
    .slice(0, 10);
  // .map((character) => {
  //   return {
  //     id: character.id,
  //     useRate: usedByOwn
  //       ? character.use_by_own_rate
  //       : character.use_rate,
  //     ownRate: character.own_rate,
  //     weapons: character.weapons,
  //     artifacts: character.artifacts,
  //     constellations: character.constellations,
  //   };
  // });

  return topTenCharacters;
};
