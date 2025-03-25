"use client";

import { useState } from "react";
import Image from "next/image";
import DescriptionDesktop from "~/components/common/descriptionDesktop";
import OverviewItemHolder from "~/components/common/overviewItemHolder";
import { formatWeaponStatValue } from "~/utils/formatters/weaponStatValue.formatter";
import { weaponTypeParser } from "~/utils/parsers/weaponDataParser";
import {
  getWeaponStatIcon,
  weaponTypeIconFilter,
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
  stars,
}: Readonly<Props>) {
  const [selectedLevel, setSelectedLevel] = useState(1);

  return (
    <div className="w-2/3 flex flex-col items-end justify-end mx-3 h-max rounded-xl bg-black/40 absolute right-0 bottom-0">
      <div className="w-full items-start flex justify-end my-4 px-4">
        <DescriptionDesktop description={description} align="right" />
      </div>
      <div className="flex space-x-1 w-full px-4 my-2">
        <div className="w-full h-full flex items-start justify-end">
          <OverviewItemHolder
            label="Weapon Series"
            value={series}
            align="end"
          />
          <OverviewItemHolder
            label="Weapon Type"
            value={weaponTypeParser(weaponType) as string}
            align="end"
          >
            <Image
              src={weaponTypeIconFilter[weaponType]}
              alt={weaponTypeParser(weaponType) as string}
              className="size-10"
              style={{
                filter: "brightness(0) invert(1)",
              }}
            />
          </OverviewItemHolder>
        </div>
      </div>
      <div className="flex space-x-1 w-full px-4 my-2">
        <div className="w-full h-full flex items-start justify-end">
          <OverviewItemHolder
            label={stats[1][0].fightPropName}
            value={formatWeaponStatValue(
              stats[selectedLevel][0].multiplier,
              stats[selectedLevel][0].isPercent,
              0
            )}
            align="end"
          >
            <Image
              className="size-5 my-2 mr-2"
              src={getWeaponStatIcon(stats[1][0].fightProp)}
              alt={weaponType}
              style={{
                filter: "brightness(0) invert(1)",
              }}
            />
          </OverviewItemHolder>
          {stars > 2 && (
            <OverviewItemHolder
              label={stats[1][1].fightPropName}
              value={formatWeaponStatValue(
                stats[selectedLevel][1].multiplier,
                stats[selectedLevel][1].isPercent,
                0
              )}
              align="end"
            >
              <Image
                className="size-5 my-2 mr-2"
                src={getWeaponStatIcon(stats[1][1].fightProp)}
                alt={weaponType}
                style={{
                  filter: "brightness(0) invert(1)",
                }}
              />
            </OverviewItemHolder>
          )}
        </div>
      </div>
      <div className="flex items-center justify-end w-full px-6 my-2">
        <OverviewLevelPicker {...{ selectedLevel, setSelectedLevel, stars }} />
      </div>
    </div>
  );
}
