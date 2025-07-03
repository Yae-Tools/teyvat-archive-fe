"use client";

import { useEffect, ReactNode } from "react";
import { DashboardLayout } from "./dashboard-layout";
import { useRouter } from "next/navigation";
import { useConvexAuth } from "convex/react";

interface AuthLayoutProps {
  children: ReactNode;
  currentPage: string;
}

export function AuthLayout({
  children,
  currentPage,
}: Readonly<AuthLayoutProps>) {
  const router = useRouter();
  const { isAuthenticated, isLoading } = useConvexAuth();

  const handleNavigate = (page: string) => {
    router.push(`/${page}`);
  };

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      router.push("/sign-in");
    }
  }, [isLoading, isAuthenticated, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full border-b-2 border-gray-900 size-8"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div>Redirecting to sign-in...</div>
      </div>
    );
}

  return (
    <DashboardLayout currentPage={currentPage} onNavigate={handleNavigate}>
      {children}
    </DashboardLayout>
  );
}
