import { inject, Injectable, signal } from "@angular/core";
import { MessageService } from "../services/api/message-service";
import { MessageResponse } from "../interfaces/message-interface";

@Injectable({ providedIn: 'root' })
export class MessageStore {

    private messageService = inject(MessageService);

    private _messages = signal<MessageResponse[]>([]);
    private _loading = signal(false);
    private _totalMessages = signal(0);

    public messages = this._messages.asReadonly();
    public isLoading = this._loading.asReadonly();
    public totalMessages = this._totalMessages.asReadonly();

    loadMessages(chatId: string) {

        if (this._loading()) return;

        // LIMPIAR INMEDIATAMENTE
        this.resetMessages();

        this._loading.set(true);

        this._totalMessages.set(0);

        this.messageService.getMessages(chatId).subscribe({

            next: (response) => {

                this._messages.set(response);
                this._totalMessages.set(response.length);
                this._loading.set(false);
            },

            error: () => {

                this.resetMessages();
                this._loading.set(false);
            }
        });
    }
    resetMessages(): void {
        this._messages.set([]);
    }
}