"use client";

import { useAtom } from "jotai";
import { useMemo } from "react";

import {
  useFilterTravelersAtom,
  useSelectedTravelerAtom
} from "~/atoms/feature.atoms";
import filterCharacters from "~/features/characterDisplayOptimizer";
import { useAllCharacterData } from "~/hooks/character/useCharacterData";

import PageTitle from "../common/typography/pageTitle";
import ShowcaseFilterContainer from "../layout/container/showcaseFilterContainer";

import AllCharacterShowcase from "./allCharacterShowcase";
import CharacterFilterSection from "./filtering/characterFilterSection";

function CharactersClient() {
  const { data: characters } = useAllCharacterData();
  const [useFilterTravelers] = useAtom(useFilterTravelersAtom);
  const [useSelectedTraveler] = useAtom(useSelectedTravelerAtom);

  const filteredCharacters = useMemo(() => {
    if (useFilterTravelers) {
      return filterCharacters(characters, useSelectedTraveler);
    }
    return characters;
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
