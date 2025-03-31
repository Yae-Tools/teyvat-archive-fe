"use client";

import CharacterMobileView from "./characterMobileView";
import CharacterDesktopView from "./characterDesktopView";
import { ICharacter } from "~/types/enka/character.types";

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
