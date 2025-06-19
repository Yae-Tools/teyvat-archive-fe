import { motion, AnimatePresence } from "motion/react";
import { useEffect, useRef } from "react";

type Props = {
  selectedLevel: number;
  setSelectedLevel: (level: number) => void;
  noOfLevels: number;
  isZeroEnabled?: boolean;
};

export default function LevelPicker({
  selectedLevel,
  setSelectedLevel,
  noOfLevels,
  isZeroEnabled = false
}: Readonly<Props>) {
  const MIN_LEVEL = isZeroEnabled ? 0 : 1;
  const MAX_LEVEL = noOfLevels;
  const scrollRef = useRef<HTMLDivElement>(null);

  // Handle wheel scroll events
  const handleWheel = (e: WheelEvent) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      setSelectedLevel(Math.min(selectedLevel + 1, MAX_LEVEL));
    } else {
      setSelectedLevel(Math.max(selectedLevel - 1, MIN_LEVEL));
    }
  };

  // Calculate visible levels (fixed window of 5 levels centered on selectedLevel)
  const getLevelsToShow = () => {
    const windowSize = 5; // Show 5 levels total
    const halfWindow = Math.floor(windowSize / 2);

    let start = selectedLevel - halfWindow;
    let end = selectedLevel + halfWindow;

    // Adjust for edges
    if (start < MIN_LEVEL) {
      end = Math.min(MAX_LEVEL, end + (MIN_LEVEL - start));
      start = MIN_LEVEL;
    }
    if (end > MAX_LEVEL) {
      start = Math.max(MIN_LEVEL, start - (end - MAX_LEVEL));
      end = MAX_LEVEL;
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  const levelsToShow = getLevelsToShow();
  const minVisible = levelsToShow[0];
  const maxVisible = levelsToShow[levelsToShow.length - 1];

  // Calculate tick positions only for visible levels
  const tickPositions = levelsToShow.map((level) => {
    // Normalize position within visible range
    const position = ((level - minVisible) / (maxVisible - minVisible)) * 100;
    return {
      level,
      position: `${position}%`
    };
  });

  // Add/remove event listeners
  useEffect(() => {
    const currentRef = scrollRef.current;
    if (currentRef) {
      currentRef.addEventListener("wheel", handleWheel as EventListener, {
        passive: false
      });
      return () => {
        currentRef.removeEventListener("wheel", handleWheel as EventListener);
      };
    }
  }, [selectedLevel, MAX_LEVEL, MIN_LEVEL]);

  // Animation variants
  const tickVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 300
      }
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2
      }
    }
  };

  const markerVariants = {
    selected: {
      scaleY: 1.2,
      backgroundColor: "#facc15",
      transition: { duration: 0.2 }
    },
    unselected: {
      scaleY: 1,
      backgroundColor: "#ffffff",
      transition: { duration: 0.2 }
    }
  };

  return (
    <div
      ref={scrollRef}
      className="flex h-10 w-full flex-col items-center justify-center rounded-lg bg-gradient-to-b from-gray-800 to-gray-900 px-4 py-2 text-sm shadow-lg"
    >
      <div className="relative flex h-6 w-full items-center justify-center">
        {/* Ruler background line - spans only visible levels */}
        <div
          className="absolute h-1 rounded-full bg-gray-600"
          style={{
            left: "0%",
            right: "0%",
            width: "100%"
          }}
        />

        {/* Visible tick marks */}
        <div className="absolute flex h-full w-full items-center">
          <AnimatePresence initial={false}>
            {tickPositions.map(({ level, position }) => (
              <motion.button
                key={`marker-${level}`}
                className="absolute flex flex-col items-center"
                style={{ left: position, transform: "translateX(-50%)" }}
                onClick={() => setSelectedLevel(level)}
                variants={tickVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <motion.div
                  className="mb-1 h-2 w-1 rounded-sm"
                  variants={markerVariants}
                  animate={level === selectedLevel ? "selected" : "unselected"}
                />
                <motion.div
                  className={`text-xs font-medium focus:outline-none ${
                    level === selectedLevel
                      ? "text-yellow-400"
                      : "text-white hover:text-yellow-200"
                  }`}
                >
                  {level}
                </motion.div>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
