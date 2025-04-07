import Image from "next/image";
import { useState } from "react";

import MoraImage from "~/assets/icons/Item_Mora.png";
import MiniIconContainer from "~/components/layout/container/miniIconContainer";
import { ITalent } from "~/types/enka/character.types";
import rarityParser from "~/utils/parsers/rarityParser";

import TalentLevelPicker from "./talentLevelPicker";

type Props = {
  selectedTalent: ITalent;
};

export default function TalentStats({ selectedTalent }: Readonly<Props>) {
  const [selectedLevel, setSelectedLevel] = useState(1);

  return (
    <div className="mt-6 w-full rounded-lg border-2 border-slate-500 p-2 xl:p-4">
      <div className="flex w-full flex-col items-center justify-center xl:flex-row">
        <h4 className="w-full">Talent Stats (Level {selectedLevel})</h4>
        <TalentLevelPicker
          {...{
            selectedLevel,
            setSelectedLevel,
            noOfLevels: selectedTalent.stats[0].values.length
          }}
        />
      </div>
      <div>
        <div className="my-2 flex w-full flex-col items-center justify-center xl:my-4">
          {selectedTalent.ascensionCost[selectedLevel - 1].items.length > 0 ? (
            <div>
              <div className="flex flex-wrap items-center justify-center">
                {selectedTalent.ascensionCost[selectedLevel - 1].items.map(
                  (item) => (
                    <MiniIconContainer
                      key={item.materialId}
                      rarity={rarityParser(item.materialRarity)}
                      bgFlow="fromTo"
                    >
                      <div className="flex h-full w-full flex-col items-center justify-end">
                        <Image
                          src={item.materialIcon}
                          alt={item.materialName}
                          width={100}
                          height={100}
                        />
                        <p className="font-enka w-full rounded-b-md bg-slate-200 text-center text-xs font-semibold text-slate-800">
                          {item.count}
                        </p>
                      </div>
                    </MiniIconContainer>
                  )
                )}
              </div>
              <div className="font-enka text-md flex items-center justify-center">
                <Image src={MoraImage} alt="Mora" width={45} height={45} />
                {selectedTalent.ascensionCost[selectedLevel - 1].coins}
              </div>
            </div>
          ) : (
            <div className="font-enka text-md flex items-center justify-center">
              No Upgrade Cost
            </div>
          )}
        </div>
        <table className="my-2 w-full xl:my-4">
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
