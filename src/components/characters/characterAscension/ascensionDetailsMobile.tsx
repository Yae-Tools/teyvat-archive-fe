import Image from "next/image";
import { useState } from "react";

import ARIcon from "~/assets/icons/Item_Adventure_EXP.png";
import AscensionDataHolder from "~/components/common/ascensionDataHolder";
import AttributeMobileContainer from "~/components/layout/container/attributeMobileContainer";
import { ICharacterAscensionData } from "~/types/enka/character.types";

import ItemLevelPicker from "../characterTalents/itemLevelPicker";

import AscensionStatTable from "./ascensionStatTable";

type Props = {
  ascensionData: ICharacterAscensionData[];
};

export default function AscensionDetailsMobile({
  ascensionData
}: Readonly<Props>) {
  const [selectedLevel, setSelectedLevel] = useState(0);

  return (
    <AttributeMobileContainer title="Ascension">
      <div className="flex w-full flex-col items-start justify-center">
        <div className="w-full">
          <div className="flex w-full items-center justify-between">
            <h5 className="text-lg font-semibold">
              Ascension Level {selectedLevel}
            </h5>
            <div className="flex items-center space-x-2">
              <Image src={ARIcon} alt="AR" width={40} height={40} />
              <p className="font-enka text-lg">
                {ascensionData[selectedLevel].requiredAdventureRank}
              </p>
            </div>
          </div>
          <ItemLevelPicker
            {...{
              selectedLevel,
              setSelectedLevel,
              noOfLevels: ascensionData.length - 1,
              isZeroEnabled: true,
              selectorWidth: 8
            }}
          />
          <div className="my-2">
            <p className="font-enka">
              Max Level Unlock:{" "}
              <span>{ascensionData[selectedLevel].unlockMaxLevel}</span>
            </p>
          </div>
          <div className="my-4 w-full rounded-lg bg-slate-700 p-2">
            <AscensionDataHolder
              {...{
                ascensionData: ascensionData,
                selectedLevel: selectedLevel
              }}
            />
            <AscensionStatTable {...{ ascensionData, selectedLevel }} />
          </div>
        </div>
      </div>
    </AttributeMobileContainer>
  );
}
