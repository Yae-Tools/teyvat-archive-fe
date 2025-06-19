import LazyBackgroundImage from "~/components/common/lazyBackgroundImage";
import RarityStars from "~/components/common/rarityStars";
import { EQUIP_TYPES } from "~/data/teyvatData";
import { IEquipCollection } from "~/types/enka/artifacts.types";
import rarityBgPicker from "~/utils/rarityBgPicker";

type Props = {
  highestRarity: number;
  selectedEquipItem: IEquipCollection;
  setName: string;
};

export default function ArtifactProfileMobile({
  highestRarity,
  selectedEquipItem,
  setName
}: Readonly<Props>) {
  return (
    <LazyBackgroundImage
      className="h-full w-full rounded-lg"
      img={rarityBgPicker(highestRarity)}
    >
      <h1
        className="p-4 text-left text-3xl text-white md:text-5xl"
        style={{
          textShadow: "2px 2px black"
        }}
      >
        {setName}
      </h1>
      <LazyBackgroundImage
        className="flex h-[420px] w-full flex-col items-start justify-end rounded-lg md:h-[520px]"
        img={selectedEquipItem.icon}
      >
        <div className="font-algoindeEnka flex w-full flex-col items-start pl-4">
          <RarityStars stars={highestRarity} />
          <h2
            className="text-2xl text-white drop-shadow-2xl md:text-4xl"
            style={{
              textShadow: "2px 2px black"
            }}
          >
            {selectedEquipItem.name}
          </h2>
          <h6
            className="pb-2 text-white drop-shadow-2xl"
            style={{
              textShadow: "1px 1px black"
            }}
          >
            {EQUIP_TYPES[selectedEquipItem.equipType]}
          </h6>
        </div>
      </LazyBackgroundImage>
    </LazyBackgroundImage>
  );
}
