import { defineTable } from "convex/server";
import { v } from "convex/values";

import { mutation, query } from "./_generated/server";

const updatesSchema = {
  date: v.string(),
  version: v.string(),
  title: v.string(),
  type: v.string(),
  priority: v.string(),
  relatedWebsite: v.string(),
  tags: v.array(v.string()),
  richTextContent: v.string(),
  isPublished: v.boolean(),
  createdBy: v.string(),
};

export const updates = defineTable(updatesSchema)
.index("byDate", ["date"])
.index("byVersion", ["version"])
.index("byType", ["type"])
.index("byPriority", ["priority"])
.index("byRelatedWebsite", ["relatedWebsite"])
.index("byCreatedBy", ["createdBy"])
.index("byTags", ["tags"])


export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("updates").collect();
  },
});

export const add = mutation({
  args: {
    date: v.string(),
    version: v.string(),
    title: v.string(),
    type: v.string(),
    priority: v.string(),
    relatedWebsite: v.string(),
    tags: v.array(v.string()),
    richTextContent: v.string(),
    isPublished: v.boolean(),
    createdBy: v.string(),
  },
  handler: async (ctx, args) => {
    const { date, version, title, type, priority, relatedWebsite, tags, richTextContent, createdBy } = args;
    return await ctx.db.insert("updates", {
      date,
      version,
      title,
      type,
      priority,
      relatedWebsite,
      tags,
      richTextContent,
      isPublished: false, // Default to not published
      createdBy,
    });
  }
});

export const update = mutation({
  args: {
    id: v.id("updates"),
    date: v.string(),
    version: v.string(),
    title: v.string(),
    type: v.string(),
    priority: v.string(),
    relatedWebsite: v.string(),
    tags: v.array(v.string()),
    richTextContent: v.string(),
    isPublished: v.boolean(),
    createdBy: v.string(),
  },
  handler: async (ctx, args) => {
    const { id, date, version, title, type, priority, relatedWebsite, tags, richTextContent, isPublished, createdBy } = args;
    return await ctx.db.patch(id, {
      date,
      version,
      title,
      type,
      priority,
      relatedWebsite,
      tags,
      richTextContent,
      isPublished,
      createdBy,
    });
  }
});