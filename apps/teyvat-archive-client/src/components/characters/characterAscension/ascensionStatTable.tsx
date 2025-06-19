import { ICharacterAscensionData } from "~/types/enka/character.types";
import { formatStatValue } from "~/utils/formatters/statValue.formatter";

type Props = {
  ascensionData: ICharacterAscensionData[];
  selectedLevel: number;
};

export default function AscensionStatTable({
  ascensionData,
  selectedLevel
}: Readonly<Props>) {
  return (
    <table className="my-2 w-full xl:my-4">
      <thead>
        <tr>
          <th className="border border-slate-400 px-4 py-2">Stat</th>
          <th className="border border-slate-400 px-4 py-2">Added Value</th>
        </tr>
      </thead>
      <tbody>
        {ascensionData[selectedLevel].addProps.map((stat) => (
          <tr key={stat.fightPropName}>
            <td className="font-enka border border-slate-400 px-4 py-2">
              {stat.fightPropName}
            </td>
            <td className="font-enka border border-slate-400 px-4 py-2">
              {formatStatValue(stat.multiplier, stat.isPercent, 1)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
