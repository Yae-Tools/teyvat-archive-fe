"use client";

import { useState, useCallback, useMemo, useReducer, memo } from "react";
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
import {
  Plus,
  Save,
  Trash2,
  ExternalLink,
  Calendar,
  Tag,
  Globe,
} from "lucide-react";
import { RichTextEditor } from "./rich-text-editor";

// Memoized Update Card Component
const UpdateCard = memo(
  ({
    update,
    onEdit,
    onDelete,
    getTypeConfig,
    getPriorityConfig,
  }: {
    update: Update;
    onEdit: (update: Update) => void;
    onDelete: (id: string) => void;
    getTypeConfig: (type: string) => any;
    getPriorityConfig: (priority: string) => any;
  }) => {
    const typeConfig = getTypeConfig(update.type);
    const priorityConfig = getPriorityConfig(update.priority);

    return (
      <Card>
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <CardTitle className="text-xl">{update.title}</CardTitle>
                <Badge variant="outline">{update.version}</Badge>
                {!update.isPublished && (
                  <Badge variant="secondary">Draft</Badge>
                )}
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
                  <div
                    className={`w-2 h-2 rounded-full ${priorityConfig.color}`}
                  />
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
              <Button
                variant="outline"
                size="sm"
                onClick={() => onEdit(update)}
              >
                Edit
              </Button>
              <Button
                variant="destructive"
                size="sm"
                onClick={() => onDelete(update.id)}
              >
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
    );
  }
);

UpdateCard.displayName = "UpdateCard";

interface Update {
  id: string;
  title: string;
  version: string;
  date: string;
  description: string;
  type: "feature" | "bugfix" | "improvement" | "security" | "breaking";
  priority: "low" | "medium" | "high" | "critical";
  relatedWebsite?: string;
  tags: string[];
  isPublished: boolean;
}

type FormState = Partial<Update>;

type FormAction =
  | { type: "SET_FIELD"; field: keyof FormState; value: any }
  | { type: "SET_FORM"; payload: FormState }
  | { type: "RESET_FORM" }
  | { type: "ADD_TAG"; tag: string }
  | { type: "REMOVE_TAG"; tag: string };

const getInitialFormState = (): FormState => ({
  title: "",
  version: "",
  date: new Date().toISOString().split("T")[0],
  description: "",
  type: "feature",
  priority: "medium",
  relatedWebsite: "",
  tags: [],
  isPublished: false,
});

const formReducer = (state: FormState, action: FormAction): FormState => {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "SET_FORM":
      return { ...action.payload };
    case "RESET_FORM":
      return getInitialFormState();
    case "ADD_TAG":
      const currentTags = state.tags || [];
      if (action.tag.trim() && !currentTags.includes(action.tag.trim())) {
        return { ...state, tags: [...currentTags, action.tag.trim()] };
      }
      return state;
    case "REMOVE_TAG":
      return {
        ...state,
        tags: (state.tags || []).filter((tag) => tag !== action.tag),
      };
    default:
      return state;
  }
};

const UPDATE_TYPES = [
  { value: "feature", label: "Feature", color: "bg-green-500" },
  { value: "bugfix", label: "Bug Fix", color: "bg-red-500" },
  { value: "improvement", label: "Improvement", color: "bg-blue-500" },
  { value: "security", label: "Security", color: "bg-yellow-500" },
  { value: "breaking", label: "Breaking Change", color: "bg-purple-500" },
];

const PRIORITY_LEVELS = [
  { value: "low", label: "Low", color: "bg-gray-500" },
  { value: "medium", label: "Medium", color: "bg-orange-500" },
  { value: "high", label: "High", color: "bg-red-500" },
  { value: "critical", label: "Critical", color: "bg-red-700" },
];

