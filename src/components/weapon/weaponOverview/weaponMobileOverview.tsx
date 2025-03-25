import { useState } from "react";
import OverviewItemHolder from "~/components/common/overviewItemHolder";
import { formatWeaponStatValue } from "~/utils/formatters/weaponStatValue.formatter";
import { weaponTypeParser } from "~/utils/parsers/weaponDataParser";
import {
  getWeaponStatIcon,
  weaponTypeIconFilter,
} from "~/utils/weaponIconFilter";
import OverviewLevelPicker from "./overviewLevelPicker";
import Image from "next/image";

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
  weaponType,
}: Readonly<Props>) {
  const [selectedLevel, setSelectedLevel] = useState(1);

  return (
    <div className="mt-2 bg-slate-200 dark:bg-slate-800 bg-opacity-50 flex flex-col items-center justify-center p-4 rounded-lg shadow-md w-full xl:hidden">
      <p
        className="text-sm md:text-base lg:text-lg mb-4 italic w-full text-slate-400"
        style={{
          lineHeight: "1rem",
        }}
      >
        &quot;{description}&quot;
      </p>
      <div className="flex w-full justify-between items-start">
        <OverviewItemHolder
          label="Weapon Type"
          value={weaponTypeParser(weaponType) as string}
        >
          <Image
            className="size-6 mr-2"
            src={weaponTypeIconFilter[weaponType]}
            alt={weaponType}
            style={{
              filter: "brightness(0) invert(1)",
            }}
          />
        </OverviewItemHolder>
        <OverviewItemHolder
          label={stats[1][0].fightPropName}
          align="end"
          value={formatWeaponStatValue(
            stats[selectedLevel][0].multiplier,
            false,
            0
          )}
        >
          <Image
            className="size-4.5 mr-2"
            src={getWeaponStatIcon(stats[selectedLevel][0].fightProp)}
            alt={weaponType}
            style={{
              filter: "brightness(0) invert(1)",
            }}
          />
        </OverviewItemHolder>
      </div>
      <div className="flex w-full justify-between items-end mt-4">
        {stars > 2 && (
          <OverviewItemHolder
            label={stats[1][1].fightPropName}
            value={formatWeaponStatValue(
              stats[selectedLevel][1].multiplier,
              stats[selectedLevel][1].isPercent,
              1
            )}
          >
            <Image
              className="size-4.5 mr-2"
              src={getWeaponStatIcon(stats[selectedLevel][1].fightProp)}
              alt={weaponType}
              style={{
                filter: "brightness(0) invert(1)",
              }}
            />
          </OverviewItemHolder>
        )}
        <OverviewLevelPicker {...{ selectedLevel, setSelectedLevel, stars }} />
      </div>
    </div>
  );
}
