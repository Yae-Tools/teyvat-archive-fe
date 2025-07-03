import {  IUpdate } from "@/app/types/update-types";
import { memo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Calendar, ExternalLink, Globe, Tag, Trash2 } from "lucide-react";
import { Button } from "./ui/button";

export const UpdateCard = memo(
  ({
    update,
    onEdit,
    onDelete,
    getTypeConfig,
    getPriorityConfig,
  }: {
    update: IUpdate;
    onEdit: (update: IUpdate) => void;
    onDelete: (id: string) => void;
    getTypeConfig: (
      type: string
    ) =>
      | { label: string; color: string }
      | { value: string; label: string; color: string };
    getPriorityConfig: (
      priority: string
    ) =>
      | { label: string; color: string }
      | { value: string; label: string; color: string };
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
                  <Calendar className="size-4" />
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
                    <Globe className="size-4" />
                    Website
                    <ExternalLink className="size-3" />
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
                onClick={() => onDelete(update._id)}
              >
                <Trash2 className="size-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div
            className="prose prose-sm max-w-none dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: update.richTextContent }}
          />
          {update.tags.length > 0 && (
            <div className="flex items-center gap-2 mt-4">
              <Tag className="text-muted-foreground size-4" />
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