export function UpdatesManager() {
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
      description:
        "Implemented system-wide dark mode with automatic theme detection and manual toggle options.",
      type: "feature",
      priority: "medium",
      relatedWebsite: "https://genshin-build-hub.com",
      tags: ["theme", "ui", "accessibility"],
      isPublished: true,
    },
  ]);

  const [isCreating, setIsCreating] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, dispatchForm] = useReducer(
    formReducer,
    getInitialFormState()
  );
  const [newTag, setNewTag] = useState("");

  // Memoized configurations
  const typeConfigMap = useMemo(
    () => Object.fromEntries(UPDATE_TYPES.map((type) => [type.value, type])),
    []
  );

  const priorityConfigMap = useMemo(
    () =>
      Object.fromEntries(
        PRIORITY_LEVELS.map((priority) => [priority.value, priority])
      ),
    []
  );

  // Optimized handlers with useCallback
  const handleFormFieldChange = useCallback(
    (field: keyof FormState, value: any) => {
      dispatchForm({ type: "SET_FIELD", field, value });
    },
    []
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      if (editingId) {
        // Update existing
        setUpdates((prev) =>
          prev.map((update) =>
            update.id === editingId
              ? ({ ...update, ...formData } as Update)
              : update
          )
        );
        setEditingId(null);
      } else {
        // Create new
        const newUpdate: Update = {
          id: Date.now().toString(),
          ...formData,
        } as Update;

        setUpdates((prev) => [newUpdate, ...prev]);
      }

      // Reset form
      dispatchForm({ type: "RESET_FORM" });
      setIsCreating(false);
    },
    [editingId, formData]
  );

  const handleEdit = useCallback((update: Update) => {
    dispatchForm({ type: "SET_FORM", payload: update });
    setEditingId(update.id);
    setIsCreating(true);
  }, []);

  const handleDelete = useCallback((id: string) => {
    setUpdates((prev) => prev.filter((update) => update.id !== id));
  }, []);

  const handleCancel = useCallback(() => {
    setIsCreating(false);
    setEditingId(null);
    dispatchForm({ type: "RESET_FORM" });
  }, []);

  const addTag = useCallback(() => {
    if (newTag.trim()) {
      dispatchForm({ type: "ADD_TAG", tag: newTag.trim() });
      setNewTag("");
    }
  }, [newTag]);

  const removeTag = useCallback((tagToRemove: string) => {
    dispatchForm({ type: "REMOVE_TAG", tag: tagToRemove });
  }, []);

  const handleTagKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter") {
        e.preventDefault();
        addTag();
      }
    },
    [addTag]
  );

  const handleCreateClick = useCallback(() => {
    setIsCreating(true);
  }, []);

  const getTypeConfig = useCallback(
    (type: string) => typeConfigMap[type] || UPDATE_TYPES[0],
    [typeConfigMap]
  );

  const getPriorityConfig = useCallback(
    (priority: string) => priorityConfigMap[priority] || PRIORITY_LEVELS[1],
    [priorityConfigMap]
  );

  // Memoized empty state
  const emptyState = useMemo(
    () => (
      <Card>
        <CardContent className="flex flex-col items-center justify-center py-12">
          <div className="text-center space-y-2">
            <h3 className="text-lg font-semibold">No updates yet</h3>
            <p className="text-muted-foreground">
              Create your first update to get started
            </p>
            <Button onClick={handleCreateClick}>
              <Plus className="w-4 h-4 mr-2" />
              Create Update
            </Button>
          </div>
        </CardContent>
      </Card>
    ),
    [handleCreateClick]
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
        <Button onClick={handleCreateClick} size="lg">
          <Plus className="w-4 h-4 mr-2" />
          Create Update
        </Button>
      </div>

      {/* Create/Edit Form */}
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
                    onChange={(e) =>
                      handleFormFieldChange("title", e.target.value)
                    }
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
                      handleFormFieldChange("version", e.target.value)
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
                    onChange={(e) =>
                      handleFormFieldChange("date", e.target.value)
                    }
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
                      handleFormFieldChange("type", value as Update["type"])
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
                      handleFormFieldChange(
                        "priority",
                        value as Update["priority"]
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
                    handleFormFieldChange("relatedWebsite", e.target.value)
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
                    onKeyDown={handleTagKeyDown}
                  />
                  <Button type="button" onClick={addTag} variant="outline">
                    Add
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <RichTextEditor
                  value={formData.description ?? ""}
                  onChange={(value) =>
                    handleFormFieldChange("description", value)
                  }
                  placeholder="Detailed description of the update..."
                />
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="isPublished"
                  checked={formData.isPublished}
                  onChange={(e) =>
                    handleFormFieldChange("isPublished", e.target.checked)
                  }
                  className="rounded"
                />
                <Label htmlFor="isPublished">Publish immediately</Label>
              </div>

              <div className="flex justify-end gap-4">
                <Button type="button" variant="outline" onClick={handleCancel}>
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
        {updates.map((update) => (
          <UpdateCard
            key={update.id}
            update={update}
            onEdit={handleEdit}
            onDelete={handleDelete}
            getTypeConfig={getTypeConfig}
            getPriorityConfig={getPriorityConfig}
          />
        ))}
      </div>

      {updates.length === 0 && emptyState}
    </div>
  );
}
