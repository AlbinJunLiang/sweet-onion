import { Component, computed, inject, signal } from '@angular/core';
import { MatChipOption, MatChipListbox, MatChipAvatar } from "@angular/material/chips";
import { CdkDropList } from "@angular/cdk/drag-drop";
import { MatIcon } from "@angular/material/icon";
import { ChatInputComponent } from "../../chat-input-component/chat-input-component";
import { LanguageService } from '../../../core/services/ui/language-service';
import { IMessage } from '../../../core/interfaces/message-interface';
import { Conversation } from "../../conversation/conversation";
import { ChatModeService } from '../../../core/services/ui/chat-mode-service';
import { ChatMode } from '../../../core/types/chat-mode-type';
import { AuthService } from '../../../core/auth/auth-service';
import { ChatViewService } from '../../../core/services/ui/chat-view-service';
import { MessageStore } from '../../../core/stores/message-store';
import { ChatStore } from '../../../core/stores/chat-store';
import { ActivatedRoute } from '@angular/router';
import { NavDrawerService } from '../../../core/services/ui/nav-drawer-service';
import { ChatService } from '../../../core/services/api/chat-service';
import { SelectChatService } from '../../../core/services/ui/select-chat-service';
import { SnackBarService } from '../../../core/services/ui/snackbar-service';
import { ConfigService } from '../../../core/services/ui/config-service';
import { ModelService } from '../../../core/services/api/model-service';

@Component({
  selector: 'app-chat-container',
  imports: [MatChipOption, CdkDropList,
    MatChipListbox, MatIcon, MatChipAvatar,
    ChatInputComponent, Conversation],
  templateUrl: './chat-container.html',
  styleUrl: './chat-container.scss',
})
export class ChatContainer {

  protected authService = inject(AuthService);
  protected chatService = inject(ChatService);
  protected displayedText = signal('');
  protected speed = signal(10);
  protected index = signal(0);
  protected languageService = inject(LanguageService);
  private chatModeService = inject(ChatModeService);
  protected chatViewService = inject(ChatViewService);
  private modelService = inject(ModelService);

  protected messageStore = inject(MessageStore);
  protected chatStore = inject(ChatStore);
  protected chatNavDrawerService = inject(NavDrawerService);
  protected selectChatService = inject(SelectChatService);
  private configService = inject(ConfigService);

  public selectedModel = this.configService.model;

  protected text = computed(() =>
    this.languageService.translate('INTRO')
  );

  protected message = signal<IMessage>({
    role: 'user',
    text: '',
    isFirst: false
  });

  private route = inject(ActivatedRoute);
  private snackbarService = inject(SnackBarService);


  ngOnInit(): void {
    this.setChatByParam();
    this.setModelByParam();
    if (this.chatViewService.view()) {
      this.restartStreaming();
    }
  }

  /**
   * Para restablecer el efecto streaming del titulo inicial.
   */
  private restartStreaming() {
    this.startStreaming();
    this.languageService.onLanguageChanged = () => {
      this.displayedText.set('');
      this.index.set(0);
      this.startStreaming();
    };
  }


  /**
   * Para iniciar el efecto streaming del titulo inicial.
   */
  private startStreaming(): void {
    let lastTime = 0;

    const step = (timestamp: number) => {
      if (!lastTime) {
        lastTime = timestamp;
      }
      const currentText = this.text();

      const delta = timestamp - lastTime;

      if (delta >= this.speed()) {

        this.displayedText.update(current =>
          current + currentText.charAt(this.index())
        );

        this.index.update(i => i + 1);

        lastTime = timestamp;
      }

      if (this.index() < currentText.length) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }


  /**
   * Para formar e identificar el texto inicial 
   * del chat.
   */
  public sendFistText(text: string) {
    this.messageStore.resetMessages();
    this.chatStore.selectChat(null);
    this.message.set({
      role: 'user',
      text: text,
      isFirst: true
    });
  }

  /**
   * Para actualizar el modo de conversación.
   * 
   * @param mode 
   */
  protected onModeChange(mode: ChatMode): void {
    this.chatModeService.setMode(mode);
  }

  /**
   * Para consultar el chat desde la API y seleccionarlo para 
   * mostrar en el componente chat.
   * @param chatId 
   */
  private getChatById(chatId: string) {
    this.chatService.getChat(chatId).subscribe({
      next: (data) => {
        this.selectChatService.selectChat(data);
      },
      error: (err) => {
        console.error('Error al cargar el chat:', err);
        this.snackbarService.show(this.languageService.translate('NOT_AVAILABLE'), 'ok');
      }
    });
  }

  /**
   * Para consultar el model desde la API y seleccionarlo 
   * automáticamente. Lo actualiza a nivel de configuración.
   * 
   * @param modelId 
   */
  private getModelById(modelId: string) {
    this.modelService.getModelById(modelId).subscribe({
      next: (data) => {
        this.selectedModel.set(data);
      },
      error: (err) => {
        console.error('Error al cargar el chat:', err);
      }
    });
  }

  /**
   * Obtiene el id desde params de la url y 
   * llama el metodo getModelById()
   */
  private setModelByParam() {
    this.route.queryParams.subscribe(params => {
      const model = params['model'] || 'default';
      if (model !== 'default') {
        this.getModelById(model);
      }
    });
  }

  /**
   * Obtiene el id desde params de la url y 
   * llama el metodo getChatById()
   */
  private setChatByParam() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (!id) return;
      const chat = this.chatStore.chats().find(c => c.id === id);
      if (chat) {
        this.chatStore.selectChat(chat);
        return;
      }
      this.getChatById(id);
    });
  }
}
