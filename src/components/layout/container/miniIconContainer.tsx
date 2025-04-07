"use client";

import { motion } from "framer-motion";

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
      className="xs:w-[65px] xs:h-[75px] m-2 flex h-[70px] w-[60px] flex-col items-center justify-center rounded-md sm:h-[80px] sm:w-[70px] md:h-[85px] md:w-[75px]"
    >
      {children}
    </motion.div>
  );
}
