import { Component, effect, inject, signal, untracked } from '@angular/core';
import { MatIcon } from "@angular/material/icon";
import { MatListItem, MatListItemTitle, MatListItemMeta } from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";
import { AuthUserStore } from '../../../core/stores/auth-user-store';
import { ChatStore } from '../../../core/stores/chat-store';
import { MatProgressSpinner } from "@angular/material/progress-spinner";
import { InfiniteScrollDirective } from "../../../shared/directives/infinite-scroll";
import { Router, RouterLink } from "@angular/router";
import { ChatModeService } from '../../../core/services/ui/chat-mode-service';
import { NavDrawerService } from '../../../core/services/ui/nav-drawer-service';
import { ChatViewService } from '../../../core/services/ui/chat-view-service';
import { IChat } from '../../../core/interfaces/chat-interface';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialog } from '../../../shared/components/confirm-dialog/confirm-dialog';
import { LanguageService } from '../../../core/services/ui/language-service';
import { SelectChatService } from '../../../core/services/ui/select-chat-service';

@Component({
  selector: 'app-conversation-list',
  imports: [MatIcon, MatListItem, MatListItemTitle, MatListItemMeta, MatButtonModule,
    MatProgressSpinner, InfiniteScrollDirective, RouterLink],
  templateUrl: './conversation-list.html',
  styleUrl: './conversation-list.scss',
})
export class ConversationList {

  private authUserStore = inject(AuthUserStore);
  protected chatStore = inject(ChatStore);
  protected userId = signal<string>('');

  protected chatModeService = inject(ChatModeService);
  protected chatNavDrawerService = inject(NavDrawerService);
  protected chatViewService = inject(ChatViewService);


  private dialog = inject(MatDialog);
  protected languageService = inject(LanguageService);
  private router = inject(Router);


  protected selectChatService = inject(SelectChatService);


  constructor() {
    /**
     * Sincroniza los chats del usuario autenticado y los carga en la lista o historial.
     */
    effect(() => {
      this.userId.set(this.authUserStore.userSyncData()?.user.id ?? '');
      if (this.userId()) {
        untracked(() => {
          this.chatStore.loadChatsWithCursor(this.userId(), '', 30);
        });
      }
    });
  }

/**
 * Para eliminar un chat
 * @param chatId 
 */
  private deleteChat(chatId: string) {
    this.chatStore.deleteChat(chatId);
    this.chatViewService.setView('startChat');
  }

/**
 * ELIMINAR CHAT CON VENTANA DE CONFIRMACÍON
 * @param chatId 
 * @param event 
 */
  protected onDelete(chatId: string, event: Event) {
    event.stopPropagation();
    event.preventDefault();
    this.dialog.open(ConfirmDialog, {
      data: {
        title: this.languageService.translate('CONFIRM_DELETE_TITLE'),
        message: this.languageService.translate('CONFIRM_DELETE_MESSAGE'),
        confirmText: this.languageService.translate('CONFIRM_DELETE_BUTTON'),
        cancelText: this.languageService.translate('CANCEL'),
      },
      panelClass: 'custom-dialog-container',
      width: '380px'
    }).afterClosed().subscribe(result => {
      if (result) {
        this.deleteChat(chatId);
      }
    });
  }

  /**
   * Redirige al chat según al que fue seleccionado.
   */
  selectChat(chat: IChat) {
    SelectChatService
    this.selectChatService.selectChat(chat);
    this.router.navigate(['/chat', chat.id]);
  }
}
