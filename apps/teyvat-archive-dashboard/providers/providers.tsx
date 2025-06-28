import React from "react";

import ConvexClientProvider from "./convex-provider";
import { ThemeProvider } from "./theme-provider";
import { TanStackProviders } from "./tanstack-client-provider";

export default function Providers({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ConvexClientProvider>
      <TanStackProviders>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </TanStackProviders>
    </ConvexClientProvider>
  );
}
