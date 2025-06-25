"use client"

import type React from "react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Home, Plus, BookOpen, Star, Settings, Sword } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { UserButton } from "@clerk/nextjs"

interface DashboardLayoutProps {
  children: React.ReactNode
  currentPage: string
  onNavigate: (page: string) => void
  onLogout: () => void
}

const navigation = [
  {
    title: "Overview",
    items: [
      { title: "Dashboard", icon: Home, id: "dashboard", url: "/" },
      { title: "My Builds", icon: BookOpen, id: "my-builds", url: "my-builds" },
      { title: "Create Build", icon: Plus, id: "create-build", url: "create-build" },
      { title: "Updates", icon: Plus, id: "updates", url: "updates" },
    ],
  },
  {
    title: "Community",
    items: [
      { title: "Popular Builds", icon: Star, id: "popular-builds", url: "popular-builds" },
    ],
  },
  {
    title: "Account",
    items: [{ title: "Settings", icon: Settings, id: "settings", url: "/settings" }],
  },
]

export function DashboardLayout({ children, currentPage, onNavigate }: Readonly<DashboardLayoutProps>) {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center gap-2 px-2 py-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-blue-600 to-purple-600">
              <Sword className="size-4 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold">Teyvat Archive</span>
            </div>
          </div>
        </SidebarHeader>

        <SidebarContent>
          {navigation.map((section) => (
            <SidebarGroup key={section.title}>
              <SidebarGroupLabel>{section.title}</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {section.items.map((item) => (
                    <SidebarMenuItem key={item.id}>
                      <SidebarMenuButton asChild isActive={currentPage === item.id} onClick={() => onNavigate(item.url)}>
                        <button className="w-full">
                          <item.icon className="size-4" />
                          <span>{item.title}</span>
                        </button>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </SidebarContent>

        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
               <UserButton/>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>

      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <div className="flex items-center gap-2 flex-1">
            <h1 className="text-lg font-semibold capitalize">{currentPage.replace("-", " ")}</h1>
          </div>
          <ThemeToggle />
        </header>
        <main className="flex-1 overflow-auto">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  )
}
