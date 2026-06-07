import zod from "zod";

export const aiChatResponseSchema = zod.object({
    title: zod.string()
        .min(1, "The title is empty.")
        .max(300),
    context: zod.string()
        .min(1, "The context is empty")
        .max(600)
});