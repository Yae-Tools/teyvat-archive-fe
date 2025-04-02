"use client";

import { useAtom } from "jotai";
import { useEffect, useState } from "react";

import {
  selectedArtifactEquipTypeAtom,
  selectedRarityFullSetAtom
} from "~/atoms/teyvat/artifact.atom";
import { IArtifactSet, IEquipCollection } from "~/types/enka/artifacts.types";

import ArtifactEquipPickerMobile from "./artifactEquipPicker/artifactEquipPickerMobile";
import ArtifactProfileMobile from "./artifactProfile/artifactProfileMobile";
import ArtifactSetBonusMobile from "./artifactSetBonus/artifactSetBonusMobile";

type Props = {
  artifactSet: IArtifactSet;
};

export default function ArtifactMobileView({ artifactSet }: Readonly<Props>) {
  const { highestRarity, setBonus, name } = artifactSet;
  const [selectedArtifactEquipType] = useAtom(selectedArtifactEquipTypeAtom);
  const [selectedRarityFullSet] = useAtom(selectedRarityFullSetAtom);

  const [selectedEquipItem, setSelectedEquipItem] =
    useState<IEquipCollection | null>(null);

  useEffect(() => {
    if (!selectedArtifactEquipType) return;

    const equipItem = selectedRarityFullSet.find(
      (item) => item.equipType === selectedArtifactEquipType
    );

    if (equipItem) setSelectedEquipItem(equipItem);
  }, [selectedArtifactEquipType, selectedRarityFullSet]);

  if (!selectedEquipItem) return null;

  return (
    <div className="w-full px-2 pt-2 md:p-10 xl:hidden">
      <ArtifactProfileMobile
        {...{
          selectedEquipItem,
          highestRarity,
          setName: name
        }}
      />
      <ArtifactEquipPickerMobile
        {...{
          description: selectedEquipItem.description
        }}
      />
      <ArtifactSetBonusMobile {...{ setBonus }} />
    </div>
  );
}
