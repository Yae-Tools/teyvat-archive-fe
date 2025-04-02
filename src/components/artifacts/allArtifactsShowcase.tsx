"use client";

import { motion } from "framer-motion";
import { useAtomValue } from "jotai";
import { useEffect, useState } from "react";

import {
  artifactRarityAtom,
  artifactSearchAtom
} from "~/atoms/teyvat/artifact.atom";
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

  const [filteredArtifactSets, setFilteredArtifactSets] =
    useState(artifactSets);

  useEffect(() => {
    const filtered = artifactSets.filter(
      (set) =>
        set.name.toLowerCase().includes(artifactSearch.toLowerCase()) &&
        (!selectedArtifactRarity ||
          rarityParser(set.highestRarity) === selectedArtifactRarity)
    );
    setFilteredArtifactSets(filtered);
  }, [artifactSearch, artifactSets, selectedArtifactRarity]);

  return (
    <div className="flex w-full items-center justify-center overflow-hidden px-4 md:px-12">
      <motion.div
        layout
        animate={{ opacity: 1 }}
        className="xs:grid-cols-3 mt-2 grid auto-cols-fr grid-cols-2 overflow-y-auto pt-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8"
      >
        {filteredArtifactSets
          .toSorted((a, b) => a.highestRarity - b.highestRarity)
          .map((artiSet) => (
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
