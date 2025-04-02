"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { IBasicWeapon } from "~/types/enka/weapon.types";
import rarityParser from "~/utils/parsers/rarityParser";
import { weaponTypeIconFilter } from "~/utils/weaponIconFilter";

import ThumbnaiContainer from "../layout/container/thumbnailContainer";

type Props = {
  weapon: IBasicWeapon;
};

export default function WeaponThumbnail({ weapon }: Readonly<Props>) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <ThumbnaiContainer name={weapon.name} rarity={rarityParser(weapon.stars)}>
      <Link href={`/weapons/${weapon.id}-${weapon.enkaId}`}>
        <button
          className="mt-1 flex w-full flex-col items-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
        >
          <div className="flex h-3/4 items-end justify-center">
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
      <div className="absolute top-0 left-0 mt-[-5px] ml-[-5px] flex items-center p-2 text-white">
        <Image
          src={weaponTypeIconFilter[weapon.weaponType]}
          alt={weapon.weaponType}
          className="size-5 lg:size-7"
          style={{ filter: "brightness(0) invert(1)" }}
        />
      </div>
    </ThumbnaiContainer>
  );
}
