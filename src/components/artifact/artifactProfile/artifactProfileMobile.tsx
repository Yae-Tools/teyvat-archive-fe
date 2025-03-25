import LazyBackgroundImage from "~/components/common/lazyBackgroundImage";
import RarityStars from "~/components/common/rarityStars";
import { getEquipTitle } from "~/utils/arttifactEquipMapper";
import rarityBgPicker from "~/utils/rarityBgPicker";

type Props = {
  highestRarity: number;
  selectedEquipItem: IEquipCollection;
  setName: string;
};

export default function ArtifactProfileMobile({
  highestRarity,
  selectedEquipItem,
  setName,
}: Readonly<Props>) {
  return (
    <LazyBackgroundImage
      className="h-full w-full rounded-lg"
      img={rarityBgPicker(highestRarity)}
    >
      <h1
        className="text-3xl md:text-5xl text-white text-left p-4"
        style={{
          textShadow: "2px 2px black",
        }}
      >
        {setName}
      </h1>
      <LazyBackgroundImage
        className="h-[420px] md:h-[520px] w-full flex flex-col items-start justify-end rounded-lg"
        img={selectedEquipItem.icon}
      >
        <div className="flex flex-col items-start w-full pl-4 font-algoindeEnka">
          <RarityStars stars={highestRarity} />
          <h2
            className="text-2xl md:text-4xl drop-shadow-2xl text-white"
            style={{
              textShadow: "2px 2px black",
            }}
          >
            {selectedEquipItem.name}
          </h2>
          <h6
            className="pb-2 drop-shadow-2xl text-white"
            style={{
              textShadow: "1px 1px black",
            }}
          >
            {getEquipTitle(selectedEquipItem.equipType)}
          </h6>
        </div>
      </LazyBackgroundImage>
    </LazyBackgroundImage>
  );
}
