import { computed, effect, inject, Injectable, signal } from "@angular/core";
import { ChatService } from "../services/api/chat-service";
import { ChatCursorPaginated, ChatResponse, IChat } from "../interfaces/chat-interface";
import { AuthService } from "../auth/auth-service";
import { SnackBarService } from "../services/ui/snackbar-service";
import { LanguageService } from "../services/ui/language-service";

@Injectable({ providedIn: 'root' })
export class ChatStore {
    private chatService = inject(ChatService);

    private _chats = signal<ChatResponse[]>([]);
    private _loading = signal<boolean>(false);
    private _totalChats = signal<number>(0);

    private _hasMore = signal<boolean>(false);
    private _nextCursor = signal<string>('');
    private _limit = signal<number>(10);

    private _selectedChat = signal<IChat | null>(null);

    public hasMore = computed(() => this._hasMore());
    public nextCursor = computed(() => this._nextCursor());
    public limit = computed(() => this._limit());


    public chats = computed(() => this._chats());
    public isLoading = computed(() => this._loading());
    public totalChats = computed(() => this._totalChats());
    public selectedChat = computed(() => this._selectedChat());
    private snackBar = inject(SnackBarService);

    private languageService = inject(LanguageService);


    constructor(private authService: AuthService) {

        effect(() => {
            const user = this.authService.user();
            if (!user) {
                this._chats.set([]);
            }
        });
    }

    public loadChatsWithCursor(userId: string, cursor: string, limit: number, type = 'conversation') {
        if (this._loading()) return;
        this._loading.set(true);

        const isFirstPage = !cursor || cursor === '';

        this.chatService.getChatsWithCursor(userId, cursor, limit, type).subscribe({
            next: (response: ChatCursorPaginated) => {


                if (isFirstPage) {
                    this._chats.set(response.data);
                } else {
                    this._chats.update(currentChats => [...currentChats, ...response.data]);
                }

                this._hasMore.set(response.pagination.hasMore);
                this._nextCursor.set(response.pagination.nextCursor ?? '');
                this._limit.set(response.pagination.limit);
                this._loading.set(false);
            },
            error: () => this._loading.set(false)
        });
    }

    loadNextPage(userId: string) {
        if (this._loading() || !this._hasMore()) return;

        const currentCursor = this._nextCursor();
        const currentLimit = this._limit() || 15;

        this.loadChatsWithCursor(userId, currentCursor, currentLimit);
    }


    deleteChat(chatId: string) {
        this.chatService.deleteChat(chatId).subscribe({
            next: (response) => {

                this._chats.update(currentChats =>
                    currentChats.filter(chat => chat.id !== chatId)
                );

                this._totalChats.update(total => Math.max(0, total - 1));
                this.snackBar.show(this.languageService.translate('CHAT_DELETED'), 'Ok');
            },
            error: (err) => {
                this.snackBar.show('Error al intentar eliminar el chat desde el Store:', 'Ok');
            }
        });
    }

    public selectChat(chat: IChat | null): void {
        this._selectedChat.set(chat);
    }

    public addChat(newChat: ChatResponse): void {
        this._chats.update(currentChats => [newChat, ...currentChats]);
        this._totalChats.update(total => total + 1);
        this.selectChat(
            {
                creatorId: newChat.creatorId,
                id: newChat.id,
                type: newChat.type,
                visibility: newChat.visibility,
                status: newChat.status,
                title: newChat.title
            });
    }

    public resetStore() {
        this._chats.set([]);
        this._loading.set(false);
        this._totalChats.set(0);
        this._hasMore.set(false);
        this._nextCursor.set('');
    }

}