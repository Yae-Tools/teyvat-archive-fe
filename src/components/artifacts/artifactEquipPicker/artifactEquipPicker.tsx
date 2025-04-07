import Image from "next/image";
import { Tooltip } from "react-tooltip";

import { EQUIP_TYPES } from "~/data/teyvatData";
import { IEquipCollection } from "~/types/enka/artifacts.types";
import { IEquipType } from "~/types/enka/enka.types";
import { equipIconArray } from "~/utils/arttifactEquipMapper";

type Props = {
  selectedArtifactEquipType: IEquipType | null;
  setSelectedArtifactEquipType: (equip: IEquipType) => void;
  selectedRarityFullSet: IEquipCollection[];
};

export default function ArtifactEquipPicker({
  selectedArtifactEquipType,
  setSelectedArtifactEquipType,
  selectedRarityFullSet
}: Readonly<Props>) {
  return (
    <div className="flex w-full items-center justify-between md:justify-evenly lg:justify-end lg:space-x-6">
      {equipIconArray
        .filter((icon) =>
          selectedRarityFullSet?.find((item) => item.equipType === icon.id)
        )
        .map((icon, index) => (
          <button
            key={icon.id}
            data-tooltip-id="equip-tooltip"
            data-tooltip-content={EQUIP_TYPES[icon.id as IEquipType]}
            onClick={() => setSelectedArtifactEquipType(icon.id as IEquipType)}
            className={`${
              selectedArtifactEquipType === icon.id
                ? "bg-teal-600"
                : "bg-[rgba(0,0,0,0.3)]"
            } cursor-pointer rounded-lg p-1`}
          >
            <Image
              src={icon.url}
              alt={`Equip Icon ${index + 1}`}
              className="size-10"
            />
            <Tooltip
              id="equip-tooltip"
              className="font-enka"
              hidden={selectedArtifactEquipType === icon.id}
            />
          </button>
        ))}
    </div>
  );
}
