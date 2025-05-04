import React from "react";
import MiniIconContainer from "../layout/container/miniIconContainer";
import Image from "next/image";
import { getElementTypeImage } from "~/utils/elementalImagePicker";
import { IElementType, IRarityType } from "~/types/enka/enka.types";

type Props = {
  char: {
    id: string;
    icon: string;
    element: IElementType;
    rarity: IRarityType;
  }
};

export default function MiniAvatar({ char }: Readonly<Props>) {
  return (
    <MiniIconContainer key={char.id} rarity={char.rarity} bgFlow="fromTo">
      <div className="relative flex h-full w-full flex-col items-center justify-end">
        <div className="absolute top-0 left-0 mt-[-8px] ml-[-5px] flex items-center p-2 text-white">
          <Image
            src={getElementTypeImage(char.element)}
            alt={char.element}
            className="size-4 lg:size-5"
          />
        </div>
        <Image
          src={char.icon}
          alt={char.id}
          width={300}
          height={40}
          className="size-18"
        />
      </div>
    </MiniIconContainer>
  );
}
