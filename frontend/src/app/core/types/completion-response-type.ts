import { ChatResponse } from "../interfaces/chat-interface";
import { MessageResponse } from "../interfaces/message-interface";


export type CompletionResponse =
  | {
      provider: string;
      type: 'CONVERSATION';
      result: ChatResponse;
    }
  | {
      provider: string;
      type: 'INTERVIEW';
      result: ChatResponse;
      reply: MessageResponse;
    }
  | {
      provider: string;
      type: 'EPHEMERAL';
      result: string;
    };

    