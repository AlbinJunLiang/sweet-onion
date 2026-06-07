import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CompletionRequest } from '../../interfaces/completion-interface';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { ChatMode } from '../../types/chat-mode-type';
import { CompletionResponse } from '../../types/completion-response-type';

@Injectable({
    providedIn: 'root',
})

export class CompletionService {
    private readonly http = inject(HttpClient);
    private readonly apiUrl = environment.apiUrl;
    private readonly httpOptions = {
        headers: {
            'accept': '*/*',
            'Content-Type': 'application/json'
        },
        withCredentials: true
    };


    generateCompletion(
        body: CompletionRequest,
        chatMode: ChatMode = 'EPHEMERAL'
    ): Observable<CompletionResponse> {

        switch (chatMode) {
            case 'EPHEMERAL':
                return this.requestEphemeral(body);
            case 'CONVERSATION':
                return this.requestConversation(body);
            case 'INTERVIEW':
                return this.requestInterview(body);
            case 'OTHER':
                // Si estos casos no hacen nada aún, lanza un error claro
                throw new Error(`Chat mode ${chatMode} not implemented yet.`);
            default:
                throw new Error('Chat mode does not exist.');
        }
    }

    private requestEphemeral(body: CompletionRequest): Observable<CompletionResponse> {
        return this.http.post<CompletionResponse>(
            `${this.apiUrl}/completions/temp/${body.provider}`,
            {
                content: body.content,
                model: body.model,
                language: body.language,
                context: body.context
            },
            this.httpOptions
        );
    }


    private requestConversation(body: CompletionRequest): Observable<CompletionResponse> {
        const endpoint = body.isFirst
            ? `${this.apiUrl}/completions/chat/${body.provider}/init`
            : `${this.apiUrl}/completions/chat/${body.provider}`;
        return this.http.post<CompletionResponse>(
            endpoint,
            {
                content: body.content,
                chatId: body.chatId,
                model: body.model,
                userId: body.userId,
                language: body.language
            },
            this.httpOptions
        );
    }


    private requestInterview(body: CompletionRequest): Observable<CompletionResponse> {
        const endpoint = body.isFirst
            ? `${this.apiUrl}/completions/interview/${body.provider}/init`
            : `${this.apiUrl}/completions/interview/${body.provider}/evaluate`;
        return this.http.post<CompletionResponse>(
            endpoint,
            {
                content: body.content,
                chatId: body.chatId,
                model: body.model,
                userId: body.userId,
                language: body.language
            },
            this.httpOptions
        );
    }



}