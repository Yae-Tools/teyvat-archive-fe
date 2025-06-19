"use client";
import { useMediaQuery } from "react-responsive";

import { ICharacter } from "~/types/enka/character.types";

import CharacterDesktopView from "./characterDesktopView";
import CharacterMobileView from "./characterMobileView";

type Props = {
  character: ICharacter;
};

export default function CharacterClient({ character }: Readonly<Props>) {
  const isXl = useMediaQuery({ minWidth: 1280 });

  return (
    <>
      {isXl ? (
        <CharacterDesktopView characterData={character} />
      ) : (
        <CharacterMobileView characterData={character} />
      )}
    </>
  );
}
