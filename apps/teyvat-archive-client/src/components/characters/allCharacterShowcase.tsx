"use client";

import { motion } from "motion/react";
import { useMemo } from "react";

import { CHARACTER_SORTING_OPTIONS } from "~/data/teyvatData";
import useCharacterFilters from "~/hooks/character/useCharacterFilters";
import { useInfiniteScroll } from "~/hooks/useInfiniteScroll";
import { IBaseCharacter } from "~/types/enka/character.types";
import { inverseRarityParser } from "~/utils/parsers/rarityParser";

import GridContainer, {
  itemAnimation
} from "../layout/container/gridContainer";

import CharacterThumbnail from "./characterThumbnail";

type Props = {
  characters: IBaseCharacter[];
};

export default function AllCharacterShowcase({ characters }: Readonly<Props>) {
  const { element, isAsc, rarity, search, sort, weapon } =
    useCharacterFilters();

  const filteredCharacters = useMemo(() => {
    const searchLower = search.toLowerCase();

    return characters.filter(
      (character) =>
        character.name.toLowerCase().includes(searchLower) &&
        (!element || character.element === element) &&
        (!weapon || character.weaponType === weapon) &&
        (!rarity || character.rarity === rarity)
    );
  }, [element, characters, weapon, rarity, search]);

  const filteredAndSortedCharacters = useMemo(() => {
    return filteredCharacters.toSorted((a, b) => {
      if (sort === CHARACTER_SORTING_OPTIONS.Default) {
        return isAsc ? 0 : -1;
      }
      if (sort === CHARACTER_SORTING_OPTIONS.Name) {
        return isAsc
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      }
      if (sort === CHARACTER_SORTING_OPTIONS.Rarity) {
        return isAsc
          ? inverseRarityParser(a.rarity) - inverseRarityParser(b.rarity)
          : inverseRarityParser(b.rarity) - inverseRarityParser(a.rarity);
      }
      if (sort === CHARACTER_SORTING_OPTIONS.Release) {
        return isAsc
          ? a.releasedAt.localeCompare(b.releasedAt)
          : b.releasedAt.localeCompare(a.releasedAt);
      }
      return 0;
    });
  }, [filteredCharacters, sort, isAsc]);

  const { visibleItems, loaderRef, hasMore } = useInfiniteScroll(
    filteredAndSortedCharacters,
    24, // Initial items to show
    12 // Number of items to load each time
  );

  return (
    <GridContainer {...{ hasMore, loaderRef }}>
      {visibleItems.map((character) => (
        <motion.div
          key={character.id}
          variants={itemAnimation}
          className="flex items-start justify-center size-full"
        >
          <CharacterThumbnail character={character} />
        </motion.div>
      ))}
    </GridContainer>
  );
}
