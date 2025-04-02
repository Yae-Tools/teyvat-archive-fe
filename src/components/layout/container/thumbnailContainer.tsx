"use client";

import { motion } from "framer-motion";

import { IRarityType } from "~/types/enka/enka.types";
import rarityColoFilter from "~/utils/thumbnailColorFilter";

type Props = {
  rarity: IRarityType;
  children: React.ReactNode;
  name: string;
};

export default function ThumbnaiContainer({
  children,
  rarity,
  name
}: Readonly<Props>) {
  const {
    toColor: bgTo,
    fromColor: bgFrom,
    viaColor: bgVia
  } = rarityColoFilter[rarity];

  return (
    <div className="mb-3 flex flex-col items-center">
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
        className="relative mx-3 w-[100px] overflow-hidden rounded-xl shadow-lg shadow-[#d6d6d6] drop-shadow-md lg:w-[130px] dark:shadow-[#323333]"
      >
        {children}
      </motion.div>

      <p className="my-1 w-[100px] text-center text-sm font-semibold">{name}</p>
    </div>
  );
}
