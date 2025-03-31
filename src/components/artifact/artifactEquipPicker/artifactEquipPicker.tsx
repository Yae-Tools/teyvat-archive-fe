import Image from "next/image";
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
  selectedRarityFullSet,
}: Readonly<Props>) {
  console.log("EquipIconArray", equipIconArray);
  return (
    <div className="w-full flex items-center justify-between md:justify-evenly lg:justify-end lg:space-x-6">
      {equipIconArray
        .filter((icon) =>
          selectedRarityFullSet?.find((item) => item.equipType === icon.id)
        )
        .map((icon, index) => (
          <button
            key={icon.id}
            onClick={() => setSelectedArtifactEquipType(icon.id as IEquipType)}
            className={`${
              selectedArtifactEquipType === icon.id
                ? "bg-teal-600"
                : "bg-[rgba(0,0,0,0.3)]"
            } rounded-lg p-1 cursor-pointer`}
          >
            <Image
              src={icon.url}
              alt={`Equip Icon ${index + 1}`}
              className="size-10"
            />
          </button>
        ))}
    </div>
  );
}
