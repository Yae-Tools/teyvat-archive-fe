"use client";

import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { CalendarIcon, SwordsIcon } from "lucide-react";
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
  getTopTenCharacters,
  isCurrentBlessing
} from "~/utils/parsers/abyssDataParser";
import parseText from "~/utils/parsers/parseEnkaText";

import TitleHeading from "../common/typography/titleHeading";

import MostPickedCharacters from "./mostPickedCharacters";
import USedByOwnToggle from "./usedByOwnToggle";

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
      <div className="flex w-full flex-col items-center justify-center">
        <div className="mb-2 flex w-full flex-col items-center justify-between md:flex-row">
          <div className="w-full md:w-1/5"></div>
          <TitleHeading
            text="Top 10 Used Characters"
            customClass="text-xl text-center w-full md:w-3/5"
          />
          <USedByOwnToggle {...{ isUsedByOwn, setIsUsedByOwn }} />
        </div>
        <MostPickedCharacters {...{ top10Chars, isAbyssLoading }} />
      </div>

      <div className="flex w-full flex-col items-center justify-center">
        <TitleHeading
          text="Blessings of the Abyss"
          customClass="text-xl text-center w-full"
        />
        <div className="mt-4 grid w-full grid-cols-1 justify-items-center gap-4 md:grid-cols-3 lg:grid-cols-4">
          {sortedAbyssBlessings.map((blessing) => (
            <article
              className="max-w-[300px] rounded-lg bg-slate-700"
              key={blessing.id}
            >
              <div className="flex items-start p-4">
                <div>
                  <h3 className="mb-2 font-medium sm:text-lg">
                    {blessing.name}
                  </h3>
                  <div
                    className="text-sm text-white"
                    dangerouslySetInnerHTML={{
                      __html: parseText(blessing.description)
                    }}
                  />
                  <div className="mt-2 sm:flex sm:items-center sm:gap-2">
                    <div className="flex items-center gap-1 text-gray-500">
                      <CalendarIcon className="size-4 text-slate-200" />
                      <p className="text-xs text-slate-200">
                        {format(blessing.begin, "do 'of' MMM yyyy")}
                      </p>
                    </div>
                    <span className="hidden sm:block" aria-hidden="true">
                      ·
                    </span>
                    <div className="flex items-center gap-1 text-gray-500">
                      <p className="text-xs text-slate-200">
                        {format(blessing.end, "do 'of' MMM yyyy")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {isCurrentBlessing(blessing.begin, blessing.end) && (
                <div className="flex justify-end">
                  <strong className="-me-[2px] -mb-[2px] inline-flex items-center gap-1 rounded-ss-xl rounded-ee-xl bg-teal-600 px-3 py-1.5 text-white">
                    <SwordsIcon className="size-4" />
                    <span className="text-sm font-medium">
                      Current Blessing
                    </span>
                  </strong>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
