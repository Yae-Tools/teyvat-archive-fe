"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import HEADER_ROUTES from "~/data/routeData";

export default function DesktopNavRoutes() {
  const pathname = usePathname();
  return (
    <nav aria-label="Global">
      <ul className="flex items-center gap-6 text-sm w-full justify-center">
        {HEADER_ROUTES.map((route) => (
          <li key={route.path}>
            <Link
              href={route.path}
              className={`transition hover:text-slate-600/75 dark:hover:text-white/75 font-enka ${
                pathname === route.path.toLowerCase()
                  ? "text-teal-400"
                  : "text-slate-600 dark:text-white"
              }`}
            >
              {route.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
