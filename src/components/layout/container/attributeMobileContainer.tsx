"use client";

import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { memo, useState } from "react";

import MobileItemHeading from "~/components/common/typography/mobileItemHeading";

type Props = {
  children: React.ReactNode | React.ReactNode[];
  title: string;
};

function AttributeMobileContainer({ children, title }: Readonly<Props>) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  function handleExpansion() {
    setIsExpanded(!isExpanded);
  }

  return (
    <div className="bg-opacity-50 mt-2 flex w-full flex-col items-center justify-center rounded-lg bg-slate-200 p-4 shadow-md xl:hidden dark:bg-slate-800">
      <div className="flex w-full items-center justify-between">
        <MobileItemHeading value={title} />
        <button onClick={handleExpansion}>
          <ChevronRight
            className={`size-5 transform transition duration-300 ease-in-out ${
              isExpanded ? "-rotate-90" : "rotate-0"
            }`}
          />
        </button>
      </div>
      <motion.div
        initial={{
          opacity: 0,
          height: 0,
          display: "none"
        }}
        animate={{
          height: isExpanded ? "auto" : 0,
          opacity: isExpanded ? 1 : 0,
          display: isExpanded ? "block" : "none"
        }}
        transition={{ duration: 0.6 }}
        className="h-auto w-full md:grid md:grid-cols-2 md:gap-2 lg:grid-cols-3"
      >
        {children}
      </motion.div>
    </div>
  );
}

export default memo(AttributeMobileContainer);
