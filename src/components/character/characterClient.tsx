"use client";

import { ICharacter } from "~/types/enka/character.types";

import CharacterDesktopView from "./characterDesktopView";
import CharacterMobileView from "./characterMobileView";

type Props = {
  character: ICharacter;
};

export default function CharacterClient({ character }: Readonly<Props>) {
  return (
    <>
      <CharacterMobileView characterData={character} />
      <CharacterDesktopView characterData={character} />
    </>
  );
}
