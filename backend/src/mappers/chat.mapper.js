export function mappingChatResponse(chat) {
    return {
        id: chat._id,
        creatorId: chat.creatorId,
        context: chat.context,
        title: chat.title,
        visibility: chat.visibility,
        type: chat.type,
        status: chat.status
    }
}