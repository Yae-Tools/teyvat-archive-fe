import { motion } from "motion/react";
import Link from "next/link";

import { IBaseArtifactSet } from "~/types/enka/artifacts.types";
import rarityParser from "~/utils/parsers/rarityParser";

import ThumbnaiContainer from "../layout/container/thumbnailContainer";

type Props = {
  artifactSet: IBaseArtifactSet;
};

export default function ArtifactThumbnail({
  artifactSet: artifact
}: Readonly<Props>) {
  const { id, name, icon, highestRarity } = artifact;
  return (
    <ThumbnaiContainer
      {...{
        name,
        rarity: rarityParser(highestRarity)
      }}
    >
      <Link href={`/artifacts/${id}`}>
        <div className="mt-1 flex w-full flex-col items-center">
          <div className="flex h-3/4 items-end justify-center">
            <motion.img
              src={icon}
              alt={id + " icon"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>
      </Link>
    </ThumbnaiContainer>
  );
}
