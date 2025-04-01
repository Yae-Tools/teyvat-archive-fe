"use client";

import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import Image from "next/image";

import AbyssIconContainer from "../layout/container/abyssIconContainer";
import TitleHeading from "../common/typography/titleHeading";
import { IAbyssDataResponse, IRarityType } from "~/types/enka/enka.types";
import {
  getAbyssData,
  getCharacters,
} from "~/services/teyvatServer/teyvatArchive.service";
import { getTopTenCharacters } from "~/utils/parsers/abyssDataParser";
import { IBaseCharacter, ITopCharacter } from "~/types/enka/character.types";
import ToggleItem from "../common/basic/toggleItem";

export default function SpiralAbyssClient() {
  const { data: characterData } = useQuery<IBaseCharacter[]>({
    queryKey: ["characters"],
    queryFn: async () => {
      const data: IBaseCharacter[] = await getCharacters();
      return data;
    },
  });

  const { data: abyssData } = useQuery<IAbyssDataResponse>({
    queryKey: ["abyssData"],
    queryFn: async () => {
      const data: IAbyssDataResponse = await getAbyssData();
      return data;
    },
    refetchInterval: 1000 * 60 * 60, // 1 hour
  });

  const [isUsedByOwn, setIsUsedByOwn] = useState(false);
  const [top10Chars, setTop10Chars] = useState<ITopCharacter[]>([]);

  useEffect(() => {
    if (abyssData && characterData) {
      const top10 = getTopTenCharacters(
        isUsedByOwn,
        abyssData.characters,
        characterData
      );
      setTop10Chars(top10);
    }
  }, [abyssData, isUsedByOwn, characterData]);

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-full flex flex-col md:flex-row items-center justify-between mb-2">
        <div className="w-full md:w-1/5"></div>
        <TitleHeading
          text="Top 10 Used Characters"
          customClass="text-xl text-center w-full md:w-3/5"
        />
        <div className="w-full md:w-1/5">
          <div className="w-full flex items-center justify-end">
            <label htmlFor="usedByOwn" className="text-white mr-2 text-sm">
              Used By Own
            </label>
            <ToggleItem
              id="usedByOwn"
              value={isUsedByOwn}
              setValue={setIsUsedByOwn}
            />
          </div>
        </div>
      </div>
      <div
        className="flex flex-wrap justify-center items-center w-full overflow-auto"
        style={{ maxHeight: "300px" }}
      >
        {top10Chars.length === 10 &&
          top10Chars.map((char) => {
            return (
              <AbyssIconContainer
                key={char.id}
                rarity={char.rarity as IRarityType}
              >
                <div className=" w-full h-full flex flex-col items-center justify-end">
                  <Image
                    src={char.icon as string}
                    alt={char.id}
                    width={300}
                    height={40}
                    className="size-18"
                  />
                </div>
              </AbyssIconContainer>
            );
          })}
      </div>
    </div>
  );
}
