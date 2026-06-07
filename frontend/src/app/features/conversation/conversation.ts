import { Component, ElementRef, signal, effect, input, computed, viewChild, inject, untracked } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChatInputComponent } from "../chat-input-component/chat-input-component";
import { IMessage } from "../../core/interfaces/message-interface"
import { SnackBarService } from "../../core/services/ui/snackbar-service"
import { TextToSpeechService } from "../../core/services/ui/text-to-speech-service"
import { CompletionService } from "../../core/services/api/completion-service"
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MarkdownPipe } from '../../shared/pipes/markdown-pipe';
import { ConfigService } from '../../core/services/ui/config-service';
import { CompletionRequest } from '../../core/interfaces/completion-interface';
import { MessageStore } from '../../core/stores/message-store';
import { ChatStore } from '../../core/stores/chat-store';
import { ChatModeService } from '../../core/services/ui/chat-mode-service';
import { ChatViewService } from '../../core/services/ui/chat-view-service';
import { AuthUserStore } from '../../core/stores/auth-user-store';
import { LanguageService } from '../../core/services/ui/language-service';
import { CompletionResponse } from '../../core/types/completion-response-type';
import { Location } from '@angular/common';
import { RateLimitError } from '../../core/interfaces/rate-limit-error-interface';


@Component({
  selector: 'app-conversation',
  standalone: true,
  imports: [FormsModule, ChatInputComponent, MatProgressSpinnerModule, MarkdownPipe],
  templateUrl: './conversation.html',
  styleUrl: './conversation.scss',
})
export class Conversation {

  protected messages = signal<IMessage[]>([]);
  protected hasMessages = computed(() => this.messages().length > 0);
  protected speechService = inject(TextToSpeechService);
  protected chatContainer = viewChild<ElementRef>('chatContainer');
  protected chatModeService = inject(ChatModeService);
  protected isLoading = signal<boolean>(false);
  protected messageStore = inject(MessageStore);
  protected chatViewService = inject(ChatViewService);
  public messageData = computed(() => this.messageStore.messages());
  public firstMessage = input<IMessage>();

  private snackBarService = inject(SnackBarService)
  private readonly completionService = inject(CompletionService);
  private configService = inject(ConfigService);
  private chatStore = inject(ChatStore);
  private authUserStore = inject(AuthUserStore);

  protected languageService = inject(LanguageService);
  private location = inject(Location);


  /**
   * Obtiene los últimos dos elementos de messages.
   */
  protected lastTwoMessages = computed(() => {
    const allMessages = this.messages();
    return allMessages.slice(-2);
  });


  /**
   * Formatea los últimos elementos de messages en una cadena.
   */
  protected lastTwoMessagesString = computed(() => {
    const messagesArray = this.lastTwoMessages();
    if (messagesArray.length === 0) {
      return "";
    }
    const history = messagesArray
      .map(msg => `${msg.role === 'user' ? 'User' : 'Bot'}: ${msg.text}`)
      .join('\n');
    return history;
  });


  constructor() {
    // Detectar que la llamada de API de los mensajes haya cargado para mostrar el HTML.
    effect(() => {
      this.loadConversation();
    });

    // Detectar el primer mensaje al crear chat
    effect(() => {
      const message = this.firstMessage();
      const view = this.chatViewService.view();
      if (message?.isFirst && view === 'newChat') {
        untracked(() => {
          this.ask(message.text);
        });
      }
    });

    // Ver cambios nuevos en messages para desplazar el scroll hacia abajo.
    effect(() => {
      this.messages();
      this.scrollToBottom();
    });
  }


  /**
   * Función inicial que envía una solicitud a la IA para obtener una respuesta.
   * @param prompt 'Solicitud del cliente (Consulta, texto y etc)'
   */
  public ask(prompt: string) {
    const wasNewConversation = this.messages().length === 0;
    const context = `${this.lastTwoMessagesString().trim()}`;

    const body: CompletionRequest =
    {
      provider: this.configService.model().provider ?? 'google',
      content: prompt,
      system: true,
      language: this.configService.recognitionLang(),
      context: context,
      model: this.configService.model().model,
      chatId: this.chatStore.selectedChat()?.id,
      userId: this.authUserStore.userSyncData()?.user.id,
      isFirst: wasNewConversation
    }

    this.isLoading.set(true);
    this.addMessage('user', prompt, crypto.randomUUID());

    this.completionService.generateCompletion(body, this.chatModeService.currentMode()).subscribe({
      next: (res) => {

        if (wasNewConversation && res.type !== "EPHEMERAL") {
          this.chatStore.addChat(res.result);
          this.location.go(`/chat/${res.result.id}`);
        }

        this.processCompletionResponse(res);
        this.isLoading.set(false);

      },
      error: (err) => {
        const error: RateLimitError = err.error;
        if (err.status == 429) {
          this.addMessage('bot', `${this.languageService.translate('TOO_MANY_REQUEST')}. ${this.languageService.translate('PLEASE_TRY_AGAIN')}: ${error.resetTime.toFixed(1)} ${this.languageService.translate('MINUTES')}.`, crypto.randomUUID());
        } else {
          this.addMessage('bot', this.languageService.translate('CHAT_RESPONSE_ERROR'), crypto.randomUUID());
        }
        this.isLoading.set(false);
      }
    });
  }

