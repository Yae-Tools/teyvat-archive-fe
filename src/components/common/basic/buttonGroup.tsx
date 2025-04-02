import { motion } from "framer-motion";

import GroupButton from "./groupButton";

type Props = {
  items: {
    id: number;
    label: string;
    value: any;
    onClick: (value: number | string) => void;
  }[];
  selectedItem: any;
};

export default function ButtonGroup({ items, selectedItem }: Readonly<Props>) {
  const selectedIndex = items.findIndex((item) => item.value === selectedItem);

  return (
    <div className="relative flex items-center space-x-1 rounded-xl bg-gray-500/5 p-1 text-sm text-gray-600 rtl:space-x-reverse dark:bg-gray-500/20">
      {items.map((item) => (
        <GroupButton
          key={item.id}
          label={item.label}
          isSelected={selectedItem === item.value}
          onClick={() => {
            item.onClick(item.value);
          }}
        />
      ))}

      {/* Sliding Teal Background */}
      <motion.div
        className="absolute top-1 bottom-1 rounded-lg bg-white shadow dark:bg-teal-600"
        animate={{
          x: `${selectedIndex * 100}%` // Move based on the index
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{
          width: `calc(${100 / items.length}% - 0.2rem)` // Adjust width dynamically based on the number of items
        }}
      />
    </div>
  );
}
