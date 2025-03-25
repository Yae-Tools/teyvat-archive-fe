import { parseCookies, setCookie } from "nookies";

export const THEME_COOKIE_NAME = "theme";
export const THEME_LIGHT = "light";
export const THEME_DARK = "dark";

export type Theme = typeof THEME_LIGHT | typeof THEME_DARK;

export const getThemeFromCookie = (ctx?: any): Theme => {
  if (ctx?.req?.headers) {
    const cookieHeader = ctx.req.headers.get("cookie");
    if (cookieHeader) {
      const cookies = Object.fromEntries(
        cookieHeader
          .split("; ")
          .map((c: { split: (arg0: string) => string[] }) => {
            const [key, value] = c.split("=");
            return [key, value];
          })
      );

      const theme = (cookies[THEME_COOKIE_NAME] as Theme) || THEME_DARK;
      return theme;
    }
  }

  // Fallback to nookies for client-side or Node.js-style req
  const cookies = parseCookies(ctx);

  const theme = (cookies[THEME_COOKIE_NAME] as Theme) || THEME_DARK;

  return theme;
};

export const setThemeCookie = (theme: Theme, ctx?: any) => {
  setCookie(ctx, THEME_COOKIE_NAME, theme, {
    maxAge: 30 * 24 * 60 * 60,
    path: "/",
    sameSite: "lax",
  });
};
