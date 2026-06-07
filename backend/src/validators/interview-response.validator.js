import zod from "zod";
import { questionSchema } from "./question.validator.js";

export const aiInterviewResponseSchema = zod.object({
    title: zod.string()
        .min(1, "The title is empty.")
        .max(300),


    description: zod.string()
        .min(1, "The description is empty.")
        .max(600),

    questions: zod.array(questionSchema)
        .min(1, "Questions array is empty.")
});



export const aiInterviewEvaluationSchema = zod.object({

    status: zod.enum([
        "correct",
        "partial",
        "incorrect"
    ]),

    icon: zod.enum([
        "✅",
        "⚠️",
        "❌"
    ]),

    feedback: zod.string()
        .min(1, "Feedback is empty.")
        .max(500),

    nextQuestion: zod.string()
        .min(1, "Next question is empty.")
        .max(500)

});