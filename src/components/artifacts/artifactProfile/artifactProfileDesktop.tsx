import { useAtom } from "jotai";
import Image from "next/image";

import {
  selectedArtifactEquipTypeAtom,
  selectedRarityFullSetAtom
} from "~/atoms/teyvat/artifact.atom";
import RarityStars from "~/components/common/rarityStars";
import TitleHeading from "~/components/common/typography/titleHeading";
import { EQUIP_TYPES } from "~/data/teyvatData";
import { IEquipCollection, ISetBonus } from "~/types/enka/artifacts.types";

import ArtifactEquipPicker from "../artifactEquipPicker/artifactEquipPicker";
import ArtifactOverviewDesktop from "../artifactOverview/artifactOverviewDesktop";

type Props = {
  highestRarity: number;
  selectedEquipItem: IEquipCollection;
  setName: string;
  setBonus: ISetBonus[];
};

export default function ArtifactProfileDesktop({
  highestRarity,
  selectedEquipItem,
  setName,
  setBonus
}: Readonly<Props>) {
  const { name, icon, description } = selectedEquipItem;

  const [selectedArtifactEquipType, setSelectedArtifactEquipType] = useAtom(
    selectedArtifactEquipTypeAtom
  );
  const [selectedRarityFullSet] = useAtom(selectedRarityFullSetAtom);
  return (
    <>
      <div className="m-2 flex w-full flex-col items-start justify-start">
        <div className="mx-2 flex w-max flex-col items-start">
          <div className="mb-2 flex items-center justify-start space-x-1">
            <RarityStars stars={highestRarity} />
          </div>
        </div>
        <div className="flex w-full items-start justify-between space-x-1">
          <div className="mx-2 mb-2 flex w-2/3 items-start justify-start space-x-1 text-left">
            <TitleHeading text={name} />
          </div>
          <div className="my-2 flex w-1/3 flex-col items-center justify-end px-6">
            {selectedRarityFullSet.length > 0 && (
              <ArtifactEquipPicker
                {...{
                  selectedArtifactEquipType,
                  setSelectedArtifactEquipType,
                  selectedRarityFullSet
                }}
              />
            )}
            <div className="my-2 flex w-full flex-col items-end justify-end space-x-1 text-right text-white">
              <h6 className="text-xl">{setName}</h6>
              <h6>{EQUIP_TYPES[selectedEquipItem.equipType]}</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="relative mx-2 flex h-full w-full">
        <ArtifactOverviewDesktop
          {...{
            setBonus
          }}
        />
        <div className="mx-2 flex w-1/3 flex-col items-center justify-center p-4">
          <Image src={icon} alt={name} height={300} width={300} />
        </div>
      </div>
    </>
  );
}