  /**
   * Extrae la respuesta retornada de la IA según el tipo.
   * Cada tipo devuelve un formato JSON diferente-
   * @param res Cuerpo de la respuesta.
   * @returns Devuelve el texto del mensaje a mostrar en las burbujas como bot.
   */
  private extractMessageFromResponse(res: CompletionResponse): string {
    switch (res.type) {
      case 'EPHEMERAL': return res.result;
      case 'CONVERSATION': return typeof res.result === 'string' ? res.result : (res.result?.context ?? '');
      case 'INTERVIEW': return res.reply.content ?? '';
      default: return '';
    }
  }

  /**
   * Añade los mensajes o respuesta en la lista parar mostrar en el HTML.
   * 
   * @param res respuesta de la IA
   */
  private processCompletionResponse(res: CompletionResponse): void {
    const message = this.extractMessageFromResponse(res);
    if (message) {
      this.addMessage('bot', message, crypto.randomUUID());
      this.onPlay(message);
    }
  }

  /**
   * Para agregar mensajes a la lista.
   * 
   * @param role 
   * @param text 
   * @param id 
   */
  private addMessage(role: 'user' | 'bot', text: string, id: string) {
    this.messages.update(prev => {
      if (prev.some(m => m.id === id)) return prev;
      return [...prev, { id, role, text }];
    });
  }

  /**
   * Carga los mensajes de la API STORE a un lista local del componente.
   * @returns 
   */
  private loadConversation() {
    if (this.messageData().length === 0) {
      this.messages.set([]);
      return;
    }
    const formattedMessages = this.messageData().map(message => ({
      id: message.id,
      role: message.senderRole.toLocaleLowerCase() as 'user' | 'bot',
      text: message.content
    }));
    this.messages.set(formattedMessages);
  }


  private scrollToBottom(): void {
    const container = this.chatContainer()?.nativeElement;
    if (!container) return;
    requestAnimationFrame(() => {
      container.scrollTo({
        top: container.scrollHeight,
        behavior: 'smooth'
      });
    });
  }

  /**
   * Para reproducir el sonido del texto de los mensajes.
   * @param text 
   */
  private onPlay(text: string) {
    if (this.configService.isTextToSpeechActive()) {
      this.speechService.stop();
      this.speechService.play(text, this.configService.recognitionLang());
    }
  }

  /**
   * Metodo que encapsula el ask() para enviar una solicitud a la IA.
   * @param prompt 
   */
  protected sendPrompt(prompt: string) {
    this.ask(prompt);
  }

  /**
   * Parar copiar el texto y ponerlo en portapapeles
   * @param text 
   */
  protected copyText(text: string) {
    navigator.clipboard.writeText(text);
    this.snackBarService.show(this.languageService.translate('COPIED_TO_CLIPBOARD'), "Ok");
  }


  /**
   * Lo mismo que onPlay solo que este se usa para que el usuario pueda activarlo
   * cuando quiera con un click.
   * 
   * @param content  EL texto del mensaje a reproducir en audio.
   */
  protected onSpeechControl(content: string) {
    if (this.speechService.isPlaying()) {
      this.speechService.stop();
    } else {
      this.speechService.play(content, this.configService.recognitionLang());
    }
  }

  /**
   * Obtiene el titulo del chat con su formato de acuerdo al tipo
   * de conversación.
   */
  protected getChatTitle(): string {
    const chatTitle = this.chatStore.selectedChat()?.title;
    const modeTitle = this.chatModeService.modeTitle();

    if (!chatTitle) {
      return modeTitle;
    }
    return `${modeTitle}: ${chatTitle}`;
  }


  // TEST FUNCTIONS
  sendMessage(text: string): void {
    if (!text) return;
    this.messages.update(prev => [...prev, {
      id: crypto.randomUUID(),
      role: 'user',
      text
    }]);
    setTimeout(() => {
      this.messages.update(prev => [...prev, {
        id: crypto.randomUUID(),
        role: 'bot',
        text: 'Recibido: ' + text
      }]);
    }, 600);
  }
}