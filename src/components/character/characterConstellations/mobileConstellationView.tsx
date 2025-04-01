import Image from "next/image";

import { IConstellation } from "~/types/enka/character.types";

import AttributeMobileContainer from "../../layout/container/attributeMobileContainer";
import DataItemCard from "../dataItemCard";

type Props = {
  constellations: IConstellation[];
  constellation: string;
  chapterIcon: string;
};

export default function MobileConstellationView({
  constellations,
  constellation,
  chapterIcon
}: Readonly<Props>) {
  return (
    <AttributeMobileContainer title={constellation}>
      <div className="flex w-full items-center justify-center">
        <Image
          src={chapterIcon}
          alt={constellation}
          className="size-48"
          width={1000}
          height={1000}
        />
      </div>
      <div className="flex w-full flex-col items-start justify-center">
        {constellations.map((con, i) => (
          <DataItemCard item={con} key={con.id} index={i} />
        ))}
      </div>
    </AttributeMobileContainer>
  );
}
