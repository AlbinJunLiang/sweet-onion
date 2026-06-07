import mongoose from "mongoose";
import { questionSchema } from "./question.model.js";

const chatSchema = new mongoose.Schema(
    {
        creatorId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },

        context: { type: String },
        title: { type: String },
        type: {
            type: String,
            enum: ['conversation', 'interview', 'ephimeral'],
            default: 'conversation'
        },
        visibility: {
            type: String,
            enum: ['PRIVATE', 'PUBLIC'],
            default: 'PRIVATE'
        },
        status: {
            type: Boolean,
            default: true
        },
        // 2. Por defecto Mongoose inicializa los arrays como [], lo cual significa "cero preguntas".
        questions: {
            type: [questionSchema],
            default: []
        }
    },
    { timestamps: true }
);

chatSchema.index({ creatorId: 1, _id: -1 });

export default mongoose.model("Chat", chatSchema);