"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import rarityParser from "~/utils/parsers/rarityParser";
import ThumbnaiContainer from "../layout/container/thumbnailContainer";
import Link from "next/link";
import Image from "next/image";
import { weaponTypeIconFilter } from "~/utils/weaponIconFilter";

type Props = {
  weapon: IBasicWeapon;
};

export default function WeaponThumbnail({ weapon }: Readonly<Props>) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <ThumbnaiContainer name={weapon.name} rarity={rarityParser(weapon.stars)}>
      <Link href={`/weapon/${weapon.id}-${weapon.enkaId}`}>
        <button
          className="w-full flex flex-col items-center mt-1"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
        >
          <div className="h-3/4 flex items-end justify-center">
            <motion.img
              src={isHovered ? weapon.awakenIcon : weapon.icon}
              alt={weapon.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
          </div>
        </button>
      </Link>
      <div className="absolute top-0 left-0 flex items-center text-white p-2 ml-[-5px] mt-[-5px]">
        <Image
          src={weaponTypeIconFilter[weapon.weaponType]}
          alt={weapon.weaponType}
          className="size-4 lg:size-5"
        />
      </div>
    </ThumbnaiContainer>
  );
}
