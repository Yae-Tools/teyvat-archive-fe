import Link from "next/link";
import Image from "next/image";
import ThumbnaiContainer from "../layout/container/thumbnailContainer";
import { getElementTypeImage } from "~/utils/elementalImagePicker";
import { IBaseCharacter } from "~/types/enka/character.types";

type Props = {
  character: IBaseCharacter;
};

export default function CharacterThumbnail({ character }: Readonly<Props>) {
  return (
    <ThumbnaiContainer name={character.name} rarity={character.rarity}>
      <Link
        href={`/character/${character.nameId}-${character.enkaId}-${character.skillDepotId}`}
      >
        <div className="w-full flex flex-col items-center mt-1">
          <div className="h-3/4 flex items-end justify-center">
            <Image
              src={character.iconUrl}
              alt={character.id}
              width={300}
              height={50}
            />
          </div>
        </div>
      </Link>
      <div className="absolute top-0 left-0 flex items-center text-white p-2 ml-[-5px] mt-[-5px]">
        <Image
          src={getElementTypeImage(character.element)}
          alt={character.element}
          className="size-4 lg:size-5"
        />
      </div>
    </ThumbnaiContainer>
  );
}
