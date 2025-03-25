import { motion } from "framer-motion";

type Props = {
  selectedLevel: number;
  setSelectedLevel: (level: number) => void;
  stars: number;
};

export default function OverviewLevelPicker({
  selectedLevel,
  setSelectedLevel,
  stars,
}: Readonly<Props>) {
  const maxLevel = stars > 2 ? 90 : 70;
  return (
    <div className="relative flex items-center p-1 space-x-1 rtl:space-x-reverse text-sm text-gray-600 bg-gray-500/5 rounded-xl dark:bg-gray-500/20">
      {/* Static Buttons */}
      <button
        onClick={() => setSelectedLevel(1)}
        className={`relative z-10 flex whitespace-nowrap items-center h-5 px-2 font-medium rounded-lg outline-none focus:ring-0 ${
          selectedLevel === 1
            ? "text-teal-600 dark:text-white font-semibold"
            : "text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300"
        }`}
      >
        01
      </button>
      <button
        onClick={() => setSelectedLevel(maxLevel)}
        className={`relative z-10 flex whitespace-nowrap items-center h-5 px-2 font-medium rounded-lg outline-none focus:ring-0 ${
          selectedLevel === maxLevel
            ? "text-teal-600 dark:text-white font-semibold"
            : "text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300"
        }`}
      >
        {stars > 2 ? "90" : "70"}
      </button>

      {/* Sliding Teal Background */}
      <motion.div
        className="absolute top-1 bottom-1 rounded-lg bg-white dark:bg-teal-600 shadow"
        animate={{
          x: selectedLevel === 1 ? "0%" : "100%",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{
          width: "calc(50% - 0.4rem)", // Half container minus space-x-1 gap
        }}
      />
    </div>
  );
}
