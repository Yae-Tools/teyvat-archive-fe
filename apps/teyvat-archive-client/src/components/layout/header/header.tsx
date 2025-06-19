"use client";

import { CogIcon, MenuIcon, NotebookPen } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import { toast, ToastContainer } from "react-toastify";

import LogoHolder from "~/components/common/logoHolder";
import SettingsModal from "~/components/modals/settings/settingsModal";

import DesktopNavRoutes from "./desktopNavRoutes";
import HeaderSidebar from "./headerSideBar";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const path = usePathname();

  Modal.setAppElement("#app");

  const notify = (message: string) => {
    toast.info(message, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: "dark"
    });
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [path]);

  return (
    <header
      className="w-full overflow-x-hidden bg-white shadow-md shadow-slate-300 dark:bg-gray-900 dark:shadow-slate-950"
      style={{ backgroundColor: "rgba(16, 24, 40, 0.3)" }}
    >
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="mx-2 flex w-full items-center justify-between">
          <Link
            href="/"
            className="flex w-full items-center justify-start py-2 lg:w-1/5"
          >
            <span className="sr-only">Teyvat Archive</span>
            <LogoHolder />
            <h1 className="ml-2 text-lg font-bold text-white">
              Teyvat Archive
            </h1>
          </Link>

          <div className="hidden w-3/5 items-center justify-center lg:block">
            <DesktopNavRoutes />
          </div>

          <div className="flex w-full items-center justify-end gap-4 lg:w-1/5">
            <div className="hidden lg:flex lg:gap-4">
              <button
                onClick={() => notify("Updates section coming soon!")}
                className="cu rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
              >
                <NotebookPen className="size-5" />
              </button>
              <button
                onClick={() => setIsSettingsOpen(true)}
                className="cu rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
              >
                <CogIcon className="size-5" />
              </button>
            </div>

            <div className="block lg:hidden">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
              >
                <MenuIcon className="size-5" />
              </button>
            </div>
          </div>

          <HeaderSidebar
            {...{
              isSidebarOpen,
              setIsSidebarOpen,
              setIsSettingsOpen
            }}
          />
          <SettingsModal
            isOpen={isSettingsOpen}
            setIsOpen={setIsSettingsOpen}
            onRequestClose={() => setIsSettingsOpen(false)}
          />
        </div>
      </div>
      <ToastContainer />
    </header>
  );
}
