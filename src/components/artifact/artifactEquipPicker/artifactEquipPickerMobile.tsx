import { useAtom } from "jotai";
import {
  selectedArtifactEquipTypeAtom,
  selectedRarityFullSetAtom,
} from "~/atoms/teyvat/artifact.atom";
import ArtifactEquipPicker from "./artifactEquipPicker";

type Props = {
  description: string;
};

export default function ArtifactEquipPickerMobile({
  description,
}: Readonly<Props>) {
  const [selectedArtifactEquipType, setSelectedArtifactEquipType] = useAtom(
    selectedArtifactEquipTypeAtom
  );

  const [selectedRarityFullSet] = useAtom(selectedRarityFullSetAtom);

  return (
    <div className="mt-2 bg-slate-200 dark:bg-slate-800 bg-opacity-50 flex flex-col items-center justify-center p-2 rounded-lg shadow-md w-full xl:hidden">
      <ArtifactEquipPicker
        {...{
          selectedArtifactEquipType,
          setSelectedArtifactEquipType,
          selectedRarityFullSet,
        }}
      />
      <p
        className="text-sm md:text-base lg:text-lg mt-4 italic w-full text-slate-400 text-center"
        style={{
          lineHeight: "1rem",
        }}
      >
        "{description}"
      </p>
    </div>
  );
}
