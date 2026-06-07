import { generateCompletion } from "../completions/completion.js";
import { safeParseJSON } from "../utils/json.util.js";
import User from "../models/user.model.js";
import Message from "../models/message.model.js";
import mongoose from "mongoose";
import Chat from "../models/chat.model.js";
import { createChatInstruction } from "../completions/instructions/chat-instruction.js";
import { createInitConversationInstruction } from "../completions/instructions/init-chat-instruction.js";
import { mappingChatResponse } from "../mappers/chat.mapper.js";
import { aiChatResponseSchema } from "../validators/chat-response.validator.js";
import { aiInterviewEvaluationSchema, aiInterviewResponseSchema } from "../validators/interview-response.validator.js";
import { initInterviewInstruction } from "../completions/instructions/interview-instruction.js";
import { mappingMessageResponse } from "../mappers/message.mapper.js";
import { evaluateAnswerInstruction } from "../completions/instructions/evaluate-answer-instruction.js";

/**
 * Función de prueba para generar completions utilizando un provider de IA.
 *
 */
export const initCompletionTest = async (req, res) => {

    try {
        const { content } = req.body;
        const { provider } = req.params;

        if (!content) {
            return res.status(400).json({
                error: "content is required."
            });
        }
        const result = await generateCompletion({ content, provider });
        res.json({
            provider,
            result
        });

    } catch (error) {

        res.status(500).json({
            error: error.message
        });
    }
};


/**
 * 
 * Inicializa y registra la conversación, además devuelve detalles de la conversación.
 * 
 */

export const initCompletionChat = async (req, res) => {
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        const { content, system, model, language, userId } = req.body;
        const { provider } = req.params;
        const instruction = createInitConversationInstruction(language);
        const aiChatResponse = await generateCompletion(
            { content, instruction, context: '', system, model, isJson: true, provider });

        const result = safeParseJSON(aiChatResponse);
        const validation = aiChatResponseSchema.safeParse(result);

        if (!validation.success) {
            await session.abortTransaction();
            session.endSession();
            return res.status(400).json({ error: "Metadata schema mismatch." });
        }

        const cleanAiData = validation.data;
        const chat = new Chat({
            creatorId: userId,
            title: cleanAiData.title,
            context: cleanAiData.context,
            type: 'conversation'
        });

        await chat.save({ session });
        await saveInitMessages(chat._id, userId, content, chat.context, session);
        await session.commitTransaction();
        session.endSession();

        return res.json({
            provider,
            type: chat.type.toUpperCase(),
            result: mappingChatResponse(chat)
        });

    } catch (error) {
        await session.abortTransaction();
        session.endSession();

        return res.status(500).json({
            error: error.message
        });
    }
};



/**
 * Para conversaciones temporales.
 */

export const generateTemporaryResponseCompletion = async (req, res) => {

    try {
        const { content, system, model, language, context = '' } = req.body;
        const { provider } = req.params;
        const instruction = createChatInstruction(language);

        if (!content) {
            return res.status(400).json({
                error: "content is required."
            });
        }

        const result = await generateCompletion(
            {
                content,
                instruction,
                context,
                system,
                model,
                isJson: false,
                provider
            }
        );

        res.json({
            provider,
            type: 'EPHEMERAL',
            result
        });

    } catch (error) {
        console.error("DETALLE DEL ERROR:", error);
        res.status(500).json({
            error: error.message
        });
    }
};


/**
 *Para conversaciones persistentes.
 */

export const generateChatResponseCompletion = async (req, res) => {
    const session = await mongoose.startSession();

    try {
        session.startTransaction();

        const { content, model, language, chatId, userId } = req.body;
        const { provider } = req.params;
        const instruction = createChatInstruction(language);


        if (!chatId || !userId) {
            return res.status(400).json({
                error: 'chatId and userId are required.'
            });
        }

        const context = await getLastMessagesString(chatId, 2);
        const chatExists = await Chat.exists({
            _id: chatId,
            creatorId: userId
        });

        if (!chatExists) {
            return res.status(404).json({
                error: 'Chat not found.'
            });
        }

        const result = await generateCompletion({
            content,
            instruction: instruction || '',
            system: true,
            context,
            model,
            language,
            provider,
            isJson: false
        });

        await saveInitMessages(
            chatId,
            userId,
            content,
            result,
            session
        );

        await session.commitTransaction();

        return res.json({
            provider,
            type: "CONVERSATION",
            result
        });

    } catch (error) {
        await session.abortTransaction();

        console.error('DETALLE DEL ERROR:', error);

        return res.status(500).json({
            error: error.message
        });
    } finally {
        session.endSession();
    }
};



const saveInitMessages = async (chatId, userId, userContent, botContent, session) => {
    const messagesToInsert = [
        { chatId, userId, senderRole: 'user', content: userContent },
        { chatId, userId, senderRole: 'bot', content: botContent }
    ];
    return await Message.insertMany(messagesToInsert, { session });
};



