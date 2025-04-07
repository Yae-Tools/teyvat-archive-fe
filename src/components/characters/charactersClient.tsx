"use client";

import { useAtom } from "jotai";
import { useEffect, useState } from "react";

import {
  useFilterTravelersAtom,
  useSelectedTravelerAtom
} from "~/atoms/feature.atoms";
import filterCharacters from "~/features/characterDisplayOptimizer";
import { useAllCharacterData } from "~/hooks/useCharacterData";
import { IBaseCharacter } from "~/types/enka/character.types";

import PageTitle from "../common/typography/pageTitle";
import ShowcaseFilterContainer from "../layout/container/showcaseFilterContainer";

import AllCharacterShowcase from "./allCharacterShowcase";
import CharacterFilterSection from "./filtering/characterFilterSection";

function CharactersClient() {
  const { data: characters } = useAllCharacterData();
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
        <div className="mt-3 flex w-full items-center justify-center xl:mb-4">
          <PageTitle title="Teyvat Characters" />
        </div>
        <CharacterFilterSection />
      </ShowcaseFilterContainer>
      <AllCharacterShowcase characters={filteredCharacters} />
    </>
  );
}

export default CharactersClient;
