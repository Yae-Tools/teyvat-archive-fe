"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
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
    <div className="mt-2 bg-slate-200 dark:bg-slate-800 bg-opacity-50 flex flex-col items-center justify-center p-4 rounded-lg shadow-md w-full xl:hidden">
      <div className="w-full flex items-center justify-between">
        <MobileItemHeading value={title} />
        <button onClick={handleExpansion}>
          <ChevronRight
            className={`size-5 transform transition ease-in-out duration-300 ${
              isExpanded ? "-rotate-90" : "rotate-0"
            }`}
          />
        </button>
      </div>
      <motion.div
        initial={{
          opacity: 0,
          height: 0,
          display: "none",
        }}
        animate={{
          height: isExpanded ? "auto" : 0,
          opacity: isExpanded ? 1 : 0,
          display: isExpanded ? "block" : "none",
        }}
        transition={{ duration: 0.6 }}
        className="w-full md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-2 h-auto"
      >
        {children}
      </motion.div>
    </div>
  );
}

export default memo(AttributeMobileContainer);
