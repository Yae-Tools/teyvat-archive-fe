import { useAtom } from "jotai";

import {
  selectedArtifactEquipTypeAtom,
  selectedRarityFullSetAtom
} from "~/atoms/teyvat/artifact.atom";
import DescriptionDesktop from "~/components/common/descriptionDesktop";
import OverviewItemHolder from "~/components/common/overviewItemHolder";
import { ISetBonus } from "~/types/enka/artifacts.types";

import ArtifactEquipPicker from "../artifactEquipPicker/artifactEquipPicker";

type Props = {
  description: string;
  setBonus: ISetBonus[];
};

export default function ArtifactOverviewDesktop({
  description,
  setBonus
}: Readonly<Props>) {
  const [selectedArtifactEquipType, setSelectedArtifactEquipType] = useAtom(
    selectedArtifactEquipTypeAtom
  );
  const [selectedRarityFullSet] = useAtom(selectedRarityFullSetAtom);

  return (
    <div className="absolute right-0 bottom-0 mx-3 flex h-max w-3/5 flex-col items-end justify-end rounded-xl bg-black/40">
      <div className="my-4 flex w-full items-start justify-end px-4">
        <DescriptionDesktop description={description} align="right" />
      </div>
      <div className="my-2 flex w-full space-x-1 px-4">
        <div className="flex h-full max-h-[220px] w-full items-start justify-end overflow-y-auto">
          <OverviewItemHolder
            label={`${setBonus[0].needCount}-Piece Bonus`}
            value={setBonus[0].description}
            align="end"
            valueCustomClass="text-slate-300 xl:text-white xl:text-xl font-semibold leading-4 xl:leading-5 text-right"
          />
          {setBonus.length > 1 && (
            <OverviewItemHolder
              label={`${setBonus[1].needCount}-Piece Bonus`}
              value={setBonus[1].description}
              align="end"
              valueCustomClass="text-slate-300 xl:text-white xl:text-lg font-semibold leading-4 xl:leading-5 text-right"
            />
          )}
        </div>
      </div>

      <div className="my-2 flex w-full items-center justify-end px-6">
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
  );
}
