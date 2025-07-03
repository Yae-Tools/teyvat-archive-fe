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
  stars
}: Readonly<Props>) {
  return (
    <LazyBackgroundImage
      className="rounded-lg size-full"
      img={rarityBgPicker(stars)}
    >
      <LazyBackgroundImage
        className="flex h-[420px] w-full flex-col items-start justify-end rounded-lg md:h-[520px]"
        img={splashImage}
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
