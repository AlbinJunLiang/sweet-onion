import { mappingChatResponse } from "../mappers/chat.mapper.js";
import Chat from "../models/chat.model.js";
import User from "../models/user.model.js";
import mongoose from "mongoose";

export const getByUserWithCursor = async (req, res) => {
    try {

        const { userId } = req.params;
        const {
            cursor,
            limit = 10,
            type = 'conversation'
        } = req.query;

        const allowedTypes = ['conversation', 'interview', 'ephimeral'];

        if (!allowedTypes.includes(type)) {
            return res.status(400).json({
                error: 'Invalid type value.'
            });
        }

        const limitNumber = Math.min(Number(limit) || 10, 50);

        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({
                error: "Invalid user ID format."
            });
        }

        if (cursor && !mongoose.Types.ObjectId.isValid(cursor)) {
            return res.status(400).json({
                error: "Invalid cursor format."
            });
        }

        const userExists = await User.exists({
            _id: userId
        });

        if (!userExists) {
            return res.status(404).json({
                error: "User not found."
            });
        }

        const filter = {
            creatorId: userId,
            type
        };

        if (cursor) {
            filter._id = {
                $lt: new mongoose.Types.ObjectId(cursor)
            };
        }

        const chats = await Chat.find(filter)
            .sort({ _id: -1 })
            .limit(limitNumber + 1);

        let nextCursor = null;
        let hasMore = false;

        if (chats.length > limitNumber) {
            hasMore = true;

            const nextItem = chats.pop();

            nextCursor = nextItem._id;
        }

        return res.status(200).json({
            data: chats.map(mappingChatResponse),
            pagination: {
                nextCursor,
                hasMore,
                limit: limitNumber
            }
        });

    } catch (error) {

        return res.status(500).json({
            error: error.message
        });

    }
};


export const deleteUserChats = async (req, res) => {
    try {
        const { userId } = req.params;
        const { type, status, olderThan } = req.query;

        let filter = { creatorId: userId };

        if (type) {
            const validTypes = ['conversation', 'interview', 'ephimeral'];
            if (!validTypes.includes(type)) {
                return res.status(400).json({
                    success: false,
                    message: `Invalid chat type. Allowed types: ${validTypes.join(', ')}`
                });
            }
            filter.type = type;
        }

        if (status !== undefined) {
            filter.status = status === 'true' || status === true;
        }

        if (olderThan) {
            const days = parseInt(olderThan);
            if (isNaN(days) || days < 1) {
                return res.status(400).json({
                    success: false,
                    message: "Invalid 'olderThan' parameter. Must be a positive integer"
                });
            }
            const cutoffDate = new Date();
            cutoffDate.setDate(cutoffDate.getDate() - days);
            filter.createdAt = { $lt: cutoffDate };
        }

        const result = await Chat.deleteMany(filter);

        res.status(200).json({
            success: true,
            message: `Successfully deleted ${result.deletedCount} chat(s)`,
            deletedCount: result.deletedCount,
            filters: { type, status, olderThan }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error deleting chats",
            error: error.message
        });
    }
};



export const deleteChat = async (req, res) => {
    try {

        const { chatId } = req.params;

        if (!chatId) {
            return res.status(400).json({
                error: 'chatId is required'
            });
        }

        const result = await Chat.deleteOne({
            _id: chatId
        });

        if (result.deletedCount === 0) {
            return res.status(404).json({
                error: 'Chat not found or permission denied'
            });
        }

        return res.status(200).json({
            message: 'Chat deleted successfully'
        });

    } catch (error) {

        return res.status(500).json({
            error: error.message
        });

    }
};


export const getChatById = async (req, res) => {
    try {
        const { chatId } = req.params;

        // 1. Validar formato del ID (importante para evitar errores de MongoDB)
        if (!mongoose.Types.ObjectId.isValid(chatId)) {
            return res.status(400).json({ error: "Invalid chat ID format." });
        }

        const chat = await Chat.findById(chatId);
        if (!chat) {
            return res.status(404).json({ error: "Chat not found." });
        }

        return res.status(200).json(mappingChatResponse(chat));

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};