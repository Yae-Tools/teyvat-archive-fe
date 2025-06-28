import { query } from "./_generated/server";

export const getCurrentUser = query({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (identity === null) {
      throw new Error("Not authenticated");
    }

    return {
      id: identity.id,
      username: identity.username ?? identity.email ?? "User",
      displayName: identity.fullName ?? identity.firstName ?? "User",
      avatar: identity.imageUrl ?? "/placeholder.svg",
      provider: identity.provider,
    };
  },
});
