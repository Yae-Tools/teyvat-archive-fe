import Image from "next/image";
import { useState } from "react";

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
  stars: number;
  description: string;
  stats: {
    [key: string]: IEnkaStat[];
  };
  weaponType: IWeaponType;
};

export default function WeaponMobileOverview({
  stars,
  description,
  stats,
  weaponType
}: Readonly<Props>) {
  const [selectedLevel, setSelectedLevel] = useState(1);

  return (
    <div className="bg-opacity-50 mt-2 flex w-full flex-col items-center justify-center rounded-lg bg-slate-200 p-4 shadow-md xl:hidden dark:bg-slate-800">
      <p
        className="mb-4 w-full text-sm text-slate-400 italic md:text-base lg:text-lg"
        style={{
          lineHeight: "1rem"
        }}
      >
        &quot;{description}&quot;
      </p>
      <div className="flex w-full items-start justify-between">
        <OverviewItemHolder
          label="Weapon Type"
          value={WEAPON_TYPES[weaponType]}
        >
          <Image
            className="mr-2 size-6"
            src={weaponTypeIconFilter[weaponType]}
            alt={weaponType}
            style={{
              filter: "brightness(0) invert(1)"
            }}
          />
        </OverviewItemHolder>
        <OverviewItemHolder
          label={stats[1][0].fightPropName}
          align="end"
          value={formatStatValue(stats[selectedLevel][0].multiplier, false, 0)}
        >
          <Image
            className="mr-2 size-4.5"
            src={getWeaponStatIcon(stats[selectedLevel][0].fightProp)}
            alt={weaponType}
            style={{
              filter: "brightness(0) invert(1)"
            }}
          />
        </OverviewItemHolder>
      </div>
      <div className="mt-4 flex w-full items-end justify-between">
        {stars > 2 && (
          <OverviewItemHolder
            label={stats[1][1].fightPropName}
            value={formatStatValue(
              stats[selectedLevel][1].multiplier,
              stats[selectedLevel][1].isPercent,
              1
            )}
          >
            <Image
              className="mr-2 size-4.5"
              src={getWeaponStatIcon(stats[selectedLevel][1].fightProp)}
              alt={weaponType}
              style={{
                filter: "brightness(0) invert(1)"
              }}
            />
          </OverviewItemHolder>
        )}
        <OverviewLevelPicker {...{ selectedLevel, setSelectedLevel, stars }} />
      </div>
    </div>
  );
}
