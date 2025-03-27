"use client";

import ThumbnaiContainer from "../layout/container/thumbnailContainer";
import rarityParser from "~/utils/parsers/rarityParser";
import Image from "next/image";

type Props = {
  item: ICalendarBannerWeapon | ICalendarBannerCharacter;
};

export default function BannerItemThumbnail({ item }: Readonly<Props>) {
  console.log("item", item);
  return (
    <ThumbnaiContainer
      name={item.name}
      rarity={rarityParser(Number(item.rarity))}
    >
      {/* <Link
        href={`/character/${character.nameId}-${character.enkaId}-${character.skillDepotId}`}
      > */}
      <div className="w-full flex flex-col items-center mt-1">
        <div className="h-3/4 flex items-end justify-center">
          <Image src={item.icon} alt={item.id} width={300} height={50} />
        </div>
      </div>
      {/* </Link> */}
      <div className="absolute top-0 left-0 flex items-center text-white p-2 ml-[-5px] mt-[-5px]">
        {/* <Image
          src={getElementTypeImage(character.element)}
          alt={character.element}
          className="size-4 lg:size-5"
        /> */}
      </div>
    </ThumbnaiContainer>
  );
}
