import { motion } from "framer-motion";
import { useState } from "react";

import { ITalent } from "~/types/enka/character.types";

type Props = {
  selectedTalent: ITalent;
};

export default function TalentStats({ selectedTalent }: Readonly<Props>) {
  const [selectedLevel, setSelectedLevel] = useState(1);
  return (
    <div className="mt-6 w-full rounded-lg border p-2 xl:p-4">
      <div className="flex w-full flex-col items-center justify-center xl:flex-row">
        <h4 className="w-full">Talent Stats (Level {selectedLevel})</h4>
        <div className={`flex w-full items-center justify-end gap-3 py-1`}>
          {Array.from(
            { length: selectedTalent.stats[0].values.length },
            (_, i) => (
              <motion.button
                key={`level-${i}`}
                onClick={() => setSelectedLevel(i + 1)}
                className="h-2 w-5 cursor-pointer rounded-sm"
                animate={{
                  backgroundColor:
                    i < selectedLevel
                      ? "var(--color-teal-600)"
                      : "var(--color-gray-300)"
                }}
                transition={{ duration: 0.5, delay: 0.05 * i }}
              />
            )
          )}
        </div>
      </div>
      <div>
        <table className="my-2 w-full xl:my-4">
          <thead>
            <tr>
              <th className="border border-gray-400 px-4 py-2">Stat</th>
              <th className="border border-gray-400 px-4 py-2">Value</th>
            </tr>
          </thead>
          <tbody>
            {selectedTalent.stats.map((stat) => (
              <tr key={stat.name}>
                <td className="border border-gray-400 px-4 py-2">
                  {stat.name}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {stat.values[selectedLevel - 1].value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
