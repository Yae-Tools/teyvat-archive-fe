import { motion } from "framer-motion";

type Props = {
  setSelectedLevel: (level: number) => void;
  selectedLevel: number;
  noOfLevels: number;
  selectorWidth?: number;
  align?: "start" | "center" | "end";
  isZeroEnabled?: boolean;
};

export default function ItemLevelPicker({
  selectedLevel,
  setSelectedLevel,
  noOfLevels,
  selectorWidth = 6,
  align = "start",
  isZeroEnabled = false
}: Readonly<Props>) {
  return (
    <div
      className={`flex w-full items-center justify-${align} gap-1 py-1 lg:gap-2 xl:gap-3`}
    >
      {Array.from({ length: noOfLevels }, (_, i) =>
        isZeroEnabled ? (
          <motion.button
            key={`level-${i}`}
            onClick={() => {
              if (i === 0 && selectedLevel === 0) {
                setSelectedLevel(1);
              } else if (i === 0 && selectedLevel === 1) {
                setSelectedLevel(0);
              } else {
                setSelectedLevel(i + 1);
              }
            }}
            className={`h-4 w-${selectorWidth} cursor-pointer rounded-sm`}
            animate={{
              backgroundColor:
                i < selectedLevel
                  ? "var(--color-teal-600)"
                  : "var(--color-gray-300)"
            }}
            transition={{ duration: 0.5, delay: 0.05 * i }}
          />
        ) : (
          <motion.button
            key={`level-${i}`}
            onClick={() => setSelectedLevel(i + 1)}
            className={`h-4 w-${selectorWidth} cursor-pointer rounded-sm text-xs ${i + 1 > selectedLevel ? "text-gray-500" : "font-semibold text-white"}`}
            animate={{
              backgroundColor:
                i < selectedLevel
                  ? "var(--color-teal-600)"
                  : "var(--color-gray-300)"
            }}
            transition={{ duration: 0.5, delay: 0.05 * i }}
          >
            {i + 1}
          </motion.button>
        )
      )}
    </div>
  );
}
