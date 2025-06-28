import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useConvex } from "convex/react";
import { api } from "convex-config";
import { IBaseUpdate, IUpdate } from "@/app/types/update-types";
import { Id } from "convex-config/dataModel";

export const useUpdatesQuery = () => {
  const convex = useConvex();

  return useQuery({
    queryKey: ["updates"],
    queryFn: () => convex.query(api.updates.get),
    refetchOnWindowFocus: false,
    staleTime: 60 * 1000,
  });
};

export type CreateUpdateInput = Omit<IBaseUpdate, "_creationTime">;

export const useUpdateMutation = () => {
  const convex = useConvex();
  const queryClient = useQueryClient();

  const handleOptimisticError = (context: { previousUpdates?: IUpdate[] } | undefined) => {
    if (context?.previousUpdates) {
      queryClient.setQueryData(["updates"], context.previousUpdates);
    }
  };

  const handleSuccess = () => {
    queryClient.invalidateQueries({ queryKey: ["updates"] });
  };

  const createMutation = useMutation({
    mutationFn: (updateData: CreateUpdateInput) => 
      convex.mutation(api.updates.add, updateData),
    
    onMutate: async (updateData: CreateUpdateInput) => {
      await queryClient.cancelQueries({ queryKey: ["updates"] });
      const previousUpdates = queryClient.getQueryData<IUpdate[]>(["updates"]);

      const optimisticUpdate: IUpdate = {
        _id: `temp-${Date.now()}` as Id<"updates">,
        _creationTime: Date.now(),
        ...updateData,
        title: updateData.title || "",
        version: updateData.version || "",
        date: updateData.date || new Date().toISOString(),
        type: updateData.type || "general",
        priority: updateData.priority || "normal",
        relatedWebsite: updateData.relatedWebsite || "",
        tags: updateData.tags || [],
        richTextContent: updateData.richTextContent || "",
        createdBy: updateData.createdBy || "unknown",
        isPublished: updateData.isPublished || false,
      };

      queryClient.setQueryData<IUpdate[]>(["updates"], (old) => 
        old ? [...old, optimisticUpdate] : [optimisticUpdate]
      );

      return { previousUpdates };
    },
    onError: (_, __, context) => handleOptimisticError(context),
    onSuccess: handleSuccess,
  });

  const updateMutation = useMutation({
    mutationFn: (update: IUpdate) => 
      convex.mutation(api.updates.update, {
        id: update._id,
        title: update.title,
        version: update.version,
        date: update.date,
        type: update.type,
        priority: update.priority,
        relatedWebsite: update.relatedWebsite,
        tags: update.tags,
        richTextContent: update.richTextContent,
        isPublished: update.isPublished,
        createdBy: update.createdBy,
      }),
    
    onMutate: async (update) => {
      await queryClient.cancelQueries({ queryKey: ["updates"] });
      const previousUpdates = queryClient.getQueryData<IUpdate[]>(["updates"]);
      
      queryClient.setQueryData<IUpdate[]>(["updates"], (old) =>
        old?.map((u) => u._id === update._id ? { ...u, ...update } : u) || []
      );
      
      return { previousUpdates };
    },
    onError: (_, __, context) => handleOptimisticError(context),
    onSuccess: handleSuccess,
  });

  return {
    createUpdate: createMutation.mutate,
    isCreatingUpdate: createMutation.isPending,
    isCreateError: createMutation.isError,
    createError: createMutation.error,
    updateUpdate: updateMutation.mutate,
    isUpdatingUpdate: updateMutation.isPending,
    isUpdateError: updateMutation.isError,
    updateError: updateMutation.error,
  };
};
