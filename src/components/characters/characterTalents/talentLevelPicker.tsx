import { motion } from "framer-motion";

type Props = {
  setSelectedLevel: (level: number) => void;
  selectedLevel: number;
  noOfLevels: number;
};

export default function TalentLevelPicker({
  selectedLevel,
  setSelectedLevel,
  noOfLevels
}: Readonly<Props>) {
  return (
    <div
      className={`flex w-full items-center justify-start gap-1 py-1 lg:gap-2 xl:gap-3`}
    >
      {Array.from({ length: noOfLevels }, (_, i) => (
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
      ))}
    </div>
  );
}
