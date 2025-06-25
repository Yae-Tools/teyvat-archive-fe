"use client";

import { useEffect, ReactNode } from "react";
import { DashboardLayout } from "./dashboard-layout";
import { ThemeProvider } from "./theme-provider";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";

interface AuthLayoutProps {
  children: ReactNode;
  currentPage: string;
}

export function AuthLayout({
  children,
  currentPage,
}: Readonly<AuthLayoutProps>) {
  const router = useRouter();
  const { isLoaded, isSignedIn } = useUser();

  const handleNavigate = (page: string) => {
    router.push(`/${page}`);
  };

  const handleLogout = () => {
    router.push("/sign-in");
  };

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push("/sign-in");
    }
  }, [isLoaded, isSignedIn, router]);

  if (!isLoaded) {
    return (
      <ThemeProvider defaultTheme="system" storageKey="genshin-build-hub-theme">
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
        </div>
      </ThemeProvider>
    );
  }

  if (!isSignedIn) {
    return (
      <ThemeProvider defaultTheme="system" storageKey="genshin-build-hub-theme">
        <div className="min-h-screen flex items-center justify-center">
          <div>Redirecting to sign-in...</div>
        </div>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider defaultTheme="system" storageKey="genshin-build-hub-theme">
      <DashboardLayout
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onLogout={handleLogout}
      >
        {children}
      </DashboardLayout>
    </ThemeProvider>
  );
}
