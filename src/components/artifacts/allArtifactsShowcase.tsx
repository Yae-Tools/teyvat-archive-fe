"use client";

import { motion } from "framer-motion";
import { useAtomValue } from "jotai";
import { useMemo } from "react";

import {
  artifactRarityAtom,
  artifactSearchAtom,
  artifactSetSortingAtom,
  artifactSortAscAtom
} from "~/atoms/teyvat/artifact.atom";
import { SORTING_OPTIONS } from "~/data/teyvatData";
import { IBaseArtifactSet } from "~/types/enka/artifacts.types";
import rarityParser from "~/utils/parsers/rarityParser";

import ArtifactThumbnail from "./artifactThumbnail";

type Props = {
  artifactSets: IBaseArtifactSet[];
};

export default function AllArtifactsShowcase({
  artifactSets
}: Readonly<Props>) {
  const selectedArtifactRarity = useAtomValue(artifactRarityAtom);
  const artifactSearch = useAtomValue(artifactSearchAtom);
  const artifactSort = useAtomValue(artifactSetSortingAtom);
  const isSortAsc = useAtomValue(artifactSortAscAtom);

  const filteredArtifactSets = useMemo(() => {
    const searchLower = artifactSearch.toLowerCase();
    return artifactSets
      .filter(
        (set) =>
          set.name.toLowerCase().includes(searchLower) &&
          (!selectedArtifactRarity ||
            rarityParser(set.highestRarity) === selectedArtifactRarity)
      )
      .toSorted((a, b) => {
        if (artifactSort === SORTING_OPTIONS.Default) {
          return isSortAsc ? 0 : -1;
        }
        if (artifactSort === SORTING_OPTIONS.Name) {
          return isSortAsc
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name);
        }
        if (artifactSort === SORTING_OPTIONS.Rarity) {
          return isSortAsc
            ? a.highestRarity - b.highestRarity
            : b.highestRarity - a.highestRarity;
        }
        return 0;
      });
  }, [
    artifactSearch,
    artifactSets,
    selectedArtifactRarity,
    artifactSort,
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
        className="xs:grid-cols-3 mt-2 grid auto-cols-fr grid-cols-2 overflow-y-auto pt-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8"
      >
        {filteredArtifactSets.map((artiSet) => (
          <ArtifactThumbnail
            key={artiSet.id}
            {...{
              artifactSet: artiSet
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}
