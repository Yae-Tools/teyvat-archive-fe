"use client";

import { useEffect, useState } from "react";
import ArtifactProfileMobile from "./artifactProfile/artifactProfileMobile";
import ArtifactEquipPickerMobile from "./artifactEquipPicker/artifactEquipPickerMobile";
import ArtifactSetBonusMobile from "./artifactSetBonus/artifactSetBonusMobile";
import {
  selectedArtifactEquipTypeAtom,
  selectedRarityFullSetAtom,
} from "~/atoms/teyvat/artifact.atom";
import { useAtom } from "jotai";
import { IArtifactSet, IEquipCollection } from "~/types/enka/artifacts.types";

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
    <div className="pt-2 md:p-10 px-2 xl:hidden w-full">
      <ArtifactProfileMobile
        {...{
          selectedEquipItem,
          highestRarity,
          setName: name,
        }}
      />
      <ArtifactEquipPickerMobile
        {...{
          description: selectedEquipItem.description,
        }}
      />
      <ArtifactSetBonusMobile {...{ setBonus }} />
    </div>
  );
}
