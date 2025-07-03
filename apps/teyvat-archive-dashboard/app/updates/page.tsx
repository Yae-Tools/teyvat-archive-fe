"use client";

import { useEffect } from "react";
import { DashboardLayout } from "../../components/dashboard-layout";
import { UpdatesManager } from "../../components/updates-manager";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";

export default function UpdatesPage() {
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
    <DashboardLayout currentPage="updates" onNavigate={handleNavigate}>
      <UpdatesManager />
    </DashboardLayout>
  );
}
