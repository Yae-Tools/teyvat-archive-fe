"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Save, Upload, Shield, Bell, Eye, Trash2, Key, Settings, Download, AlertTriangle } from "lucide-react"
import { User } from "lucide-react" // Import the User component

interface AccountSettingsProps {
  user: {
    id: string
    username: string
    displayName: string
    email: string
    avatar: string
    provider: string
    bio?: string
    location?: string
    website?: string
    joinDate: string
    isVerified: boolean
    totalBuilds: number
    totalLikes: number
    followers: number
    following: number
  }
  onUserUpdate: (updatedUser: any) => void
  onLogout: () => void
}

interface NotificationSettings {
  emailNotifications: boolean
  pushNotifications: boolean
  buildLikes: boolean
  buildComments: boolean
  newFollowers: boolean
  systemUpdates: boolean
  weeklyDigest: boolean
  marketingEmails: boolean
}

interface PrivacySettings {
  profileVisibility: "public" | "private" | "friends"
  showEmail: boolean
  showLocation: boolean
  showJoinDate: boolean
  allowDirectMessages: boolean
  showOnlineStatus: boolean
  indexProfile: boolean
}

interface SecuritySettings {
  twoFactorEnabled: boolean
  loginAlerts: boolean
  sessionTimeout: number
  allowedDevices: string[]
}

