import LazyBackgroundImage from "~/components/common/lazyBackgroundImage";
import RarityStars from "~/components/common/rarityStars";
import rarityBgPicker from "~/utils/rarityBgPicker";

type Props = {
  splashImage: string;
  name: string;
  stars: number;
};

export default function WeaponProfileMobile({
  splashImage,
  name,
  stars,
}: Readonly<Props>) {
  return (
    <LazyBackgroundImage
      className="h-full w-full rounded-lg"
      img={rarityBgPicker(stars)}
    >
      <LazyBackgroundImage
        className="h-[420px] md:h-[520px] w-full flex flex-col items-start justify-end rounded-lg"
        img={splashImage}
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
