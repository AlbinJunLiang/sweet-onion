import { inject, Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { ChatCursorPaginated, ChatResponse, IChat } from "../../interfaces/chat-interface";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})

export class ChatService {
    private readonly apiUrl = environment.apiUrl;
    private http = inject(HttpClient);


    /**
     * Carga los chats en el scroll infinito. 
     * Obtiene los registros desde es el cursor (nuevo) a los chats anteriores.
     * 
     * @param [cursor='chatId'] Es el chatId de punto de referencia de registros a obtener.
     * @param [limit=10] Cantidad de registros a traer.
     * @param userId Id del usuario a obtener los chats.
    */

    getChatsWithCursor(userId: string, cursor: string = '', limit = 10, type = 'conversation'): Observable<ChatCursorPaginated> {
        return this.http.get<ChatCursorPaginated>(
            `${this.apiUrl}/users/${userId}/chats?cursor=${cursor}&limit=${limit}&type=${type}`,
            {
                headers: {
                    accept: '*/*',
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            }
        );
    }

    deleteChat(chatId: string): Observable<{ message: string; chatId?: string }> {
        return this.http.delete<{ message: string; chatId?: string }>(
            `${this.apiUrl}/chats/${chatId}`,
            {
                headers: {
                    accept: '*/*',
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            }
        )
    }

    getChat(chatId: string): Observable<ChatResponse> {
        return this.http.get<ChatResponse>(`${this.apiUrl}/chats/${chatId}`, {
            withCredentials: true
        });
    }

}