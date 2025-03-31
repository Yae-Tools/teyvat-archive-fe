import RarityStars from "~/components/common/rarityStars";
import TitleHeading from "~/components/common/typography/titleHeading";
import ArtifactOverviewDesktop from "../artifactOverview/artifactOverviewDesktop";
import { IEquipCollection, ISetBonus } from "~/types/enka/artifacts.types";
import { EQUIP_TYPES } from "~/data/teyvatData";

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
  setBonus,
}: Readonly<Props>) {
  const { name, icon, description } = selectedEquipItem;
  return (
    <>
      <div className="flex w-full m-2 items-start justify-between">
        <div className="w-1/3 flex flex-col items-start mx-2">
          <div className="flex items-center justify-start space-x-1 mb-2">
            <RarityStars stars={highestRarity} />
          </div>
        </div>
        <div className="w-2/3 flex flex-col items-end mx-2 justify-end">
          <div className="flex w-full items-center justify-end space-x-1 mb-2 text-right">
            <TitleHeading text={name} />
          </div>
          <div className="flex w-full items-center justify-end space-x-1 mb-2 text-right">
            <h6 className="text-white text-right text-xl">
              {setName} | {EQUIP_TYPES[selectedEquipItem.equipType]}
            </h6>
          </div>
        </div>
      </div>
      <div className="w-full flex mx-2 relative h-full">
        <div className="w-1/3 flex flex-col items-start mx-2 ">
          <img
            src={icon}
            alt={name}
            className="absolute bottom-10 left-20"
            style={{
              height: "100%",
              scale: "1",
            }}
          />
        </div>
        <ArtifactOverviewDesktop
          {...{
            description,
            setBonus,
          }}
        />
      </div>
    </>
  );
}
