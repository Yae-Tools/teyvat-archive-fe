import LazyBackgroundImage from "~/components/common/lazyBackgroundImage";
import { elementalBackgroundPicker } from "~/utils/elementalImagePicker";
import RarityStars from "../../common/rarityStars";
import { IElementType } from "~/types/enka/enka.types";

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
  element,
}: Readonly<Props>) {
  return (
    <LazyBackgroundImage
      className="h-full w-full rounded-lg"
      img={elementalBackgroundPicker(element)}
    >
      <LazyBackgroundImage
        className="h-[420px] md:h-[520px] w-full flex flex-col items-start justify-end rounded-lg"
        style={{
          zoom: 0.9,
        }}
        img={splashUrl}
      >
        <div className="flex flex-col items-start w-full pl-4">
          <RarityStars stars={stars} />
          <h2
            className="font-algoindeEnka pb-2 text-2xl md:text-4xl drop-shadow-2xl text-white"
            style={{
              textShadow: "2px 2px black",
            }}
          >
            {name}
          </h2>
        </div>
      </LazyBackgroundImage>
    </LazyBackgroundImage>
  );
}
