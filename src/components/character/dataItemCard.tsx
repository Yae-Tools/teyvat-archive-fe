import { ChevronRightIcon } from "@heroicons/react/16/solid";
import { motion } from "framer-motion";
import { useState } from "react";

import parseText from "~/utils/parsers/parseEnkaText";
import TextLabel from "../common/typography/textLabel";

type Props = {
  item: IConstellation | ITalent;
  index?: number;
};

export default function DataItemCard({ item, index }: Readonly<Props>) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  function handleExpansion() {
    setIsExpanded(!isExpanded);
  }

  return (
    <div className="w-full bg-gray-300 dark:bg-slate-700 my-1 p-1 rounded-md">
      <div className="flex items-center justify-between w-full">
        <div className="w-full flex items-center justify-start space-x-3">
          <img src={item.icon} alt={item.name} width={60} />
          {/* if  data type is IConstellation use index as constellation number */}
          {index !== undefined ? (
            <TextLabel
              label={`${item.name} (C${index + 1})`}
              classNames="text-black dark:text-white"
            />
          ) : (
            <TextLabel
              label={`${item.name}`}
              classNames="text-black dark:text-white"
            />
          )}
        </div>

        <button
          className="w-1/5 mx-2 flex items-center justify-end"
          onClick={handleExpansion}
        >
          <ChevronRightIcon
            className={`size-5 transform transition ease-in-out duration-300 ${
              isExpanded ? "-rotate-90" : "rotate-0"
            }`}
          />
        </button>
      </div>

      <motion.div
        initial={{
          height: 0,
          opacity: 0,
        }}
        animate={{
          opacity: isExpanded ? 1 : 0,
          height: isExpanded ? "auto" : 0,
        }}
        transition={{ duration: 0.6 }}
        className={`${isExpanded ? "block" : "hidden"}`}
      >
        <div
          className="text-gray-800 dark:text-white px-2"
          dangerouslySetInnerHTML={{
            __html: parseText(item.description),
          }}
        />
      </motion.div>
    </div>
  );
}
