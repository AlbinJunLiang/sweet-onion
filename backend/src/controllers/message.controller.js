import Message from "../models/message.model.js";
import Chat from "../models/chat.model.js";
import { mappingMessageResponse } from "../mappers/message.mapper.js";

export const getMessagesByUser = async (req, res) => {

    try {
        const { chatId } = req.params;

        const chatOwnedByUser = await Chat.exists({ _id: chatId });
        if (!chatOwnedByUser) {
            return res.status(404).json({ error: "Chat not found or access denied." });
        }
        const messages = await Message.find({ chatId }).sort({ createdAt: 1 });
        return res.json(messages.map(mappingMessageResponse));

    } catch (error) {
        if (error.name === 'CastError') {
            return res.status(400).json({ error: "Invalid chatId format." });
        }

        return res.status(500).json({
            error: error.message
        });
    }
};
