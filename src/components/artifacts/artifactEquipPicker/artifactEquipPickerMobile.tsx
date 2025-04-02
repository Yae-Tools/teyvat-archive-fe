import { useAtom } from "jotai";

import {
  selectedArtifactEquipTypeAtom,
  selectedRarityFullSetAtom
} from "~/atoms/teyvat/artifact.atom";

import ArtifactEquipPicker from "./artifactEquipPicker";

type Props = {
  description: string;
};

export default function ArtifactEquipPickerMobile({
  description
}: Readonly<Props>) {
  const [selectedArtifactEquipType, setSelectedArtifactEquipType] = useAtom(
    selectedArtifactEquipTypeAtom
  );

  const [selectedRarityFullSet] = useAtom(selectedRarityFullSetAtom);

  return (
    <div className="bg-opacity-50 mt-2 flex w-full flex-col items-center justify-center rounded-lg bg-slate-200 p-2 shadow-md xl:hidden dark:bg-slate-800">
      <ArtifactEquipPicker
        {...{
          selectedArtifactEquipType,
          setSelectedArtifactEquipType,
          selectedRarityFullSet
        }}
      />
      <p
        className="mt-4 w-full text-center text-sm text-slate-400 italic md:text-base lg:text-lg"
        style={{
          lineHeight: "1rem"
        }}
      >
        "{description}"
      </p>
    </div>
  );
}
