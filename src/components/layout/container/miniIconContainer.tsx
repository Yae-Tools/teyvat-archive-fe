"use client";

import { motion } from "motion/react";

import { IRarityType } from "~/types/enka/enka.types";
import rarityColoFilter from "~/utils/thumbnailColorFilter";

type Props = {
  rarity: IRarityType;
  children: React.ReactNode;
  bgFlow?: "fromTo" | "toFrom";
};

export default function MiniIconContainer({
  children,
  rarity,
  bgFlow = "toFrom"
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
        backgroundImage: `linear-gradient(to top, ${
          bgFlow === "fromTo" ? bgFrom : bgTo
        }, ${bgVia}, ${bgFlow === "fromTo" ? bgTo : bgFrom}`
      }}
      className="m-2 flex h-[60px] w-[55px] flex-col items-center justify-center rounded-md lg:h-[70px] lg:w-[65px]"
    >
      {children}
    </motion.div>
  );
}
