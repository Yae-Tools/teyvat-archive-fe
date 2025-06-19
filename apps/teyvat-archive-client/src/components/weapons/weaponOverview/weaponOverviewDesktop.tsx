"use client";

import Image from "next/image";
import { useState } from "react";

import DescriptionDesktop from "~/components/common/descriptionDesktop";
import OverviewItemHolder from "~/components/common/overviewItemHolder";
import { WEAPON_TYPES } from "~/data/teyvatData";
import { IEnkaStat, IWeaponType } from "~/types/enka/enka.types";
import { formatStatValue } from "~/utils/formatters/statValue.formatter";
import {
  getWeaponStatIcon,
  weaponTypeIconFilter
} from "~/utils/weaponIconFilter";

import OverviewLevelPicker from "./overviewLevelPicker";

type Props = {
  description: string;
  series: string;
  weaponType: IWeaponType;
  stats: {
    [key: number]: IEnkaStat[];
  };
  stars: number;
};

export default function WeaponOverviewDesktop({
  description,
  series,
  weaponType,
  stats,
  stars
}: Readonly<Props>) {
  const [selectedLevel, setSelectedLevel] = useState(1);

  return (
    <div className="absolute right-0 bottom-0 mx-3 flex h-max w-2/3 flex-col items-end justify-end rounded-xl bg-black/40">
      <div className="my-4 flex w-full items-start justify-end px-4">
        <DescriptionDesktop description={description} align="right" />
      </div>
      <div className="my-2 flex w-full space-x-1 px-4">
        <div className="flex h-full w-full items-start justify-end">
          <OverviewItemHolder
            label="Weapon Series"
            value={series}
            align="end"
          />
          <OverviewItemHolder
            label="Weapon Type"
            value={WEAPON_TYPES[weaponType]}
            align="end"
          >
            <Image
              src={weaponTypeIconFilter[weaponType]}
              alt={WEAPON_TYPES[weaponType]}
              className="size-10"
              style={{
                filter: "brightness(0) invert(1)"
              }}
            />
          </OverviewItemHolder>
        </div>
      </div>
      <div className="my-2 flex w-full space-x-1 px-4">
        <div className="flex h-full w-full items-start justify-end">
          <OverviewItemHolder
            label={stats[1][0].fightPropName}
            value={formatStatValue(
              stats[selectedLevel][0].multiplier,
              stats[selectedLevel][0].isPercent,
              0
            )}
            align="end"
          >
            <Image
              className="my-2 mr-2 size-5"
              src={getWeaponStatIcon(stats[1][0].fightProp)}
              alt={weaponType}
              style={{
                filter: "brightness(0) invert(1)"
              }}
            />
          </OverviewItemHolder>
          {stars > 2 && (
            <OverviewItemHolder
              label={stats[1][1].fightPropName}
              value={formatStatValue(
                stats[selectedLevel][1].multiplier,
                stats[selectedLevel][1].isPercent,
                0
              )}
              align="end"
            >
              <Image
                className="my-2 mr-2 size-5"
                src={getWeaponStatIcon(stats[1][1].fightProp)}
                alt={weaponType}
                style={{
                  filter: "brightness(0) invert(1)"
                }}
              />
            </OverviewItemHolder>
          )}
        </div>
      </div>
      <div className="my-2 flex w-full items-center justify-end px-6">
        <OverviewLevelPicker {...{ selectedLevel, setSelectedLevel, stars }} />
      </div>
    </div>
  );
}
