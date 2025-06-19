"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Plus, Star, Users, BookOpen, TrendingUp } from "lucide-react"

interface DashboardHomeProps {
  user: { displayName: string; avatar: string }
  onNavigate: (page: string) => void
}

export function DashboardHome({ user, onNavigate }: DashboardHomeProps) {
  const recentBuilds = [
    { id: 1, character: "Hu Tao", buildName: "Vaporize DPS", lastUpdated: "2 days ago", likes: 24 },
    { id: 2, character: "Zhongli", buildName: "Shield Support", lastUpdated: "1 week ago", likes: 18 },
    { id: 3, character: "Ganyu", buildName: "Freeze DPS", lastUpdated: "2 weeks ago", likes: 31 },
  ]

  const popularBuilds = [
    { id: 1, character: "Raiden Shogun", buildName: "Hypercarry", author: "ElementalMaster", likes: 156 },
    { id: 2, character: "Kazuha", buildName: "EM Support", author: "WindBlade", likes: 142 },
    { id: 3, character: "Bennett", buildName: "Burst Support", author: "PyroKnight", likes: 128 },
  ]

  return (
    <div className="p-6 space-y-6">
      {/* Welcome Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Welcome back, {user.displayName}!</h1>
          <p className="text-muted-foreground">Ready to create some amazing character builds?</p>
        </div>
        <Button onClick={() => onNavigate("create-build")} size="lg">
          <Plus className="w-4 h-4 mr-2" />
          Create New Build
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">My Builds</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+2 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Likes</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">284</div>
            <p className="text-xs text-muted-foreground">+18 from last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Followers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">47</div>
            <p className="text-xs text-muted-foreground">+5 from last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Views</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,247</div>
            <p className="text-xs text-muted-foreground">+89 from last week</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Recent Builds */}
        <Card>
          <CardHeader>
            <CardTitle>Your Recent Builds</CardTitle>
            <CardDescription>Your latest character build creations</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentBuilds.map((build) => (
              <div key={build.id} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={`/placeholder.svg?height=40&width=40`} alt={build.character} />
                    <AvatarFallback>{build.character.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{build.character}</p>
                    <p className="text-sm text-muted-foreground">{build.buildName}</p>
                  </div>
                </div>
                <div className="text-right">
                  <Badge variant="secondary" className="mb-1">
                    <Star className="w-3 h-3 mr-1" />
                    {build.likes}
                  </Badge>
                  <p className="text-xs text-muted-foreground">{build.lastUpdated}</p>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full" onClick={() => onNavigate("my-builds")}>
              View All Builds
            </Button>
          </CardContent>
        </Card>

        {/* Popular Builds */}
        <Card>
          <CardHeader>
            <CardTitle>Trending Builds</CardTitle>
            <CardDescription>Popular builds from the community</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {popularBuilds.map((build) => (
              <div key={build.id} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={`/placeholder.svg?height=40&width=40`} alt={build.character} />
                    <AvatarFallback>{build.character.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{build.character}</p>
                    <p className="text-sm text-muted-foreground">{build.buildName}</p>
                    <p className="text-xs text-muted-foreground">by {build.author}</p>
                  </div>
                </div>
                <Badge variant="secondary">
                  <Star className="w-3 h-3 mr-1" />
                  {build.likes}
                </Badge>
              </div>
            ))}
            <Button variant="outline" className="w-full" onClick={() => onNavigate("popular-builds")}>
              Explore More
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
