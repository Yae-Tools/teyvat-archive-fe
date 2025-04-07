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
        <h4 className="w-full">Talent Stats (Level {selectedLevel})</h4>
        <ItemLevelPicker
          {...{
            selectedLevel,
            setSelectedLevel,
            noOfLevels: selectedTalent.stats[0].values.length,
            selectorWidth: 5
          }}
        />
      </div>
      <div>
        <AscensionDataHolder
          {...{
            ascensionData: selectedTalent.ascensionCost,
            selectedLevel: selectedLevel - 1
          }}
        />
        <table className="my-2 w-full text-[16px] xl:my-4">
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
