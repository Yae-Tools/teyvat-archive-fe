import { motion } from "framer-motion";

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
        className="absolute top-1 bottom-1 rounded-lg bg-teal-600 shadow"
        animate={{
          x: `${selectedIndex * 100}%` // Move based on the index
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{
          width: `calc(${100 / items.length}% - 0.75%)` // Adjust width dynamically based on the number of items
        }}
      />
    </div>
  );
}
