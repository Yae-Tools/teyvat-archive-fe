import Image from "next/image";
import { equipIconArray } from "~/utils/arttifactEquipMapper";

type Props = {
  selectedArtifactEquipType: EquipType | null;
  setSelectedArtifactEquipType: (equip: EquipType) => void;
  selectedRarityFullSet: IEquipCollection[];
};

export default function ArtifactEquipPicker({
  selectedArtifactEquipType,
  setSelectedArtifactEquipType,
  selectedRarityFullSet,
}: Readonly<Props>) {
  return (
    <div className="w-full flex items-center justify-between md:justify-evenly lg:justify-end lg:space-x-6">
      {equipIconArray
        .filter((icon) =>
          selectedRarityFullSet?.find((item) => item.equipType === icon.id)
        )
        .map((icon, index) => (
          <button
            key={icon.id}
            onClick={() => setSelectedArtifactEquipType(icon.id)}
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
