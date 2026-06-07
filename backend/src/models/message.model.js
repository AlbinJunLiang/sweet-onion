import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
    {

        chatId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Chat',
            required: true,
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        senderRole: {
            type: String,
            enum: ['user', 'admin', 'system', 'bot'],
            default: 'user'
        },
        content: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
);

messageSchema.index({ chatId: 1, createdAt: 1 });

export default mongoose.model("Message", messageSchema);