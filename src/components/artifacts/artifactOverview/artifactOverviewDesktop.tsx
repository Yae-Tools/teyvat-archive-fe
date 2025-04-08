import OverviewItemHolder from "~/components/common/overviewItemHolder";
import { ISetBonus } from "~/types/enka/artifacts.types";

type Props = {
  setBonus: ISetBonus[];
};

export default function ArtifactOverviewDesktop({ setBonus }: Readonly<Props>) {
  return (
    <div className="flex h-full max-h-[400px] w-full flex-col items-start justify-start rounded-xl bg-black/40">
      <div className="my-2 flex h-full w-full items-start justify-start space-x-1 overflow-y-auto px-4">
        <OverviewItemHolder
          label={`${setBonus[0].needCount}-Piece Bonus`}
          value={setBonus[0].description}
          align="start"
          valueCustomClass="text-slate-300 xl:text-white leading-4 xl:leading-5 text-left mt-2"
        />
        {setBonus.length > 1 && (
          <OverviewItemHolder
            label={`${setBonus[1].needCount}-Piece Bonus`}
            value={setBonus[1].description}
            align="start"
            valueCustomClass="text-slate-300 xl:text-white leading-4 xl:leading-5 text-left mt-2"
          />
        )}
      </div>
    </div>
  );
}
