import { inject, Injectable } from "@angular/core";
import { MessageStore } from "../../stores/message-store";
import { ChatStore } from "../../stores/chat-store";
import { NavDrawerService } from "./nav-drawer-service";
import { ChatViewService } from "./chat-view-service";
import { ChatModeService } from "./chat-mode-service";
import { IChat } from "../../interfaces/chat-interface";
import { ChatMode } from "../../types/chat-mode-type";


@Injectable({ providedIn: 'root' })
export class SelectChatService {

    protected messageStore = inject(MessageStore);
    protected chatStore = inject(ChatStore);
    protected chatNavDrawerService = inject(NavDrawerService);
    protected chatViewService = inject(ChatViewService);
    protected chatModeService = inject(ChatModeService);


    selectChat(chat: IChat) {

        this.chatViewService.setView('oldChat');
        this.chatStore.selectChat(chat);
        this.messageStore.loadMessages(chat.id);
        this.chatModeService.setMode(chat.type?.toUpperCase() as ChatMode ?? 'NEW');

        if (this.chatNavDrawerService.isMobile()) {
            this.chatNavDrawerService.toggle();
        }
    }

}