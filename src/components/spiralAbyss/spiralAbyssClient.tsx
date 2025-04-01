"use client";

import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

import {
  getAbyssBlessings,
  getAbyssData,
  getCharacters
} from "~/services/teyvatServer/teyvatArchive.service";
import { IBaseCharacter, ITopCharacter } from "~/types/enka/character.types";
import { IAbyssBlessing, IAbyssDataResponse } from "~/types/enka/enka.types";
import {
  getFinalizedAbyssBlessings,
  getTopTenCharacters
} from "~/utils/parsers/abyssDataParser";

import ToggleItem from "../common/basic/toggleItem";
import TitleHeading from "../common/typography/titleHeading";

import MostPickedCharacters from "./mostPickedCharacters";

export default function SpiralAbyssClient() {
  const { data: characterData } = useQuery<IBaseCharacter[]>({
    queryKey: ["characters"],
    queryFn: async () => {
      const data: IBaseCharacter[] = await getCharacters();
      return data;
    }
  });

  const { data: abyssData, isLoading: isAbyssLoading } =
    useQuery<IAbyssDataResponse>({
      queryKey: ["abyssData"],
      queryFn: async () => {
        const data: IAbyssDataResponse = await getAbyssData();
        return data;
      },
      refetchInterval: 1000 * 60 * 60 // 1 hour
    });

  const { data: blessingData } = useQuery<IAbyssBlessing[]>({
    queryKey: ["blessings"],
    queryFn: async () => {
      const data: IAbyssBlessing[] = await getAbyssBlessings();
      return data;
    },
    enabled: !!abyssData
  });

  const [isUsedByOwn, setIsUsedByOwn] = useState(false);
  const [top10Chars, setTop10Chars] = useState<ITopCharacter[]>([]);
  const [sortedAbyssBlessings, setSortedAbyssBlessings] = useState<
    IAbyssBlessing[]
  >([]);

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

  useEffect(() => {
    if (blessingData) {
      setSortedAbyssBlessings(getFinalizedAbyssBlessings(blessingData));
    }
  }, [blessingData]);

  return (
    <div className="flex w-full flex-col items-center justify-center space-y-4">
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
      <MostPickedCharacters {...{ top10Chars, isAbyssLoading }} />
      <div className="w-full">
        <TitleHeading
          text="Blessings of the Abyss"
          customClass="text-xl text-center w-full"
        />
        <div className="flex w-full flex-wrap items-center justify-center">
          {sortedAbyssBlessings.map((blessing) => (
            <div
              key={blessing.id}
              className="m-2 w-max items-center justify-center"
            >
              <p className="text-sm text-white">{blessing.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
