"use client";

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useEffect, useState } from "react";

import {
  getAbyssData,
  getCharacters
} from "~/services/teyvatServer/teyvatArchive.service";
import { IBaseCharacter, ITopCharacter } from "~/types/enka/character.types";
import { IAbyssDataResponse, IRarityType } from "~/types/enka/enka.types";
import { getTopTenCharacters } from "~/utils/parsers/abyssDataParser";

import ToggleItem from "../common/basic/toggleItem";
import TitleHeading from "../common/typography/titleHeading";
import AbyssIconContainer from "../layout/container/abyssIconContainer";

export default function SpiralAbyssClient() {
  const { data: characterData } = useQuery<IBaseCharacter[]>({
    queryKey: ["characters"],
    queryFn: async () => {
      const data: IBaseCharacter[] = await getCharacters();
      return data;
    }
  });

  const { data: abyssData } = useQuery<IAbyssDataResponse>({
    queryKey: ["abyssData"],
    queryFn: async () => {
      const data: IAbyssDataResponse = await getAbyssData();
      return data;
    },
    refetchInterval: 1000 * 60 * 60 // 1 hour
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
    <div className="flex w-full flex-col items-center justify-center">
      <div className="mb-2 flex w-full flex-col items-center justify-between md:flex-row">
        <div className="w-full md:w-1/5"></div>
        <TitleHeading
          text="Top 10 Used Characters"
          customClass="text-xl text-center w-full md:w-3/5"
        />
        <div className="w-full md:w-1/5">
          <div className="flex w-full items-center justify-end">
            <label htmlFor="usedByOwn" className="mr-2 text-sm text-white">
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
        className="flex w-full flex-wrap items-center justify-center overflow-auto"
        style={{ maxHeight: "300px" }}
      >
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
