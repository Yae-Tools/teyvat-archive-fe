"use client";

import { useAtomValue } from "jotai";
import { useEffect } from "react";
import { themeAtom } from "~/atoms/general.atoms";

export default function ClientThemeSync() {
  const theme = useAtomValue(themeAtom);

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);

  return null;
}
