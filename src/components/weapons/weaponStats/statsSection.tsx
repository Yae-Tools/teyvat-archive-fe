import { useEffect, useState } from "react";

import { IEnkaStat } from "~/types/enka/enka.types";
import { formatStatValue } from "~/utils/formatters/statValue.formatter";
import squashWeaponLevels from "~/utils/squashWeaponLevels";

type Props = {
  stars: number;
  stats: {
    [key: string]: IEnkaStat[];
  };
};

export default function StatsSection({ stars, stats }: Readonly<Props>) {
  const [squashedView, setSquashedView] = useState(false);
  const [mutatedStats, setMutatedStats] = useState(stats);

  useEffect(() => {
    if (squashedView) {
      const squashedLevels = squashWeaponLevels(
        stats,
        stats[1][1].fightProp as keyof IEnkaStat
      );

      //only display values from keys of squashedLevels
      const squashedStats = Object.fromEntries(
        Object.entries(stats).filter(([key]) => squashedLevels.includes(key))
      );

      setMutatedStats(squashedStats);
    } else {
      setMutatedStats(stats);
    }
  }, [squashedView]);

  return (
    <div className="w-full space-y-2 py-6 text-white">
      {stars > 2 && (
        <div className="flex items-center justify-between">
          <div className="mb-2 flex w-full items-center justify-start space-x-4">
            <label className="inline-flex items-center" htmlFor="tealCheckBox">
              <input
                id="tealCheckBox"
                type="checkbox"
                className="size-5 accent-teal-600"
                checked={squashedView}
                onChange={() => setSquashedView(!squashedView)}
                disabled={stars < 3}
              />
              <span className="font-enka ml-2">Squash Stats</span>
            </label>
          </div>
        </div>
      )}

      <table className="w-full border-collapse overflow-hidden rounded-lg">
        <thead>
          <tr className="bg-gray-600">
            <th className="border-r border-b border-gray-700 p-3 text-center text-sm font-semibold">
              Lv.
            </th>
            <th className="border-r border-b border-gray-700 p-3 text-center text-sm font-semibold">
              {mutatedStats[1][0].fightPropName}
            </th>
            {stars > 2 && (
              <th className="border-r border-b border-gray-700 p-3 text-center text-sm font-semibold">
                {mutatedStats[1][1].fightPropName}
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {Object.keys(mutatedStats).map((key) => {
            const level = Number(key);
            const stat = mutatedStats[level];
            return (
              <tr
                key={key}
                className="transition-colors odd:bg-gray-900 even:bg-gray-950 hover:bg-gray-800"
              >
                <td className="border-r border-gray-700 p-3 text-right">
                  {level}
                </td>
                <td className="border-r border-gray-700 p-3 text-right">
                  {formatStatValue(stat[0].multiplier, stat[0].isPercent, 0)}
                </td>

                {stars > 2 && (
                  <td className="border-gray-700 p-3 text-right">
                    {formatStatValue(stat[1].multiplier, stat[1].isPercent, 1)}
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
