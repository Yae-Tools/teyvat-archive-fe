import { v } from "convex/values";

const updatesSchema = {
  date: v.string(),
  version: v.string(),
  title: v.string(),
  type: v.string(),
  priority: v.string(),
  relatedWebsite: v.string(),
  tags: v.array(v.string()),
//   rich text content store as json
  richTextContent: v.any(),
};
