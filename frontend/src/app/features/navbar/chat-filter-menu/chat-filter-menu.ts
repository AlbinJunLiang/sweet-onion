import { Component, inject } from '@angular/core';
import { MatMenu, MatMenuItem, MatMenuTrigger } from "@angular/material/menu";
import { MatIcon } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { ChatStore } from '../../../core/stores/chat-store';
import { AuthUserStore } from '../../../core/stores/auth-user-store';
import { LanguageService } from '../../../core/services/ui/language-service';

@Component({
  selector: 'app-chat-filter-menu',
  imports: [MatMenu, MatIcon, MatMenuItem, MatButtonModule, MatMenuTrigger],
  templateUrl: './chat-filter-menu.html',
  styleUrl: './chat-filter-menu.scss',
})
export class ChatFilterMenu {

  private authUserStore = inject(AuthUserStore);

  private chatStore = inject(ChatStore);
  protected filterSelected: string = 'conversation';
  protected languageService = inject(LanguageService);

  protected options = [
    { id: 'conversation', label: 'CONVERSATIONS' },
    { id: 'interview', label: 'FILTER_INTERVIEWS' }
  ];

/**
 * Filtra los chat según el tipo llamando la API.
 * @param type 
 */
  filterChats(type: string) {
    const userId = this.authUserStore.userSyncData()?.user.id ?? '';
    this.chatStore.loadChatsWithCursor(userId, '', 30, type);
  }

  updateLabels(option: string) {
    if (option === 'CONVERSATIONS') {
      return this.languageService.translate('CONVERSATIONS');
    } else {
      return this.languageService.translate('FILTER_INTERVIEWS');
    }
  }

  // Parar filtrar según el id del tipo que se haya seleccionado con el click.
  protected select(id: string) {
    this.filterSelected = id;
    this.filterChats(id);
  }
}
