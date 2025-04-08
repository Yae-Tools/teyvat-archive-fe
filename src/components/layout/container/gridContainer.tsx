import { motion } from "framer-motion";
import { RefObject } from "react";

type Props = {
  children: React.ReactNode;
  hasMore: boolean;
  loaderRef: RefObject<HTMLDivElement | null>;
};

const containerAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
};

// Item animation
export const itemAnimation = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function GridContainer({
  children,
  hasMore,
  loaderRef
}: Readonly<Props>) {
  return (
    <div
      className="flex w-full items-center justify-center overflow-hidden px-4 md:px-12"
      style={{ backgroundColor: "rgba(16, 24, 40, 0.3)" }}
    >
      <motion.div
        variants={containerAnimation}
        initial="hidden"
        animate="show"
        className="xs:grid-cols-3 grid auto-cols-fr grid-cols-2 overflow-y-auto pt-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8"
      >
        {children}

        {hasMore && (
          <div
            ref={loaderRef}
            className="col-span-full flex justify-center py-4"
          >
            <div className="border-primary h-8 w-8 animate-spin rounded-full border-4 border-t-transparent"></div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
