import Image from "next/image";
import Link from "next/link";

import { IBaseCharacter } from "~/types/enka/character.types";
import { getElementTypeImage } from "~/utils/elementalImagePicker";

import OptimizedImage from "../common/basic/optimizedImage";
import ThumbnaiContainer from "../layout/container/thumbnailContainer";

type Props = {
  character: IBaseCharacter;
};

export default function CharacterThumbnail({ character }: Readonly<Props>) {
  return (
    <ThumbnaiContainer name={character.name} rarity={character.rarity}>
      <Link
        href={`/characters/${character.nameId}-${character.enkaId}-${character.skillDepotId}`}
      >
        <div className="mt-1 flex w-full flex-col items-center">
          <div className="flex h-3/4 items-end justify-center">
            <OptimizedImage
              src={character.iconUrl}
              alt={character.id}
              width={300}
              height={50}
            />
          </div>
        </div>
      </Link>
      <div className="absolute top-0 left-0 mt-[-5px] ml-[-5px] flex items-center p-2 text-white">
        <Image
          src={getElementTypeImage(character.element)}
          alt={character.element}
          className="size-4 lg:size-5"
        />
      </div>
    </ThumbnaiContainer>
  );
}
