"use client";

import { CogIcon, XIcon } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { useEffect } from "react";

import HEADER_ROUTES from "~/data/routeData";

type Props = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (value: boolean) => void;
  setIsSettingsOpen: (value: boolean) => void;
};

export default function HeaderSidebar({
  isSidebarOpen,
  setIsSidebarOpen,
  setIsSettingsOpen
}: Readonly<Props>) {
  useEffect(() => {
    const disableScroll = () => {
      document.body.style.overflow = "hidden";
    };

    const enableScroll = () => {
      document.body.style.overflow = "auto";
    };

    if (isSidebarOpen) {
      disableScroll();
    } else {
      enableScroll();
    }

    return () => enableScroll();
  }, [isSidebarOpen]);

  return (
    <motion.div
      className={`absolute top-0 right-0 z-50 flex h-screen w-full max-w-[300px] flex-col items-end justify-start bg-gray-100 px-10 opacity-90 dark:bg-gray-800 ${
        isSidebarOpen ? "block" : "hidden"
      }`}
      initial={{ x: "100%" }}
      animate={{ x: isSidebarOpen ? 0 : "100%" }}
      transition={{ duration: 0.3 }}
      exit={{ x: "100%" }}
    >
      <button
        onClick={() => setIsSidebarOpen(false)}
        className="primary-text absolute top-5 right-5"
      >
        <XIcon className="size-5" />
      </button>
      <nav className="absolute top-20 flex flex-col items-end justify-start space-y-6 size-full">
        {HEADER_ROUTES.map((route) => (
          <Link
            key={route.path}
            href={route.path}
            className="primary-text font-enka text-xl"
            onClick={() => setIsSidebarOpen(false)}
          >
            {route.name}
          </Link>
        ))}
      </nav>

      {/* add settings button at the bottom right */}
      <button
        onClick={() => {
          setIsSettingsOpen(true);
          setIsSidebarOpen(false);
        }}
        className="primary-text absolute right-5 bottom-5"
      >
        <CogIcon className="size-5" />
      </button>
    </motion.div>
  );
}
