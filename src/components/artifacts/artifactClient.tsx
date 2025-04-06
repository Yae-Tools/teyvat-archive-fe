"use client";

import { useAtom } from "jotai";
import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import {
  selectedArtifactRarityAtom,
  selectedRarityFullSetAtom
} from "~/atoms/teyvat/artifact.atom";
import { IArtifactSet } from "~/types/enka/artifacts.types";

import ArtifactDesktopView from "./artifactDesktopView";
import ArtifactMobileView from "./artifactMobileView";

type Props = {
  artifactSet: IArtifactSet;
};

export default function ArtifactClient({ artifactSet }: Readonly<Props>) {
  const isXl = useMediaQuery({ minWidth: 1280 });

  const { highestRarity } = artifactSet;
  const [artifactRarity, setArtifactRarity] = useAtom(
    selectedArtifactRarityAtom
  );

  const [_, setSelectedRarityFullSet] = useAtom(selectedRarityFullSetAtom);

  useEffect(() => {
    setArtifactRarity(highestRarity);
  }, [highestRarity]);

  useEffect(() => {
    if (typeof artifactRarity === "number") {
      const selectedRaritySet = artifactSet.collection.filter(
        (set) => set.stars === artifactRarity
      );

      setSelectedRarityFullSet(selectedRaritySet);
    }
  }, [artifactRarity]);

  return (
    <>
      {isXl ? (
        <ArtifactDesktopView {...{ artifactSet }} />
      ) : (
        <ArtifactMobileView {...{ artifactSet }} />
      )}
    </>
  );
}
