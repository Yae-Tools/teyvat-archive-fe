"use client";

import { motion } from "framer-motion";

import { IRarityType } from "~/types/enka/enka.types";
import rarityColoFilter from "~/utils/thumbnailColorFilter";

type Props = {
  rarity: IRarityType;
  children: React.ReactNode;
};

export default function AbyssIconContainer({
  children,
  rarity
}: Readonly<Props>) {
  const {
    toColor: bgTo,
    fromColor: bgFrom,
    viaColor: bgVia
  } = rarityColoFilter[rarity];

  return (
    <motion.div
      layout
      animate={{
        opacity: 1
      }}
      whileHover={{
        scale: 1.05,
        transition: {
          duration: 0.2,
          ease: "easeInOut"
        }
      }}
      style={{
        backgroundImage: `linear-gradient(to top, ${bgFrom}, ${bgVia}, ${bgTo}`
      }}
      className="xs:size-[65px] m-1 flex size-[60px] flex-col items-center justify-center rounded-md sm:size-[70px] md:size-[75px]"
    >
      {children}
    </motion.div>
  );
}