const getLastMessagesString = async (
    chatId,
    limit = 2
) => {

    const messages = await Message
        .find({ chatId })
        .sort({ createdAt: -1 })
        .limit(limit)
        .lean();

    if (messages.length === 0) {
        return '';
    }

    return messages
        .reverse()
        .map(msg =>
            `${msg.senderRole === 'user' ? 'User' : 'Bot'}: ${msg.content}`
        )
        .join('\n');
};



export const InitInterviewTest = async (req, res) => {

    const session = await mongoose.startSession();

    try {

        session.startTransaction();

        const { content, model, language, userId } = req.body;
        const { provider } = req.params;

        const questionsCount = 1;

        if (!content) {

            await session.abortTransaction();

            return res.status(400).json({
                error: "content is required."
            });
        }

        const instruction = initInterviewInstruction(
            language || "Spanish",
            questionsCount
        );

        const aiChatResponse = await generateCompletion({
            content,
            model,
            language,
            instruction,
            system: true,
            isJson: true,
            provider
        });

        const result = safeParseJSON(aiChatResponse);

        if (!result) {

            await session.abortTransaction();

            return res.status(400).json({
                error: "Invalid JSON returned by AI."
            });
        }

        const validation =
            aiInterviewResponseSchema.safeParse(result);

        if (!validation.success) {

            await session.abortTransaction();

            return res.status(400).json({
                error: "Metadata schema mismatch.",
                details: validation.error.format()
            });
        }

        const cleanAiData = validation.data;

        const firstQuestion = cleanAiData.questions?.[0];

        if (!firstQuestion) {

            await session.abortTransaction();

            return res.status(400).json({
                error: "No interview question generated."
            });
        }

        const chat = new Chat({
            creatorId: userId,
            title: cleanAiData.title,
            context: cleanAiData.description,
            type: "interview",
            questions: [
                {
                    question: firstQuestion.question
                }
            ]
        });

        await chat.save({ session });

        const messages = await saveInitMessages(chat._id, userId, content, firstQuestion.question, session);
        const questionMessage = messages[1];

        await session.commitTransaction();

        return res.json({
            provider,
            type: "INTERVIEW",
            result: mappingChatResponse(chat),
            reply: mappingMessageResponse(
                questionMessage
            )
        });

    } catch (error) {

        if (session.inTransaction()) {
            await session.abortTransaction();
        }

        return res.status(500).json({
            error: error.message
        });

    } finally {

        await session.endSession();

    }
};


export const evaluateInterviewAnswer = async (req, res) => {

    const session = await mongoose.startSession();

    try {

        session.startTransaction();

        const { content, language, chatId, userId, model } = req.body;
        const { provider } = req.params;

        if (!chatId || !userId) {
            return res.status(400).json({ error: 'chatId and userId are required.' });
        }

        const chat = await Chat.findOne({
            _id: chatId,
            creatorId: userId,
            type: 'interview'
        });

        if (!chat) {
            return res.status(404).json({
                error: 'Interview not found.'
            });
        }

        const lastQuestion = chat.questions[chat.questions.length - 1];

        if (!lastQuestion) {
            return res.status(400).json({
                error: 'No interview question found.'
            });
        }

        const instruction = evaluateAnswerInstruction(
            language || 'Spanish'
        );

        const context = `Topic: ${chat.context}Title: ${chat.title}Question: ${lastQuestion.question}`;

        const aiResponse = await generateCompletion({
            content,
            context,
            language,
            instruction,
            system: true,
            isJson: true,
            provider,
            model
        });

        const parsed = safeParseJSON(aiResponse);

        if (!parsed) {
            return res.status(400).json({
                error: 'Invalid JSON returned by AI.'
            });
        }

        const validation =
            aiInterviewEvaluationSchema.safeParse(parsed);

        if (!validation.success) {
            return res.status(400).json({
                error: "Metadata schema mismatch.",
                details: validation.error.format()
            });
        }

        const cleanAiData = validation.data;

        chat.questions.push({
            question: cleanAiData.nextQuestion
        });

        await chat.save({ session });

        const evaluation = `${cleanAiData.icon} [${cleanAiData.status}] ${cleanAiData.feedback}\n\n**${cleanAiData.nextQuestion}**`;
        const messages = await saveInitMessages(chatId, userId, content, evaluation, session);
        const botResponseMessage = messages[1];

        await session.commitTransaction();

        return res.json({
            provider,
            type: 'INTERVIEW',
            result: mappingChatResponse(chat),
            reply: mappingMessageResponse(
                botResponseMessage
            )
        });

    } catch (error) {
        if (session.inTransaction()) {
            await session.abortTransaction();
        }
        return res.status(500).json({
            error: error.message
        });

    } finally {
        await session.endSession();
    }
};

