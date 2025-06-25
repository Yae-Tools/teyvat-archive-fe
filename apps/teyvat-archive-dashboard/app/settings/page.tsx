"use client"

import { useEffect } from "react"
import { DashboardLayout } from "../../components/dashboard-layout"
import { AccountSettings } from "../../components/account-settings"
import { ThemeProvider } from "../../components/theme-provider"
import { useRouter } from "next/navigation"
import { useUser } from "@clerk/nextjs"

export default function SettingsPage() {
  const router = useRouter()
  const { isLoaded, isSignedIn, user } = useUser()

  const handleNavigate = (page: string) => {
    router.push(`/${page}`)
  }

  const handleLogout = () => {
    router.push('/sign-in')
  }

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push('/sign-in')
    }
  }, [isLoaded, isSignedIn, router])

  if (!isLoaded) {
    return (
      <ThemeProvider defaultTheme="system" storageKey="genshin-build-hub-theme">
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
        </div>
      </ThemeProvider>
    )
  }

  if (!isSignedIn) {
    return (
      <ThemeProvider defaultTheme="system" storageKey="genshin-build-hub-theme">
        <div className="min-h-screen flex items-center justify-center">
          <div>Redirecting to sign-in...</div>
        </div>
      </ThemeProvider>
    )
  }

  const userForComponent = {
    id: user.id,
    username: user.username ?? user.emailAddresses[0]?.emailAddress ?? 'User',
    displayName: user.fullName ?? user.firstName ?? 'User',
    avatar: user.imageUrl ?? '/placeholder.svg',
    provider: 'clerk'
  }

  return (
    <ThemeProvider defaultTheme="system" storageKey="genshin-build-hub-theme">
      <DashboardLayout 
        user={userForComponent} 
        currentPage="settings" 
        onNavigate={handleNavigate} 
        onLogout={handleLogout}
      >
        <AccountSettings 
          user={userForComponent} 
          onUserUpdate={() => {}} 
          onLogout={handleLogout} 
        />
      </DashboardLayout>
    </ThemeProvider>
  )
}
