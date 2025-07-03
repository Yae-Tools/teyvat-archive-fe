"use client";

import { motion } from "motion/react";
import { useMemo } from "react";

import { SORTING_OPTIONS } from "~/data/teyvatData";
import useArtifactFilters from "~/hooks/artifact/useArtifactFilters";
import { useInfiniteScroll } from "~/hooks/useInfiniteScroll";
import { IBaseArtifactSet } from "~/types/enka/artifacts.types";
import rarityParser from "~/utils/parsers/rarityParser";

import GridContainer, {
  itemAnimation
} from "../layout/container/gridContainer";

import ArtifactThumbnail from "./artifactThumbnail";

type Props = {
  artifactSets: IBaseArtifactSet[];
};

export default function AllArtifactsShowcase({
  artifactSets
}: Readonly<Props>) {
  const { artifactRarity, isAsc, search, sort } = useArtifactFilters();

  const filteredArtifactSets = useMemo(() => {
    const searchLower = search.toLowerCase();
    return artifactSets.filter(
      (set) =>
        set.name.toLowerCase().includes(searchLower) &&
        (!artifactRarity || rarityParser(set.highestRarity) === artifactRarity)
    );
  }, [search, artifactSets, artifactRarity]);

  const filteredAndSortedArtifactSets = useMemo(() => {
    return filteredArtifactSets.toSorted((a, b) => {
      if (sort === SORTING_OPTIONS.Default) {
        return isAsc ? 0 : -1;
      }
      if (sort === SORTING_OPTIONS.Name) {
        return isAsc
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      }
      if (sort === SORTING_OPTIONS.Rarity) {
        return isAsc
          ? a.highestRarity - b.highestRarity
          : b.highestRarity - a.highestRarity;
      }
      return 0;
    });
  }, [filteredArtifactSets, sort, isAsc]);

  const { hasMore, loaderRef, visibleItems } = useInfiniteScroll(
    filteredAndSortedArtifactSets,
    24,
    12
  );

  return (
    <GridContainer {...{ hasMore, loaderRef }}>
      {visibleItems.map((artifactSet) => (
        <motion.div
          key={artifactSet.id}
          variants={itemAnimation}
          className="flex items-start justify-center size-full"
        >
          <ArtifactThumbnail artifactSet={artifactSet} />
        </motion.div>
      ))}
    </GridContainer>
  );
}
