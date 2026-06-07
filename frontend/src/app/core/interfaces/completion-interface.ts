import { ChatResponse } from "./chat-interface";
import { MessageResponse } from "./message-interface";

export interface CompletionRequest {
  content: string;
}


export interface InitCompletionRequest {
  content: string;
  system: boolean;
  language: string;
  model?: string;
  userId: string;
}

export interface CompletionRequest {
  provider?: string;
  content: string;
  system?: boolean;
  language?: string;
  model?: string;
  context?: string;
  chatId?: string;
  userId?: string;
  isFirst?: boolean;
}