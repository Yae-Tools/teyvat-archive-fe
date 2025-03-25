"use client";

import { motion } from "framer-motion";
import { useAtomValue } from "jotai";
import { useEffect, useState } from "react";
import {
  selectedWeaponRarityAtom,
  selectedWeaponSeriesAtom,
  selectedWeaponTypeAtom,
  weaponSearchAtom,
} from "~/atoms/teyvat/weapon.atom";
import rarityParser from "~/utils/parsers/rarityParser";
import WeaponThumbnail from "./weaponThumbnail";

type Props = {
  weapons: IBasicWeapon[];
};

export default function AllWeaponShowcase({ weapons }: Readonly<Props>) {
  const selectedWeaponType = useAtomValue(selectedWeaponTypeAtom);
  const selectedWeaponRarity = useAtomValue(selectedWeaponRarityAtom);
  const selectedWeaponSeries = useAtomValue(selectedWeaponSeriesAtom);
  const weaponSearch = useAtomValue(weaponSearchAtom);

  const [filteredWeapons, setFilteredWeapons] =
    useState<IBasicWeapon[]>(weapons);

  useEffect(() => {
    const tempFilteredWeapons = weapons.filter(
      (weapon) =>
        weapon.name.toLowerCase().includes(weaponSearch.toLowerCase()) &&
        (selectedWeaponType === "all" ||
          weapon.weaponType === selectedWeaponType) &&
        (selectedWeaponRarity === "all" ||
          rarityParser(weapon.stars) === selectedWeaponRarity) &&
        (selectedWeaponSeries === "all" ||
          weapon.series === selectedWeaponSeries)
    );

    setFilteredWeapons(
      tempFilteredWeapons.toSorted((a, b) => a.stars - b.stars)
    );
  }, [
    weapons,
    selectedWeaponType,
    selectedWeaponRarity,
    selectedWeaponSeries,
    weaponSearch,
  ]);

  return (
    <div className="overflow-hidden w-full items-center justify-center flex px-4 md:px-12">
      <motion.div
        layout
        animate={{ opacity: 1 }}
        className="mt-2 grid auto-cols-fr grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 overflow-y-auto"
      >
        {filteredWeapons.map((weapon) => (
          <WeaponThumbnail key={weapon.id} {...{ weapon }} />
        ))}
      </motion.div>
    </div>
  );
}
