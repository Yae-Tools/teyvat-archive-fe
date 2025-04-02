import LazyBackgroundImage from "~/components/common/lazyBackgroundImage";
import { IElementType } from "~/types/enka/enka.types";
import { elementalBackgroundPicker } from "~/utils/elementalImagePicker";

import RarityStars from "../../common/rarityStars";

type Props = {
  name: string;
  stars: number;
  splashUrl: string;
  element: IElementType;
};

export default function CharacterProfileMobile({
  name,
  stars,
  splashUrl,
  element
}: Readonly<Props>) {
  return (
    <LazyBackgroundImage
      className="h-full w-full rounded-lg"
      img={elementalBackgroundPicker(element)}
    >
      <LazyBackgroundImage
        className="flex h-[420px] w-full flex-col items-start justify-end rounded-lg md:h-[520px]"
        style={{
          zoom: 0.9
        }}
        img={splashUrl}
      >
        <div className="flex w-full flex-col items-start pl-4">
          <RarityStars stars={stars} />
          <h2
            className="font-algoindeEnka pb-2 text-2xl text-white drop-shadow-2xl md:text-4xl"
            style={{
              textShadow: "2px 2px black"
            }}
          >
            {name}
          </h2>
        </div>
      </LazyBackgroundImage>
    </LazyBackgroundImage>
  );
}
