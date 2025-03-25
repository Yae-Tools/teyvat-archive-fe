"use client";

import { Cog6ToothIcon, XMarkIcon } from "@heroicons/react/16/solid";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";

import HEADER_ROUTES from "~/data/routeData";

type Props = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (value: boolean) => void;
  isSettingsOpen: boolean;
  setIsSettingsOpen: (value: boolean) => void;
};

export default function HeaderSidebar({
  isSidebarOpen,
  setIsSidebarOpen,
  isSettingsOpen,
  setIsSettingsOpen,
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
      className={`absolute top-0 right-0 w-full max-w-[300px] h-screen bg-gray-100 dark:bg-gray-800 opacity-90 z-50 px-10 flex flex-col items-end justify-start ${
        isSidebarOpen ? "block" : "hidden"
      }`}
      initial={{ x: "100%" }}
      animate={{ x: isSidebarOpen ? 0 : "100%" }}
      transition={{ duration: 0.3 }}
      exit={{ x: "100%" }}
    >
      <button
        onClick={() => setIsSidebarOpen(false)}
        className="absolute top-5 right-5 primary-text"
      >
        <XMarkIcon className="size-5" />
      </button>
      <nav className="flex flex-col items-end justify-start h-full space-y-6 w-full top-20 absolute">
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
        className="absolute bottom-5 right-5 primary-text"
      >
        <Cog6ToothIcon className="size-5" />
      </button>
    </motion.div>
  );
}
