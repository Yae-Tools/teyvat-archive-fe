import { motion } from "framer-motion";
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
  align = "start",
}: Readonly<Props>) {
  return (
    <div
      className={`py-6 space-y-2 text-white w-full flex flex-col items-${align} justify-center`}
    >
      <h5 className="text-lg font-semibold">{refinements[0].name}</h5>
      <div className={`flex gap-3 w-full justify-${align} items-center py-1`}>
        {Array.from({ length: 5 }, (_, i) => (
          <motion.button
            key={`refinement-${i}`}
            onClick={() => setRefinementLevel(i + 1)}
            className="w-12 h-2 rounded-sm"
            animate={{
              backgroundColor:
                i < refinementLevel
                  ? "var(--color-teal-600)"
                  : "var(--color-gray-300)",
            }}
            transition={{ duration: 0.5, delay: 0.05 * i }}
          />
        ))}
      </div>
      <div className={`w-full pb-2 flex flex-col items-${align}`}>
        <h6 className="text-md pb-2">Refinement {refinementLevel}</h6>
        <p
          dangerouslySetInnerHTML={{
            __html: parseText(refinements[refinementLevel - 1].description),
          }}
        />
      </div>
    </div>
  );
}
