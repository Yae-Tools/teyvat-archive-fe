"use client";

import { useEffect } from "react";
import { DashboardLayout } from "../../components/dashboard-layout";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";

export default function PopularBuildsPage() {
  const router = useRouter();
  const { isLoaded, isSignedIn } = useUser();

  const handleNavigate = (page: string) => {
    router.push(`/${page}`);
  };

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push("/sign-in");
    }
  }, [isLoaded, isSignedIn, router]);

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full border-b-2 border-gray-900 size-8"></div>
      </div>
    );
  }

  if (!isSignedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div>Redirecting to sign-in...</div>
      </div>
    );
  }

  return (
    <DashboardLayout currentPage="popular-builds" onNavigate={handleNavigate}>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Popular Builds</h1>
        <p className="text-muted-foreground">
          Trending community builds will appear here.
        </p>
      </div>
    </DashboardLayout>
  );
}
