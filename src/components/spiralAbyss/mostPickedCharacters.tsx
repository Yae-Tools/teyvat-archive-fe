import Image from "next/image";

import { ITopCharacter } from "~/types/enka/character.types";
import { IRarityType } from "~/types/enka/enka.types";
import { formatStatValue } from "~/utils/formatters/statValue.formatter";

import AbyssIconLoader from "../common/loaderHandlers/abyssIconLoader";
import TitleHeading from "../common/typography/titleHeading";
import AbyssIconContainer from "../layout/container/abyssIconContainer";

import AbyssItemToggle from "./abysItemToggle";

type Props = {
  top10Chars: ITopCharacter[];
  isAbyssLoading: boolean;
  isUsedByOwn: boolean;
  setIsUsedByOwn: (value: boolean) => void;
};

export default function MostPickedCharacters({
  top10Chars,
  isAbyssLoading,
  isUsedByOwn,
  setIsUsedByOwn
}: Readonly<Props>) {
  return (
    <div className="flex w-full max-w-[1000px] flex-col items-center justify-center">
      <div className="mb-2 flex w-full flex-col items-center justify-between md:flex-row">
        <div className="w-full md:w-1/5"></div>
        <TitleHeading
          text="Top 10 Used Characters"
          customClass="text-xl text-center w-full md:w-3/5"
        />
        <AbyssItemToggle {...{ value:isUsedByOwn, setValue:setIsUsedByOwn, label:"Used by Own", id:"usedByOwn" }} />
      </div>

      <div
        className="flex w-full flex-wrap items-center justify-center overflow-auto"
        style={{ maxHeight: "300px" }}
      >
        {isAbyssLoading &&
          Array.from({ length: 10 }, (_, index) => (
            <AbyssIconLoader key={index} />
          ))}
        {top10Chars.length === 10 &&
          top10Chars.map((char) => {
            return (
              <AbyssIconContainer
                key={char.id}
                rarity={char.rarity as IRarityType}
              >
                <div className="flex h-full w-full flex-col items-center justify-end">
                  <Image
                    src={char.icon as string}
                    alt={char.id}
                    width={300}
                    height={40}
                    className="size-16"
                  />

                  <p className="mt-1 text-xs font-semibold text-slate-100">
                    {formatStatValue(char.useRate * 100, true, 2)}
                  </p>
                </div>
              </AbyssIconContainer>
            );
          })}
      </div>
    </div>
  );
}
