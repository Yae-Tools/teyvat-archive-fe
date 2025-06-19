"use client"

import { useState } from "react"
import { AuthPage } from "../components/auth-page"
import { DashboardLayout } from "../components/dashboard-layout"
import { DashboardHome } from "../components/dashboard-home"
import { CharacterBuildForm } from "../components/character-build-form"

interface User {
  id: string
  username: string
  displayName: string
  avatar: string
  provider: string
}

export default function App() {
  const [user, setUser] = useState<User | null>(null)
  const [currentPage, setCurrentPage] = useState("dashboard")

  const handleLogin = (provider: string, userData: User) => {
    setUser(userData)
    setCurrentPage("dashboard")
  }

  const handleLogout = () => {
    setUser(null)
    setCurrentPage("dashboard")
  }

  const handleNavigate = (page: string) => {
    setCurrentPage(page)
  }

  const renderPageContent = () => {
    switch (currentPage) {
      case "dashboard":
        return <DashboardHome user={user!} onNavigate={handleNavigate} />
      case "create-build":
        return <CharacterBuildForm user={user!} />
      case "my-builds":
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">My Builds</h1>
            <p className="text-muted-foreground">Your character builds will appear here.</p>
          </div>
        )
      case "popular-builds":
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Popular Builds</h1>
            <p className="text-muted-foreground">Trending community builds will appear here.</p>
          </div>
        )
      case "characters":
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Characters</h1>
            <p className="text-muted-foreground">Character information and guides will appear here.</p>
          </div>
        )
      case "weapons":
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Weapons</h1>
            <p className="text-muted-foreground">Weapon database and comparisons will appear here.</p>
          </div>
        )
      case "artifacts":
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Artifacts</h1>
            <p className="text-muted-foreground">Artifact sets and optimization guides will appear here.</p>
          </div>
        )
      case "settings":
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Settings</h1>
            <p className="text-muted-foreground">Account settings and preferences will appear here.</p>
          </div>
        )
      case "profile":
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Profile</h1>
            <p className="text-muted-foreground">Your profile information will appear here.</p>
          </div>
        )
      default:
        return <DashboardHome user={user!} onNavigate={handleNavigate} />
    }
  }

  if (!user) {
    return <AuthPage onLogin={handleLogin} />
  }

  return (
    <DashboardLayout user={user} currentPage={currentPage} onNavigate={handleNavigate} onLogout={handleLogout}>
      {renderPageContent()}
    </DashboardLayout>
  )
}
