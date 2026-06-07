import zod from "zod";


export const questionSchema = zod.object({
    question: zod.string()
        .min(1, "Question is empty.")
        .max(300, "Question is too long.")
});
