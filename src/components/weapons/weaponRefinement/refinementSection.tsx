import { motion } from "framer-motion";

import { IRefinement } from "~/types/enka/weapon.types";
import parseText from "~/utils/parsers/parseEnkaText";

type Props = {
  refinements: IRefinement[];
  refinementLevel: number;
  setRefinementLevel: (level: number) => void;
  align?: "start" | "center" | "end";
};

export default function RefinementSection({
  refinements,
  refinementLevel,
  setRefinementLevel,
  align = "start"
}: Readonly<Props>) {
  return (
    <div
      className={`flex w-full flex-col space-y-2 py-6 text-white items-${align} justify-center`}
    >
      <h5 className="text-lg font-semibold">{refinements[0].name}</h5>
      <div className={`flex w-full gap-3 justify-${align} items-center py-1`}>
        {Array.from({ length: 5 }, (_, i) => (
          <motion.button
            key={`refinement-${i}`}
            onClick={() => setRefinementLevel(i + 1)}
            className="h-2 w-12 rounded-sm"
            animate={{
              backgroundColor:
                i < refinementLevel
                  ? "var(--color-teal-600)"
                  : "var(--color-gray-300)"
            }}
            transition={{ duration: 0.5, delay: 0.05 * i }}
          />
        ))}
      </div>
      <div className={`flex w-full flex-col pb-2 items-${align}`}>
        <h6 className="text-md pb-2">Refinement {refinementLevel}</h6>
        <p
          dangerouslySetInnerHTML={{
            __html: parseText(refinements[refinementLevel - 1].description)
          }}
        />
      </div>
    </div>
  );
}
