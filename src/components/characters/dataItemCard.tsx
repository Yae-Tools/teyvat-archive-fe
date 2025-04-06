import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { IConstellation, ITalent } from "~/types/enka/character.types";
import parseText from "~/utils/parsers/parseEnkaText";

import TextLabel from "../common/typography/textLabel";

import TalentStats from "./characterTalents/talentStats";

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
    <div className="my-1 w-full rounded-md bg-gray-300 p-1 dark:bg-slate-700">
      <div className="flex w-full items-center justify-between">
        <div className="flex w-full items-center justify-start space-x-3">
          <Image src={item.icon} alt={item.name} width={60} height={60} />
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
          className="mx-2 flex w-1/5 items-center justify-end"
          onClick={handleExpansion}
        >
          <ChevronRight
            className={`size-5 transform transition duration-300 ease-in-out ${
              isExpanded ? "-rotate-90" : "rotate-0"
            }`}
          />
        </button>
      </div>

      <motion.div
        initial={{
          height: 0,
          opacity: 0
        }}
        animate={{
          opacity: isExpanded ? 1 : 0,
          height: isExpanded ? "auto" : 0
        }}
        transition={{ duration: 0.6 }}
        className={`${isExpanded ? "block" : "hidden"}`}
      >
        <div
          className="px-2 text-gray-800 dark:text-white"
          dangerouslySetInnerHTML={{
            __html: parseText(item.description)
          }}
        />
        {"stats" in item && item.stats && (
          <TalentStats {...{ selectedTalent: item }} />
        )}
      </motion.div>
    </div>
  );
}
