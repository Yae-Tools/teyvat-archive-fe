import Image from "next/image";
import { Tooltip } from "react-tooltip";

import MoraImage from "~/assets/icons/Item_Mora.png";
import {
  ICharacterAscensionData,
  ITalentAscensionCost
} from "~/types/enka/character.types";
import rarityParser from "~/utils/parsers/rarityParser";

import MiniIconContainer from "../layout/container/miniIconContainer";

import OptimizedImage from "./basic/optimizedImage";

type Props = {
  ascensionData: ICharacterAscensionData[] | ITalentAscensionCost[];
  selectedLevel: number;
};

export default function AscensionDataHolder({
  ascensionData,
  selectedLevel
}: Readonly<Props>) {
  return (
    <div className="my-2 flex w-full flex-col items-center justify-center xl:my-4">
      {ascensionData[selectedLevel].items.length > 0 ? (
        <div>
          <div className="flex flex-wrap items-center justify-center">
            {ascensionData[selectedLevel].items.map((item) => (
              <MiniIconContainer
                key={item.materialId}
                rarity={rarityParser(item.materialRarity)}
                bgFlow="fromTo"
              >
                <div
                  className="flex h-full w-full flex-col items-center justify-end"
                  data-tooltip-id="asc-item-tooltip"
                  data-tooltip-content={`${item.materialName}`}
                >
                  <OptimizedImage
                    className="size-10 lg:size-12 xl:size-14"
                    src={item.materialIcon}
                    alt={item.materialName}
                    width={100}
                    height={100}
                  />
                  <p className="font-enka w-full rounded-b-md bg-slate-200 pt-0.5 text-center text-xs font-semibold text-slate-800">
                    {item.count}
                  </p>
                </div>
                <Tooltip
                  id="asc-item-tooltip"
                  className="font-enka"
                  style={{
                    fontSize: "0.8rem"
                  }}
                />
              </MiniIconContainer>
            ))}
          </div>
          <div className="font-enka text-md flex items-center justify-center">
            <Image src={MoraImage} alt="Mora" width={45} height={45} />
            {ascensionData[selectedLevel].coins}
          </div>
        </div>
      ) : (
        <div className="font-enka text-md flex items-center justify-center">
          No Upgrade Cost
        </div>
      )}
    </div>
  );
}