export function AccountSettings({ user, onUserUpdate, onLogout }: AccountSettingsProps) {
  const [activeTab, setActiveTab] = useState("profile")
  const [isLoading, setIsLoading] = useState(false)
  const [profileData, setProfileData] = useState({
    displayName: user.displayName,
    username: user.username,
    email: user.email,
    bio: user.bio || "",
    location: user.location || "",
    website: user.website || "",
  })

  const [notifications, setNotifications] = useState<NotificationSettings>({
    emailNotifications: true,
    pushNotifications: true,
    buildLikes: true,
    buildComments: true,
    newFollowers: true,
    systemUpdates: true,
    weeklyDigest: false,
    marketingEmails: false,
  })

  const [privacy, setPrivacy] = useState<PrivacySettings>({
    profileVisibility: "public",
    showEmail: false,
    showLocation: true,
    showJoinDate: true,
    allowDirectMessages: true,
    showOnlineStatus: true,
    indexProfile: true,
  })

  const [security, setSecurity] = useState<SecuritySettings>({
    twoFactorEnabled: false,
    loginAlerts: true,
    sessionTimeout: 30,
    allowedDevices: ["Current Device", "Mobile App"],
  })

  const handleProfileSave = async () => {
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const updatedUser = {
      ...user,
      ...profileData,
    }
    onUserUpdate(updatedUser)
    setIsLoading(false)
  }

  const handleAvatarUpload = () => {
    // Simulate avatar upload
    console.log("Avatar upload triggered")
  }

  const handleExportData = () => {
    const userData = {
      profile: profileData,
      settings: { notifications, privacy, security },
      builds: [], // Would be populated with actual build data
      stats: {
        totalBuilds: user.totalBuilds,
        totalLikes: user.totalLikes,
        followers: user.followers,
        following: user.following,
      },
    }

    const dataStr = JSON.stringify(userData, null, 2)
    const dataBlob = new Blob([dataStr], { type: "application/json" })
    const url = URL.createObjectURL(dataBlob)
    const link = document.createElement("a")
    link.href = url
    link.download = `genshin-build-hub-data-${new Date().toISOString().split("T")[0]}.json`
    link.click()
  }

  const handleDeleteAccount = () => {
    console.log("Account deletion requested")
    // Would implement actual account deletion logic
  }

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Account Settings</h1>
        <p className="text-muted-foreground">Manage your account preferences and security settings</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="privacy">Privacy</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>

        {/* Profile Tab */}
        <TabsContent value="profile" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="size-5" />
                Profile Information
              </CardTitle>
              <CardDescription>Update your public profile information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Avatar Section */}
              <div className="flex items-center gap-4">
                <Avatar className="size-20">
                  <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.displayName} />
                  <AvatarFallback className="text-lg">{user.displayName.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium">{user.displayName}</h3>
                    {user.isVerified && <Badge variant="secondary">Verified</Badge>}
                    <Badge variant="outline" className="capitalize">
                      {user.provider}
                    </Badge>
                  </div>
                  <Button onClick={handleAvatarUpload} variant="outline" size="sm">
                    <Upload className="mr-2 size-4" />
                    Change Avatar
                  </Button>
                </div>
              </div>

              <Separator />

              {/* Profile Form */}
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="displayName">Display Name</Label>
                  <Input
                    id="displayName"
                    value={profileData.displayName}
                    onChange={(e) => setProfileData((prev) => ({ ...prev, displayName: e.target.value }))}
                    placeholder="Your display name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    value={profileData.username}
                    onChange={(e) => setProfileData((prev) => ({ ...prev, username: e.target.value }))}
                    placeholder="Your username"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={profileData.email}
                    onChange={(e) => setProfileData((prev) => ({ ...prev, email: e.target.value }))}
                    placeholder="your.email@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    value={profileData.location}
                    onChange={(e) => setProfileData((prev) => ({ ...prev, location: e.target.value }))}
                    placeholder="Your location"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="website">Website</Label>
                  <Input
                    id="website"
                    type="url"
                    value={profileData.website}
                    onChange={(e) => setProfileData((prev) => ({ ...prev, website: e.target.value }))}
                    placeholder="https://your-website.com"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    value={profileData.bio}
                    onChange={(e) => setProfileData((prev) => ({ ...prev, bio: e.target.value }))}
                    placeholder="Tell us about yourself..."
                    rows={3}
                  />
                </div>
              </div>

              {/* Stats Display */}
              <div className="grid gap-4 md:grid-cols-4">
                <div className="text-center p-3 border rounded-lg">
                  <div className="text-2xl font-bold">{user.totalBuilds}</div>
                  <div className="text-sm text-muted-foreground">Builds</div>
                </div>
                <div className="text-center p-3 border rounded-lg">
                  <div className="text-2xl font-bold">{user.totalLikes}</div>
                  <div className="text-sm text-muted-foreground">Likes</div>
                </div>
                <div className="text-center p-3 border rounded-lg">
                  <div className="text-2xl font-bold">{user.followers}</div>
                  <div className="text-sm text-muted-foreground">Followers</div>
                </div>
                <div className="text-center p-3 border rounded-lg">
                  <div className="text-2xl font-bold">{user.following}</div>
                  <div className="text-sm text-muted-foreground">Following</div>
                </div>
              </div>

              <div className="flex justify-end">
                <Button onClick={handleProfileSave} disabled={isLoading}>
                  {isLoading ? (
                    <div className="animate-spin rounded-full border-b-2 border-white mr-2 size-4"></div>
                  ) : (
                    <Save className="mr-2 size-4" />
                  )}
                  Save Changes
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notifications Tab */}
        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="size-5" />
                Notification Preferences
              </CardTitle>
              <CardDescription>Choose what notifications you want to receive</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Email Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                  </div>
                  <Switch
                    checked={notifications.emailNotifications}
                    onCheckedChange={(checked) =>
                      setNotifications((prev) => ({ ...prev, emailNotifications: checked }))
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Push Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive push notifications in browser</p>
                  </div>
                  <Switch
                    checked={notifications.pushNotifications}
                    onCheckedChange={(checked) => setNotifications((prev) => ({ ...prev, pushNotifications: checked }))}
                  />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Build Likes</Label>
                    <p className="text-sm text-muted-foreground">When someone likes your build</p>
                  </div>
                  <Switch
                    checked={notifications.buildLikes}
                    onCheckedChange={(checked) => setNotifications((prev) => ({ ...prev, buildLikes: checked }))}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Build Comments</Label>
                    <p className="text-sm text-muted-foreground">When someone comments on your build</p>
                  </div>
                  <Switch
                    checked={notifications.buildComments}
                    onCheckedChange={(checked) => setNotifications((prev) => ({ ...prev, buildComments: checked }))}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>New Followers</Label>
                    <p className="text-sm text-muted-foreground">When someone follows you</p>
                  </div>
                  <Switch
                    checked={notifications.newFollowers}
                    onCheckedChange={(checked) => setNotifications((prev) => ({ ...prev, newFollowers: checked }))}
                  />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>System Updates</Label>
                    <p className="text-sm text-muted-foreground">Important platform updates and announcements</p>
                  </div>
                  <Switch
                    checked={notifications.systemUpdates}
                    onCheckedChange={(checked) => setNotifications((prev) => ({ ...prev, systemUpdates: checked }))}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Weekly Digest</Label>
                    <p className="text-sm text-muted-foreground">Weekly summary of platform activity</p>
                  </div>
                  <Switch
                    checked={notifications.weeklyDigest}
                    onCheckedChange={(checked) => setNotifications((prev) => ({ ...prev, weeklyDigest: checked }))}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Marketing Emails</Label>
                    <p className="text-sm text-muted-foreground">Tips, features, and promotional content</p>
                  </div>
                  <Switch
                    checked={notifications.marketingEmails}
                    onCheckedChange={(checked) => setNotifications((prev) => ({ ...prev, marketingEmails: checked }))}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Privacy Tab */}
        <TabsContent value="privacy" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="size-5" />
                Privacy Settings
              </CardTitle>
              <CardDescription>Control who can see your information and interact with you</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Profile Visibility</Label>
                  <Select
                    value={privacy.profileVisibility}
                    onValueChange={(value) => setPrivacy((prev) => ({ ...prev, profileVisibility: value as any }))}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="public">Public - Anyone can view</SelectItem>
                      <SelectItem value="private">Private - Only you can view</SelectItem>
                      <SelectItem value="friends">Friends - Only followers can view</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Show Email Address</Label>
                    <p className="text-sm text-muted-foreground">Display your email on your profile</p>
                  </div>
                  <Switch
                    checked={privacy.showEmail}
                    onCheckedChange={(checked) => setPrivacy((prev) => ({ ...prev, showEmail: checked }))}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Show Location</Label>
                    <p className="text-sm text-muted-foreground">Display your location on your profile</p>
                  </div>
                  <Switch
                    checked={privacy.showLocation}
                    onCheckedChange={(checked) => setPrivacy((prev) => ({ ...prev, showLocation: checked }))}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Show Join Date</Label>
                    <p className="text-sm text-muted-foreground">Display when you joined the platform</p>
                  </div>
                  <Switch
                    checked={privacy.showJoinDate}
                    onCheckedChange={(checked) => setPrivacy((prev) => ({ ...prev, showJoinDate: checked }))}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Allow Direct Messages</Label>
                    <p className="text-sm text-muted-foreground">Let other users send you direct messages</p>
                  </div>
                  <Switch
                    checked={privacy.allowDirectMessages}
                    onCheckedChange={(checked) => setPrivacy((prev) => ({ ...prev, allowDirectMessages: checked }))}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Show Online Status</Label>
                    <p className="text-sm text-muted-foreground">Let others see when you're online</p>
                  </div>
                  <Switch
                    checked={privacy.showOnlineStatus}
                    onCheckedChange={(checked) => setPrivacy((prev) => ({ ...prev, showOnlineStatus: checked }))}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Search Engine Indexing</Label>
                    <p className="text-sm text-muted-foreground">Allow search engines to index your profile</p>
                  </div>
                  <Switch
                    checked={privacy.indexProfile}
                    onCheckedChange={(checked) => setPrivacy((prev) => ({ ...prev, indexProfile: checked }))}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security Tab */}
        <TabsContent value="security" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="size-5" />
                Security Settings
              </CardTitle>
              <CardDescription>Manage your account security and authentication</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Two-Factor Authentication</Label>
                    <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                  </div>
                  <Switch
                    checked={security.twoFactorEnabled}
                    onCheckedChange={(checked) => setSecurity((prev) => ({ ...prev, twoFactorEnabled: checked }))}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Login Alerts</Label>
                    <p className="text-sm text-muted-foreground">Get notified of new login attempts</p>
                  </div>
                  <Switch
                    checked={security.loginAlerts}
                    onCheckedChange={(checked) => setSecurity((prev) => ({ ...prev, loginAlerts: checked }))}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Session Timeout</Label>
                  <Select
                    value={security.sessionTimeout.toString()}
                    onValueChange={(value) =>
                      setSecurity((prev) => ({ ...prev, sessionTimeout: Number.parseInt(value) }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="15">15 minutes</SelectItem>
                      <SelectItem value="30">30 minutes</SelectItem>
                      <SelectItem value="60">1 hour</SelectItem>
                      <SelectItem value="240">4 hours</SelectItem>
                      <SelectItem value="1440">24 hours</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Separator />

                <div className="space-y-2">
                  <Label>Connected Devices</Label>
                  <div className="space-y-2">
                    {security.allowedDevices.map((device, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center gap-2">
                          <Settings className="size-4" />
                          <span>{device}</span>
                          {index === 0 && <Badge variant="secondary">Current</Badge>}
                        </div>
                        {index !== 0 && (
                          <Button variant="outline" size="sm">
                            Revoke
                          </Button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h4 className="font-medium">Account Actions</h4>

                  <div className="flex gap-4">
                    <Button variant="outline" onClick={handleExportData}>
                      <Download className="mr-2 size-4" />
                      Export Data
                    </Button>

                    <Button variant="outline" onClick={onLogout}>
                      <Key className="mr-2 size-4" />
                      Sign Out All Devices
                    </Button>
                  </div>

                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="destructive">
                        <Trash2 className="mr-2 size-4" />
                        Delete Account
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle className="flex items-center gap-2">
                          <AlertTriangle className="text-destructive size-5" />
                          Delete Account
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently delete your account, all your builds, and
                          remove all associated data from our servers.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={handleDeleteAccount}
                          className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                        >
                          Delete Account
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
