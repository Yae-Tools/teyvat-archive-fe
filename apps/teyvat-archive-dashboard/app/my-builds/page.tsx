"use client"

import { AuthLayout } from "../../components/auth-layout"

export default function MyBuildsPage() {
  return (
    <AuthLayout currentPage="my-builds">
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">My Builds</h1>
        <p className="text-muted-foreground">Your character builds will appear here.</p>
      </div>
    </AuthLayout>
  )
}
