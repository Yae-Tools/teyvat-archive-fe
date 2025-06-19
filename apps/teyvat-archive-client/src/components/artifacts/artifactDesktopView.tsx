"use client";

import { useAtom } from "jotai";
import { useEffect, useState } from "react";

import {
  selectedArtifactEquipTypeAtom,
  selectedRarityFullSetAtom
} from "~/atoms/teyvat/artifact.atom";
import { IArtifactSet, IEquipCollection } from "~/types/enka/artifacts.types";
import rarityBgPicker from "~/utils/rarityBgPicker";

import LazyBackgroundImage from "../common/lazyBackgroundImage";

import ArtifactProfileDesktop from "./artifactProfile/artifactProfileDesktop";

type Props = {
  artifactSet: IArtifactSet;
};

export default function ArtifactDesktopView({ artifactSet }: Readonly<Props>) {
  const { highestRarity, setBonus, name } = artifactSet;

  const [selectedEquipItem, setSelectedEquipItem] =
    useState<IEquipCollection | null>(null);

  const [selectedArtifactEquipType, setSelectedArtifactEquipType] = useAtom(
    selectedArtifactEquipTypeAtom
  );

  const [selectedRarityFullSet] = useAtom(selectedRarityFullSetAtom);

  useEffect(() => {
    if (selectedRarityFullSet.length > 0 && selectedRarityFullSet.length < 5) {
      setSelectedArtifactEquipType(selectedRarityFullSet[0].equipType);
    }
  }, [selectedRarityFullSet]);

  useEffect(() => {
    const equipItem = selectedRarityFullSet.find(
      (item) => item.equipType === selectedArtifactEquipType
    );

    if (equipItem) setSelectedEquipItem(equipItem);
  }, [selectedArtifactEquipType, selectedRarityFullSet]);

  if (!selectedEquipItem) return null;

  return (
    <div className="hidden w-full max-w-[1650px] flex-col items-center justify-start space-y-8 overflow-hidden px-12 py-4 xl:flex">
      <LazyBackgroundImage
        img={rarityBgPicker(highestRarity)}
        isDarkened
        className="hidden w-[calc(100%-3rem)] flex-col items-start justify-start rounded-4xl p-10 xl:flex xl:h-[650px]"
      >
        <ArtifactProfileDesktop
          {...{
            highestRarity,
            selectedEquipItem,
            setName: name,
            setBonus
          }}
        />
      </LazyBackgroundImage>
    </div>
  );
}
