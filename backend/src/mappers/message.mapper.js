export function mappingMessageResponse(chat) {
    return {
        id: chat._id,
        chatId: chat.chatId,
        userId: chat.userId,
        senderRole: chat.senderRole,
        content: chat.content
    }
}