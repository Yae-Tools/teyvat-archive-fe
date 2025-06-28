import { defineSchema } from "convex/server";
import { updates } from "./updates";

const schema = defineSchema({
    updates: updates,
})

export default schema;