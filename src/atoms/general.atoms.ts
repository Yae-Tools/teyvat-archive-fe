import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import {
  getThemeFromCookie,
  setThemeCookie,
  Theme,
  THEME_DARK,
  THEME_LIGHT,
} from "../utils/theme";

export const themeAtom = atomWithStorage<Theme>("theme", getThemeFromCookie(), {
  getItem: () => getThemeFromCookie(),
  setItem: (_, value) => setThemeCookie(value),
  removeItem: () => setThemeCookie(THEME_LIGHT),
});

export const toggleThemeAtom = atom(
  (get) => get(themeAtom) === "light",
  (get, set) => {
    const currentTheme = get(themeAtom);
    const newTheme = currentTheme === THEME_LIGHT ? THEME_DARK : THEME_LIGHT;
    set(themeAtom, newTheme);
  }
);
