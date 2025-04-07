"use client";

import { motion } from "framer-motion";
import { useAtomValue } from "jotai";
import { useMemo } from "react";

import {
  characterSearchAtom,
  characterSortAscAtom,
  characterSortingAtom,
  selectedCharacterElementAtom,
  selectedCharacterRarityAtom,
  selectedCharacterWeaponAtom
} from "~/atoms/teyvat/character.atom";
import { CHARACTER_SORTING_OPTIONS } from "~/data/teyvatData";
import { IBaseCharacter } from "~/types/enka/character.types";
import { inverseRarityParser } from "~/utils/parsers/rarityParser";

import CharacterThumbnail from "./characterThumbnail";

type Props = {
  characters: IBaseCharacter[];
};

export default function AllCharacterShowcase({ characters }: Readonly<Props>) {
  const selectedCharacterElement = useAtomValue(selectedCharacterElementAtom);
  const selectedCharacterWeapon = useAtomValue(selectedCharacterWeaponAtom);
  const selectedCharacterRarity = useAtomValue(selectedCharacterRarityAtom);
  const characterSearch = useAtomValue(characterSearchAtom);
  const characterSort = useAtomValue(characterSortingAtom);
  const isSortAsc = useAtomValue(characterSortAscAtom);

  const filteredCharacters = useMemo(() => {
    const searchLower = characterSearch.toLowerCase();

    return characters
      .filter(
        (character) =>
          character.name.toLowerCase().includes(searchLower) &&
          (!selectedCharacterElement ||
            character.element === selectedCharacterElement) &&
          (!selectedCharacterWeapon ||
            character.weaponType === selectedCharacterWeapon) &&
          (!selectedCharacterRarity ||
            character.rarity === selectedCharacterRarity)
      )
      .toSorted((a, b) => {
        if (characterSort === CHARACTER_SORTING_OPTIONS.Default) {
          return isSortAsc ? 0 : -1;
        }
        if (characterSort === CHARACTER_SORTING_OPTIONS.Name) {
          return isSortAsc
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name);
        }
        if (characterSort === CHARACTER_SORTING_OPTIONS.Rarity) {
          return isSortAsc
            ? inverseRarityParser(a.rarity) - inverseRarityParser(b.rarity)
            : inverseRarityParser(b.rarity) - inverseRarityParser(a.rarity);
        }
        if (characterSort === CHARACTER_SORTING_OPTIONS.Release) {
          return isSortAsc
            ? a.releasedAt.localeCompare(b.releasedAt)
            : b.releasedAt.localeCompare(a.releasedAt);
        }
        return 0;
      });
  }, [
    selectedCharacterElement,
    characters,
    selectedCharacterWeapon,
    selectedCharacterRarity,
    characterSearch,
    characterSort,
    isSortAsc
  ]);

  return (
    <div
      className="flex w-full items-center justify-center overflow-hidden px-4 md:px-12"
      style={{ backgroundColor: "rgba(16, 24, 40, 0.3)" }}
    >
      <motion.div
        layout
        animate={{ opacity: 1 }}
        className="xs:grid-cols-3 grid auto-cols-fr grid-cols-2 overflow-y-auto pt-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8"
      >
        {filteredCharacters.map((character) => (
          <CharacterThumbnail key={character.id} {...{ character }} />
        ))}
      </motion.div>
    </div>
  );
}
