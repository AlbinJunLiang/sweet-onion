import { Injectable, signal, computed, inject } from "@angular/core";
import { ChatMode } from "../../types/chat-mode-type";
import { LanguageService } from "./language-service";


@Injectable({ providedIn: 'root' })
export class ChatModeService {

    private _chatMode = signal<ChatMode>('EPHEMERAL');
    public currentMode = this._chatMode.asReadonly();
    public isEphemeral = computed(() => this._chatMode() === 'EPHEMERAL');
    public isInterview = computed(() => this._chatMode() === 'INTERVIEW');
    public IsConersation = computed(() => this._chatMode() === 'CONVERSATION');
    private languageService = inject(LanguageService);

    public modeTitle = computed(() => {
        switch (this._chatMode()) {
            case 'INTERVIEW':
                return this.languageService.translate('INTERVIEW_CONVERSATION');

            case 'EPHEMERAL':
                return this.languageService.translate('EPHEMERAL_CONVERSATION');

            case 'CONVERSATION':
                return this.languageService.translate('PERSISTENT_CHAT');

            default:
                return '';
        }
    });

    public setMode(mode: ChatMode): void {
        this._chatMode.set(mode);
    }
}