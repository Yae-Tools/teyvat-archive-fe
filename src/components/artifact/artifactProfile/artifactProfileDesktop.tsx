import RarityStars from "~/components/common/rarityStars";
import TitleHeading from "~/components/common/typography/titleHeading";
import { EQUIP_TYPES } from "~/data/teyvatData";
import { IEquipCollection, ISetBonus } from "~/types/enka/artifacts.types";

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
  return (
    <>
      <div className="m-2 flex w-full items-start justify-between">
        <div className="mx-2 flex w-1/3 flex-col items-start">
          <div className="mb-2 flex items-center justify-start space-x-1">
            <RarityStars stars={highestRarity} />
          </div>
        </div>
        <div className="mx-2 flex w-2/3 flex-col items-end justify-end">
          <div className="mb-2 flex w-full items-center justify-end space-x-1 text-right">
            <TitleHeading text={name} />
          </div>
          <div className="mb-2 flex w-full items-center justify-end space-x-1 text-right">
            <h6 className="text-right text-xl text-white">
              {setName} | {EQUIP_TYPES[selectedEquipItem.equipType]}
            </h6>
          </div>
        </div>
      </div>
      <div className="relative mx-2 flex h-full w-full">
        <div className="mx-2 flex w-1/3 flex-col items-start">
          <img
            src={icon}
            alt={name}
            className="absolute bottom-10 left-20"
            style={{
              height: "100%",
              scale: "1"
            }}
          />
        </div>
        <ArtifactOverviewDesktop
          {...{
            description,
            setBonus
          }}
        />
      </div>
    </>
  );
}
