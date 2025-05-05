import { useState } from "react";

import AscensionDataHolder from "~/components/common/ascensionDataHolder";
import { ITalent } from "~/types/enka/character.types";

import ItemLevelPicker from "./itemLevelPicker";

type Props = {
  selectedTalent: ITalent;
};

export default function TalentStats({ selectedTalent }: Readonly<Props>) {
  const [selectedLevel, setSelectedLevel] = useState(1);

  return (
    <div className="mt-6 w-full rounded-lg border-2 border-slate-500 p-2 xl:p-4">
      <div className="flex w-full flex-col items-center justify-center xl:flex-row">
        <div className="flex w-full items-center justify-between space-x-2 xl:justify-start">
          <h4 className="w-max">Talent Stats</h4>
          <p className="font-enka rounded-full bg-black/40 px-3 py-1 text-base text-yellow-400">
            Level {selectedLevel}
          </p>
        </div>
        <div className="my-2 w-full xl:my-0 xl:w-2/3">
          <ItemLevelPicker
            {...{
              selectedLevel,
              setSelectedLevel,
              noOfLevels: selectedTalent.stats[0].values.length
            }}
          />
        </div>
      </div>

      <div>
        <AscensionDataHolder
          {...{
            ascensionData: selectedTalent.ascensionCost,
            selectedLevel: selectedLevel - 1
          }}
        />
        <table className="my-2 w-full text-[12px] lg:text-[14px] xl:my-4 xl:text-[16px]">
          <thead>
            <tr>
              <th className="border border-slate-400 px-4 py-2">Stat</th>
              <th className="border border-slate-400 px-4 py-2">Value</th>
            </tr>
          </thead>
          <tbody>
            {selectedTalent.stats.map((stat) => (
              <tr key={stat.name}>
                <td className="font-enka border border-slate-400 px-4 py-2">
                  {stat.name}
                </td>
                <td className="font-enka border border-slate-400 px-4 py-2">
                  {stat.values[selectedLevel - 1].value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
