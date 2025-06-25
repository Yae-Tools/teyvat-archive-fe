"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Plus, Save, Trash2, ExternalLink, Calendar, Tag, Globe } from "lucide-react"
import { RichTextEditor } from "./rich-text-editor"

interface Update {
  id: string
  title: string
  version: string
  date: string
  description: string
  type: "feature" | "bugfix" | "improvement" | "security" | "breaking"
  priority: "low" | "medium" | "high" | "critical"
  relatedWebsite?: string
  tags: string[]
  isPublished: boolean
}

interface UpdatesManagerProps {
  user: { id: string; displayName: string }
}

const UPDATE_TYPES = [
  { value: "feature", label: "Feature", color: "bg-green-500" },
  { value: "bugfix", label: "Bug Fix", color: "bg-red-500" },
  { value: "improvement", label: "Improvement", color: "bg-blue-500" },
  { value: "security", label: "Security", color: "bg-yellow-500" },
  { value: "breaking", label: "Breaking Change", color: "bg-purple-500" },
]

const PRIORITY_LEVELS = [
  { value: "low", label: "Low", color: "bg-gray-500" },
  { value: "medium", label: "Medium", color: "bg-orange-500" },
  { value: "high", label: "High", color: "bg-red-500" },
  { value: "critical", label: "Critical", color: "bg-red-700" },
]

