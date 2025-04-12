import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

import GroupButton from "./groupButton";

type Props = {
  items: {
    id: any;
    label: any;
    value: any;
    onClick: (value: any) => void;
  }[];
  selectedItem: any;
};

export default function ButtonGroup({ items, selectedItem }: Readonly<Props>) {
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [selectedDimensions, setSelectedDimensions] = useState({
    width: 0,
    left: 0
  });
  const selectedIndex = items.findIndex((item) => item.value === selectedItem);

  // Update dimensions when selected item changes or on resize
  useEffect(() => {
    const updateDimensions = () => {
      const selectedButton = buttonRefs.current[selectedIndex];
      if (selectedButton?.parentElement) {
        const parentRect = selectedButton.parentElement.getBoundingClientRect();
        const buttonRect = selectedButton.getBoundingClientRect();

        setSelectedDimensions({
          width: buttonRect.width,
          left: buttonRect.left - parentRect.left
        });
      }
    };

    // Update immediately and on window resize
    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, [selectedIndex, items]);

  return (
    <div className="relative flex items-center space-x-1 rounded-xl bg-gray-500/5 p-1 text-center text-sm text-gray-600 rtl:space-x-reverse dark:bg-gray-500/20">
      {items.map((item, index) => (
        <GroupButton
          key={item.id}
          label={item.label}
          isSelected={selectedItem === item.value}
          onClick={() => {
            item.onClick(item.value);
          }}
          ref={(el) => {
            buttonRefs.current[index] = el;
          }}
        />
      ))}

      {/* Sliding Teal Background */}
      <motion.div
        className="absolute top-1 bottom-1 rounded-lg bg-teal-600 shadow"
        animate={{
          width: selectedDimensions.width,
          left: selectedDimensions.left
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
    </div>
  );
}
