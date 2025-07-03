import { useAtom } from "jotai";

import {
  selectedArtifactEquipTypeAtom,
  selectedRarityFullSetAtom
} from "~/atoms/teyvat/artifact.atom";
import OptimizedImage from "~/components/common/basic/optimizedImage";
import DescriptionDesktop from "~/components/common/descriptionDesktop";
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
    <div className="flex items-start justify-between size-full">
      <div className="flex h-full w-2/3 flex-col items-start justify-start">
        <div className="flex w-full flex-col items-start justify-start">
          <div className="mb-2 flex items-center justify-start space-x-4">
            <RarityStars stars={highestRarity} />
            <h6 className="text-xl">{setName}</h6>
          </div>
          <div className="my-2 flex w-full items-start justify-start space-x-1 text-left">
            <TitleHeading text={name} />
          </div>
        </div>
        <div className="mt-4 flex items-end justify-center size-full">
          <ArtifactOverviewDesktop
            {...{
              setBonus
            }}
          />
        </div>
      </div>
      <div className="flex h-full w-1/3 flex-col items-center justify-between space-y-6">
        <OptimizedImage src={icon} alt={name} height={250} width={250} />
        <DescriptionDesktop {...{ description }} align="right" />
        <div className="mt-2 flex w-full flex-col items-center justify-end">
          <div className="mb-2 flex w-full flex-col items-end justify-end space-x-1 text-right text-white">
            <h6>{EQUIP_TYPES[selectedEquipItem.equipType]}</h6>
          </div>
          {selectedRarityFullSet.length > 0 && (
            <ArtifactEquipPicker
              {...{
                selectedArtifactEquipType,
                setSelectedArtifactEquipType,
                selectedRarityFullSet
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
