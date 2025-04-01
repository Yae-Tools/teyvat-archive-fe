"use client";

import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

import { RARITY_TYPE_KEYS } from "~/data/teyvatData";
import AbyssIconContainer from "../layout/container/abyssIconContainer";
import TitleHeading from "../common/typography/titleHeading";
import {
  IAbyssCharacterResponse,
  IAbyssDataResponse,
} from "~/types/enka/enka.types";
import { getAbyssData } from "~/services/teyvatServer/teyvatArchive.service";
import { getTopTenCharacters } from "~/utils/parsers/abyssDataParser";

export default function SpiralAbyssClient() {
  const { data: abyssData } = useQuery<IAbyssDataResponse>({
    queryKey: ["abyssData"],
    queryFn: async () => {
      const data: IAbyssDataResponse = await getAbyssData();
      return data;
    },
    refetchInterval: 1000 * 60 * 60, // 1 hour
  });

  const [isUsedByOwn, setIsUsedByOwn] = useState(false);
  const [top10Chars, setTop10Chars] = useState<IAbyssCharacterResponse[]>([]);

  useEffect(() => {
    if (abyssData) {
      const top10 = getTopTenCharacters(isUsedByOwn, abyssData.characters);
      setTop10Chars(top10);
    }
  }, [abyssData, isUsedByOwn]);

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <TitleHeading
        text="Top 10 Used Characters"
        customClass="text-xl text-center "
      />
      <div
        className="flex flex-wrap justify-center items-center w-full overflow-auto"
        style={{ maxHeight: "300px" }}
      >
        {top10Chars.map((char, index) => {
          return (
            <AbyssIconContainer
              key={char.id}
              rarity={RARITY_TYPE_KEYS.QUALITY_ORANGE}
            >
              {char.id}
            </AbyssIconContainer>
          );
        })}
      </div>
    </div>
  );
}
