import { useAtom } from "jotai";
import DescriptionDesktop from "~/components/common/descriptionDesktop";
import OverviewItemHolder from "~/components/common/overviewItemHolder";
import {
  selectedArtifactEquipTypeAtom,
  selectedRarityFullSetAtom,
} from "~/atoms/teyvat/artifact.atom";
import ArtifactEquipPicker from "../artifactEquipPicker/artifactEquipPicker";
import { ISetBonus } from "~/types/enka/artifacts.types";

type Props = {
  description: string;
  setBonus: ISetBonus[];
};

export default function ArtifactOverviewDesktop({
  description,
  setBonus,
}: Readonly<Props>) {
  const [selectedArtifactEquipType, setSelectedArtifactEquipType] = useAtom(
    selectedArtifactEquipTypeAtom
  );
  const [selectedRarityFullSet] = useAtom(selectedRarityFullSetAtom);

  return (
    <div className="w-3/5 flex flex-col items-end justify-end mx-3 h-max rounded-xl bg-black/40 absolute right-0 bottom-0">
      <div className="w-full items-start flex justify-end my-4 px-4">
        <DescriptionDesktop description={description} align="right" />
      </div>
      <div className="flex space-x-1 w-full px-4 my-2">
        <div className="w-full h-full flex items-start justify-end max-h-[220px] overflow-y-auto">
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

      <div className="flex items-center justify-end w-full px-6 my-2">
        {selectedRarityFullSet.length > 0 && (
          <ArtifactEquipPicker
            {...{
              selectedArtifactEquipType,
              setSelectedArtifactEquipType,
              selectedRarityFullSet,
            }}
          />
        )}
      </div>
    </div>
  );
}
