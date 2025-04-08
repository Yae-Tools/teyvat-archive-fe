"use client";

import { motion } from "framer-motion";
import { useAtomValue } from "jotai";
import { useMemo } from "react";

import {
  selectedWeaponRarityAtom,
  selectedWeaponSeriesAtom,
  selectedWeaponTypeAtom,
  weaponSearchAtom,
  weaponSortAscAtom,
  weaponSortingAtom
} from "~/atoms/teyvat/weapon.atom";
import { SORTING_OPTIONS } from "~/data/teyvatData";
import { IBasicWeapon } from "~/types/enka/weapon.types";
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
  const weaponSort = useAtomValue(weaponSortingAtom);
  const isSortAsc = useAtomValue(weaponSortAscAtom);

  const filteredWeapons = useMemo(() => {
    const searchLower = weaponSearch.toLowerCase();
    return weapons
      .filter(
        (weapon) =>
          weapon.name.toLowerCase().includes(searchLower) &&
          (!selectedWeaponType || weapon.weaponType === selectedWeaponType) &&
          (!selectedWeaponRarity ||
            rarityParser(weapon.stars) === selectedWeaponRarity) &&
          (selectedWeaponSeries === "all" ||
            weapon.series === selectedWeaponSeries)
      )
      .toSorted((a, b) => {
        if (weaponSort === SORTING_OPTIONS.Default) {
          return isSortAsc ? 0 : -1;
        }
        if (weaponSort === SORTING_OPTIONS.Name) {
          return isSortAsc
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name);
        }
        if (weaponSort === SORTING_OPTIONS.Rarity) {
          return isSortAsc ? a.stars - b.stars : b.stars - a.stars;
        }

        return 0;
      });
  }, [
    weapons,
    selectedWeaponType,
    selectedWeaponRarity,
    selectedWeaponSeries,
    weaponSearch,
    weaponSort,
    isSortAsc
  ]);

  return (
    <div
      className="flex w-full items-center justify-center overflow-hidden px-4 md:px-12"
      style={{ backgroundColor: "rgba(16, 24, 40, 0.3)" }}
    >
      <motion.div
        layout
        animate={{ opacity: 1 }}
        className="xs:grid-cols-3 mt-2 grid auto-cols-fr grid-cols-2 overflow-y-auto pt-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8"
      >
        {filteredWeapons.map((weapon) => (
          <WeaponThumbnail key={weapon.id} {...{ weapon }} />
        ))}
      </motion.div>
    </div>
  );
}
