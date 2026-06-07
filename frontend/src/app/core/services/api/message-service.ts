import { inject, Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { MessageResponse } from "../../interfaces/message-interface";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class MessageService {

    private readonly apiUrl = environment.apiUrl;
    private http = inject(HttpClient);

    getMessages(chatId: string): Observable<MessageResponse[]> {
        return this.http.get<MessageResponse[]>(
            `${this.apiUrl}/chats/${chatId}/messages`,
            {
                headers: {
                    accept: '*/*',
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            }
        );
    }
}