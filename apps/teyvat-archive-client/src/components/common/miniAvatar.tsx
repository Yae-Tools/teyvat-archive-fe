import Image from "next/image";
import Link from "next/link";

import { IElementType, IRarityType } from "~/types/enka/enka.types";
import { getElementTypeImage } from "~/utils/elementalImagePicker";

import MiniIconContainer from "../layout/container/miniIconContainer";

import OptimizedImage from "./basic/optimizedImage";

type Props = {
  char: {
    id: string;
    icon: string;
    skillDepotId: string;
    element: IElementType;
    rarity: IRarityType;
    nameId: string;
  };
};

export default function MiniAvatar({ char }: Readonly<Props>) {
  return (
    <Link href={`/characters/${char.nameId}-${char.id}-${char.skillDepotId}`}>
      <MiniIconContainer key={char.id} rarity={char.rarity} bgFlow="fromTo">
        <div className="relative flex flex-col items-center justify-end size-full">
          <div className="absolute top-0 left-0 mt-[-8px] ml-[-5px] flex items-center p-2 text-white">
            <Image
              src={getElementTypeImage(char.element)}
              alt={char.element}
              className="size-4 lg:size-5"
            />
          </div>
          <OptimizedImage
            src={char.icon}
            alt={char.skillDepotId}
            width={300}
            height={40}
            className="size-18"
          />
        </div>
      </MiniIconContainer>
    </Link>
  );
}
