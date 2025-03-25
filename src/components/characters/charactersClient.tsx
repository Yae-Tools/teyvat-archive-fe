"use client";

import { useAtom } from "jotai";
import PageTitle from "../common/typography/pageTitle";
import ShowcaseFilterContainer from "../layout/container/showcaseFilterContainer";
import AllCharacterShowcase from "./allCharacterShowcase";
import CharacterFilterSection from "./filtering/characterFilterSection";
import {
  useFilterTravelersAtom,
  useSelectedTravelerAtom,
} from "~/atoms/feature.atoms";
import { useEffect, useState } from "react";
import filterCharacters from "~/features/characterDisplayOptimizer";

type Props = {
  characters: IBaseCharacter[];
};

function CharactersClient({ characters }: Readonly<Props>) {
  const [useFilterTravelers] = useAtom(useFilterTravelersAtom);
  const [useSelectedTraveler] = useAtom(useSelectedTravelerAtom);

  const [filteredCharacters, setFilteredCharacters] =
    useState<IBaseCharacter[]>(characters);

  useEffect(() => {
    if (useFilterTravelers) {
      setFilteredCharacters(filterCharacters(characters, useSelectedTraveler));
    } else {
      setFilteredCharacters(characters);
    }
  }, [characters, useFilterTravelers, useSelectedTraveler]);

  return (
    <>
      <ShowcaseFilterContainer isSticky>
        <div className="w-full flex items-center justify-center xl:mb-4 mt-3">
          <PageTitle title="Teyvat Characters" />
        </div>
        <CharacterFilterSection />
      </ShowcaseFilterContainer>
      <AllCharacterShowcase characters={filteredCharacters} />
    </>
  );
}

export default CharactersClient;
