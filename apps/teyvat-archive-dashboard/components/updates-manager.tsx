"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Plus, Save, Trash2 } from "lucide-react";
import { RichTextEditor } from "./rich-text-editor";
import {
  FormState,
  IBaseUpdate,
  IUpdate,
  PRIORITY_LEVELS,
  UPDATE_TYPES,
} from "@/app/types/update-types";
import { UpdateCard } from "./update-card";
import { useUpdateMutation, useUpdatesQuery } from "@/hooks/use-updates";
import { useUser } from "@clerk/nextjs";

const getInitialFormState = (): FormState => ({
  title: "",
  version: "",
  date: new Date().toISOString().split("T")[0],
  richTextContent: "",
  type: "feature",
  priority: "medium",
  relatedWebsite: "",
  tags: [],
  isPublished: false,
});

export function UpdatesManager() {
  const { user } = useUser();
  const { data: updates=[], isLoading, error } = useUpdatesQuery();
  const { createUpdate } = useUpdateMutation();

  const [isCreating, setIsCreating] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormState>(getInitialFormState());
  const [newTag, setNewTag] = useState("");

  const handleFormChange = (
    field: keyof FormState,
    value: string | string[] | boolean
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (editingId) {
      // TODO: Update existing update
      console.log("Update existing:", formData);
      // createUpdate(formData as IBaseUpdate);
      setEditingId(null);
    } else {
      createUpdate({
        ...formData,
        createdBy: user?.id || "unknown",
      } as IBaseUpdate);

      console.log("Create new:", formData);
    }

    resetForm();
  };

  const resetForm = () => {
    setFormData(getInitialFormState());
    setIsCreating(false);
    setEditingId(null);
  };

  const handleEdit = (update: IUpdate) => {
    setFormData(update);
    setEditingId(update._id);
    setIsCreating(true);
  };

  const handleDelete = (id: string) => {
    // TODO: Delete update
    console.log("Delete:", id);
  };

  const addTag = () => {
    if (newTag.trim() && !formData.tags?.includes(newTag.trim())) {
      setFormData((prev) => ({
        ...prev,
        tags: [...(prev.tags || []), newTag.trim()],
      }));
      setNewTag("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags?.filter((tag) => tag !== tagToRemove) || [],
    }));
  };

  const getTypeConfig = (type: string) =>
    UPDATE_TYPES.find((t) => t.value === type) || UPDATE_TYPES[0];

  const getPriorityConfig = (priority: string) =>
    PRIORITY_LEVELS.find((p) => p.value === priority) || PRIORITY_LEVELS[1];

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-6 max-w-6xl">
        <Card>
          <CardContent className="text-center py-12">
            <div className="text-center space-y-2">
              <h3 className="text-lg font-semibold">Error Loading Updates</h3>
              <p className="text-muted-foreground">
                {error.message || "An unexpected error occurred."}
              </p>
              <Button onClick={() => window.location.reload()}>Retry</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const EmptyState = () => (
    <Card>
      <CardContent className="flex flex-col items-center justify-center py-12">
        <div className="text-center space-y-2">
          <h3 className="text-lg font-semibold">No updates yet</h3>
          <p className="text-muted-foreground">
            Create your first update to get started
          </p>
          <Button onClick={() => setIsCreating(true)}>
            <Plus className="w-4 h-4 mr-2" />
            Create Update
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="container mx-auto p-6 max-w-6xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold">Updates & Changelog</h1>
          <p className="text-muted-foreground">
            Manage and publish updates for your platform
          </p>
        </div>
        <Button onClick={() => setIsCreating(true)} size="lg">
          <Plus className="w-4 h-4 mr-2" />
          Create Update
        </Button>
      </div>

      {isCreating && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>
              {editingId ? "Edit Update" : "Create New Update"}
            </CardTitle>
            <CardDescription>
              {editingId
                ? "Modify the existing update entry"
                : "Add a new update to your changelog"}
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
                    onChange={(e) => handleFormChange("title", e.target.value)}
                    placeholder="Update title"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="version">Version</Label>
                  <Input
                    id="version"
                    value={formData.version}
                    onChange={(e) =>
                      handleFormChange("version", e.target.value)
                    }
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
                    onChange={(e) => handleFormChange("date", e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="type">Type</Label>
                  <Select
                    value={formData.type}
                    onValueChange={(value) =>
                      handleFormChange("type", value as IBaseUpdate["type"])
                    }
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
                      handleFormChange(
                        "priority",
                        value as IBaseUpdate["priority"]
                      )
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
                <Label htmlFor="relatedWebsite">
                  Related Website (Optional)
                </Label>
                <Input
                  id="relatedWebsite"
                  type="url"
                  value={formData.relatedWebsite}
                  onChange={(e) =>
                    handleFormChange("relatedWebsite", e.target.value)
                  }
                  placeholder="https://example.com"
                />
              </div>

              <div className="space-y-2">
                <Label>Tags</Label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {formData.tags?.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="cursor-pointer"
                      onClick={() => removeTag(tag)}
                    >
                      {tag} <Trash2 className="w-3 h-3 ml-1" />
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Input
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    placeholder="Add tag"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        addTag();
                      }
                    }}
                  />
                  <Button type="button" onClick={addTag} variant="outline">
                    Add
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <RichTextEditor
                  value={formData.richTextContent ?? ""}
                  onChange={(value) =>
                    handleFormChange("richTextContent", value)
                  }
                  placeholder="Detailed description of the update..."
                />
              </div>

              <div className="flex justify-end gap-4">
                <Button type="button" variant="outline" onClick={resetForm}>
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

      <div className="space-y-4">
        {updates.map((update) => (
          <UpdateCard
            key={update._id}
            update={update}
            onEdit={handleEdit}
            onDelete={handleDelete}
            getTypeConfig={getTypeConfig}
            getPriorityConfig={getPriorityConfig}
          />
        ))}
      </div>

      {updates.length === 0 && !isCreating && <EmptyState />}
    </div>
  );
}
