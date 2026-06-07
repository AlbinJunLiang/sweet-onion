
export interface IMessage {
    id?: string;
    role: 'user' | 'bot';
    text: string;
    isFirst?: boolean
    streaming?: boolean
}

export interface MessageResponse {
    id: string;
    chatId: string;
    userId: string;
    senderRole: 'user' | 'bot';
    content: string;
}