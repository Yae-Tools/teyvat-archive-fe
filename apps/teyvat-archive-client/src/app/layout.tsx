import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { Metadata } from "next";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import { Open_Sans } from "next/font/google";

import { PostHogProvider } from "~/components/common/providers/postHogProvider";
import QueryProvider from "~/components/common/providers/queryProvider";
import ClientThemeSync from "~/components/common/theme/clientThemeSync";
import BaseLayout from "~/components/layout/container/baseLayout";
import { getThemeFromCookie } from "~/utils/theme";

import ErrorPage from "./error";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Teyvat Archive",
  description:
    "Welcome to Teyvat Archive! Your ultimate Genshin Impact companion. Dive into Teyvat Archive, the premier destination for Genshin Impact fans! Explore lore, character guides, and secrets of Teyvat in one epic hub.",
  keywords:
    "Teyvat Archive, Genshin Impact, Teyvat lore, Genshin guides, RPG adventure, open-world gaming",
  openGraph: {
    title: "Teyvat Archive",
    description:
      "Welcome to Teyvat Archive! Your ultimate Genshin Impact companion. Explore lore, guides, and secrets at Teyvat Archive.",
    url: "https://teyvatarchive.online",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630
      }
    ],
    siteName: "Teyvat Archive",
    type: "website",
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: "Teyvat Archive - Your Ultimate Genshin Impact Companion",
    description:
      "Welcome to Teyvat Archive! Your ultimate Genshin Impact companion. Dive into Teyvat Archive, the premier destination for Genshin Impact fans! Explore lore, character guides, and secrets of Teyvat in one epic hub.",
    images: ["/logo.jpg"],
    creatorId: "@azula9713",
    creator: "@azula9713",
    site: "@archive_teyvat",
    siteId: "@archive_teyvat"
  },
  icons: {
    icon: "/logo.jpg",
    shortcut: "/logo.jpg",
    apple: "/logo.jpg"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = getThemeFromCookie();

  return (
    <html lang="en" className={theme} suppressHydrationWarning>
      <body className={`${openSans.variable} antialiased`} id="app">
        <ErrorBoundary errorComponent={ErrorPage}>
          <PostHogProvider>
            <QueryProvider>
              <BaseLayout>{children}</BaseLayout>
              <ClientThemeSync />
              <ReactQueryDevtools />
            </QueryProvider>
          </PostHogProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
