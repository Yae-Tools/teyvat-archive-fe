"use client";

import { motion } from "motion/react";
import { useMemo } from "react";

import { SORTING_OPTIONS } from "~/data/teyvatData";
import { useInfiniteScroll } from "~/hooks/useInfiniteScroll";
import useWeaponFilters from "~/hooks/weapon/useWeaponFilter";
import { IBasicWeapon } from "~/types/enka/weapon.types";
import rarityParser from "~/utils/parsers/rarityParser";

import GridContainer, {
  itemAnimation
} from "../layout/container/gridContainer";

import WeaponThumbnail from "./weaponThumbnail";

type Props = {
  weapons: IBasicWeapon[];
};

export default function AllWeaponShowcase({ weapons }: Readonly<Props>) {
  const { weaponType, weaponRarity, weaponSeries, isAsc, search, sort } =
    useWeaponFilters();

  const filteredWeapons = useMemo(() => {
    const searchLower = search.toLowerCase();
    return weapons.filter(
      (weapon) =>
        weapon.name.toLowerCase().includes(searchLower) &&
        (!weaponType || weapon.weaponType === weaponType) &&
        (!weaponRarity || rarityParser(weapon.stars) === weaponRarity) &&
        (weaponSeries === "all" || weapon.series === weaponSeries)
    );
  }, [weapons, weaponType, weaponRarity, weaponSeries, search]);

  const filteredAndSortedWeapons = useMemo(() => {
    return filteredWeapons.toSorted((a, b) => {
      if (sort === SORTING_OPTIONS.Default) {
        return isAsc ? 0 : -1;
      }
      if (sort === SORTING_OPTIONS.Name) {
        return isAsc
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      }
      if (sort === SORTING_OPTIONS.Rarity) {
        return isAsc ? a.stars - b.stars : b.stars - a.stars;
      }
      return 0;
    });
  }, [filteredWeapons, sort, isAsc]);

  const { hasMore, loaderRef, visibleItems } = useInfiniteScroll(
    filteredAndSortedWeapons,
    24,
    12
  );

  return (
    <GridContainer {...{ hasMore, loaderRef }}>
      {visibleItems.map((weapon) => (
        <motion.div
          key={weapon.id}
          variants={itemAnimation}
          className="flex items-start justify-center size-full"
        >
          <WeaponThumbnail weapon={weapon} />
        </motion.div>
      ))}
    </GridContainer>
  );
}