export function UpdatesManager({ user }: UpdatesManagerProps) {
  const [updates, setUpdates] = useState<Update[]>([
    {
      id: "1",
      title: "Rich Text Editor Implementation",
      version: "1.2.0",
      date: "2024-01-15",
      description:
        "Added comprehensive rich text editing capabilities to all note fields with formatting options including bold, italic, colors, and more.",
      type: "feature",
      priority: "high",
      relatedWebsite: "https://genshin-build-hub.com",
      tags: ["editor", "ui", "enhancement"],
      isPublished: true,
    },
    {
      id: "2",
      title: "Dark Mode Support",
      version: "1.1.0",
      date: "2024-01-10",
      description: "Implemented system-wide dark mode with automatic theme detection and manual toggle options.",
      type: "feature",
      priority: "medium",
      relatedWebsite: "https://genshin-build-hub.com",
      tags: ["theme", "ui", "accessibility"],
      isPublished: true,
    },
  ])

  const [isCreating, setIsCreating] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [formData, setFormData] = useState<Partial<Update>>({
    title: "",
    version: "",
    date: new Date().toISOString().split("T")[0],
    description: "",
    type: "feature",
    priority: "medium",
    relatedWebsite: "",
    tags: [],
    isPublished: false,
  })

  const [newTag, setNewTag] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (editingId) {
      // Update existing
      setUpdates((prev) =>
        prev.map((update) => (update.id === editingId ? ({ ...update, ...formData } as Update) : update)),
      )
      setEditingId(null)
    } else {
      // Create new
      const newUpdate: Update = {
        id: Date.now().toString(),
        ...formData,
      } as Update

      setUpdates((prev) => [newUpdate, ...prev])
    }

    // Reset form
    setFormData({
      title: "",
      version: "",
      date: new Date().toISOString().split("T")[0],
      description: "",
      type: "feature",
      priority: "medium",
      relatedWebsite: "",
      tags: [],
      isPublished: false,
    })
    setIsCreating(false)
  }

  const handleEdit = (update: Update) => {
    setFormData(update)
    setEditingId(update.id)
    setIsCreating(true)
  }

  const handleDelete = (id: string) => {
    setUpdates((prev) => prev.filter((update) => update.id !== id))
  }

  const addTag = () => {
    if (newTag.trim() && !formData.tags?.includes(newTag.trim())) {
      setFormData((prev) => ({
        ...prev,
        tags: [...(prev.tags || []), newTag.trim()],
      }))
      setNewTag("")
    }
  }

  const removeTag = (tagToRemove: string) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags?.filter((tag) => tag !== tagToRemove) || [],
    }))
  }

  const getTypeConfig = (type: string) => UPDATE_TYPES.find((t) => t.value === type) || UPDATE_TYPES[0]
  const getPriorityConfig = (priority: string) =>
    PRIORITY_LEVELS.find((p) => p.value === priority) || PRIORITY_LEVELS[1]

  return (
    <div className="container mx-auto p-6 max-w-6xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold">Updates & Changelog</h1>
          <p className="text-muted-foreground">Manage and publish updates for your platform</p>
        </div>
        <Button onClick={() => setIsCreating(true)} size="lg">
          <Plus className="w-4 h-4 mr-2" />
          Create Update
        </Button>
      </div>

      {/* Create/Edit Form */}
      {isCreating && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>{editingId ? "Edit Update" : "Create New Update"}</CardTitle>
            <CardDescription>
              {editingId ? "Modify the existing update entry" : "Add a new update to your changelog"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
                    placeholder="Update title"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="version">Version</Label>
                  <Input
                    id="version"
                    value={formData.version}
                    onChange={(e) => setFormData((prev) => ({ ...prev, version: e.target.value }))}
                    placeholder="e.g., 1.2.0"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="date">Date</Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData((prev) => ({ ...prev, date: e.target.value }))}
                    required
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="type">Type</Label>
                  <Select
                    value={formData.type}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, type: value as Update["type"] }))}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {UPDATE_TYPES.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="priority">Priority</Label>
                  <Select
                    value={formData.priority}
                    onValueChange={(value) =>
                      setFormData((prev) => ({ ...prev, priority: value as Update["priority"] }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {PRIORITY_LEVELS.map((priority) => (
                        <SelectItem key={priority.value} value={priority.value}>
                          {priority.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="relatedWebsite">Related Website (Optional)</Label>
                <Input
                  id="relatedWebsite"
                  type="url"
                  value={formData.relatedWebsite}
                  onChange={(e) => setFormData((prev) => ({ ...prev, relatedWebsite: e.target.value }))}
                  placeholder="https://example.com"
                />
              </div>

              <div className="space-y-2">
                <Label>Tags</Label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {formData.tags?.map((tag) => (
                    <Badge key={tag} variant="secondary" className="cursor-pointer" onClick={() => removeTag(tag)}>
                      {tag} <Trash2 className="w-3 h-3 ml-1" />
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Input
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    placeholder="Add tag"
                    onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addTag())}
                  />
                  <Button type="button" onClick={addTag} variant="outline">
                    Add
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <RichTextEditor
                  value={formData.description || ""}
                  onChange={(value) => setFormData((prev) => ({ ...prev, description: value }))}
                  placeholder="Detailed description of the update..."
                />
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="isPublished"
                  checked={formData.isPublished}
                  onChange={(e) => setFormData((prev) => ({ ...prev, isPublished: e.target.checked }))}
                  className="rounded"
                />
                <Label htmlFor="isPublished">Publish immediately</Label>
              </div>

              <div className="flex justify-end gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setIsCreating(false)
                    setEditingId(null)
                    setFormData({
                      title: "",
                      version: "",
                      date: new Date().toISOString().split("T")[0],
                      description: "",
                      type: "feature",
                      priority: "medium",
                      relatedWebsite: "",
                      tags: [],
                      isPublished: false,
                    })
                  }}
                >
                  Cancel
                </Button>
                <Button type="submit">
                  <Save className="w-4 h-4 mr-2" />
                  {editingId ? "Update" : "Create"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Updates List */}
      <div className="space-y-4">
        {updates.map((update) => {
          const typeConfig = getTypeConfig(update.type)
          const priorityConfig = getPriorityConfig(update.priority)

          return (
            <Card key={update.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CardTitle className="text-xl">{update.title}</CardTitle>
                      <Badge variant="outline">{update.version}</Badge>
                      {!update.isPublished && <Badge variant="secondary">Draft</Badge>}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(update.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <div className={`w-2 h-2 rounded-full ${typeConfig.color}`} />
                        {typeConfig.label}
                      </div>
                      <div className="flex items-center gap-1">
                        <div className={`w-2 h-2 rounded-full ${priorityConfig.color}`} />
                        {priorityConfig.label} Priority
                      </div>
                      {update.relatedWebsite && (
                        <a
                          href={update.relatedWebsite}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 hover:text-primary"
                        >
                          <Globe className="w-4 h-4" />
                          Website
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={() => handleEdit(update)}>
                      Edit
                    </Button>
                    <Button variant="destructive" size="sm" onClick={() => handleDelete(update.id)}>
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div
                  className="prose prose-sm max-w-none dark:prose-invert"
                  dangerouslySetInnerHTML={{ __html: update.description }}
                />
                {update.tags.length > 0 && (
                  <div className="flex items-center gap-2 mt-4">
                    <Tag className="w-4 h-4 text-muted-foreground" />
                    <div className="flex flex-wrap gap-1">
                      {update.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )
        })}
      </div>

      {updates.length === 0 && (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <div className="text-center space-y-2">
              <h3 className="text-lg font-semibold">No updates yet</h3>
              <p className="text-muted-foreground">Create your first update to get started</p>
              <Button onClick={() => setIsCreating(true)}>
                <Plus className="w-4 h-4 mr-2" />
                Create Update
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
