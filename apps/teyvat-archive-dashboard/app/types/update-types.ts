import { Id } from "convex-config/dataModel";

export interface IBaseUpdate {
  _creationTime: number;
  title: string;
  version: string;
  date: string;
  type: string;
  priority: string;
  relatedWebsite: string;
  tags: string[];
  richTextContent: string;
  createdBy: string;
  isPublished: boolean;
}

export interface IUpdate extends IBaseUpdate {
  _id: Id<"updates">;
}

export type FormState = Partial<IUpdate>;

export const UPDATE_TYPES = [
  { value: "feature", label: "Feature", color: "bg-green-500" },
  { value: "bugfix", label: "Bug Fix", color: "bg-red-500" },
  { value: "improvement", label: "Improvement", color: "bg-blue-500" },
  { value: "security", label: "Security", color: "bg-yellow-500" },
  { value: "breaking", label: "Breaking Change", color: "bg-purple-500" },
] as const;

export const PRIORITY_LEVELS = [
  { value: "low", label: "Low", color: "bg-gray-500" },
  { value: "medium", label: "Medium", color: "bg-orange-500" },
  { value: "high", label: "High", color: "bg-red-500" },
  { value: "critical", label: "Critical", color: "bg-red-700" },
] as const;

