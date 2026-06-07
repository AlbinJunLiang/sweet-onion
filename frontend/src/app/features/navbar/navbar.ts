import { Component, effect, inject, viewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavDrawerService } from '../../core/services/ui/nav-drawer-service';
import { Toolbar } from "../toolbar/toolbar";
import { ConversationList } from "./conversation-list/conversation-list";
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../../core/auth/auth-service';
import { SnackBarService } from '../../core/services/ui/snackbar-service';
import { MatDialog } from '@angular/material/dialog';
import { ConfigComponent } from '../config-component/config-component';
import { MatChipsModule } from '@angular/material/chips';
import { ChatModeService } from '../../core/services/ui/chat-mode-service';
import { MessageStore } from '../../core/stores/message-store';
import { ChatStore } from '../../core/stores/chat-store';
import { ChatViewService } from '../../core/services/ui/chat-view-service';
import { ModelMenu } from "./model-menu/model-menu";
import { ConfirmDialog } from '../../shared/components/confirm-dialog/confirm-dialog';
import { LanguageService } from '../../core/services/ui/language-service';
import { RouterOutlet, RouterLinkWithHref, Router } from '@angular/router';
import { ChatFilterMenu } from "./chat-filter-menu/chat-filter-menu";
import { AdminMenu } from "./admin-menu/admin-menu";
import { AuthUserStore } from '../../core/stores/auth-user-store';

@Component({
  selector: 'app-navbar',
  imports: [MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatIconModule, Toolbar, ConversationList,
    MatInputModule, MatChipsModule, ModelMenu, RouterOutlet,
    ChatFilterMenu, RouterLinkWithHref, AdminMenu],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  protected drawerService = inject(NavDrawerService);
  protected drawer = viewChild.required<MatDrawer>('drawer');
  protected chatModeService = inject(ChatModeService);
  private snackBar = inject(SnackBarService);
  protected authService = inject(AuthService);
  private dialog = inject(MatDialog);
  protected messageStore = inject(MessageStore);

  protected chatViewService = inject(ChatViewService);
  protected chatStore = inject(ChatStore);
  private router = inject(Router);
  protected authUserStore = inject(AuthUserStore);

  protected languageService = inject(LanguageService);


  constructor() {

    // Controla el navbar de acuerdo a los cambios del drawer.
    effect(() => {
      this.drawerService.setDrawer(this.drawer());
    });
  }

  /**
 * Para cerrar sesión
 */

  private logout() {
    this.authService.logout().subscribe({
      next: (user) => {
        this.snackBar.show(this.languageService.translate('SESSION_LOGOUT_MESSAGE'), this.languageService.translate('ACCEPT_LOGOUT'));
        this.chatViewService.setView('startChat');
        this.router.navigate(['/chat']);
      }
    });
  }

  protected onLogout() {
    this.dialog.open(ConfirmDialog, {
      data: {
        title: `${this.languageService.translate('LOGOUT')}?`,
        message: this.languageService.translate('LOGOUT_MESSAGE'),
        confirmText: this.languageService.translate('ACCEPT_LOGOUT'),
        cancelText: this.languageService.translate('CANCEL_LOGOUT')
      },
      panelClass: 'custom-dialog-container',
      width: '380px'
    }).afterClosed().subscribe(result => {
      if (result) {
        this.logout();
      }
    });
  }

  /**
   * Para abrir el modal de configuración.
   */
  protected openConfigDialog() {
    const dialogRef = this.dialog.open(ConfigComponent, {
      width: '95%',
      height: '90%',
      maxWidth: '800px',
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
      }
    });
  }

  /**
   * Para dirigirse a la venta de incio de nuevo chat o
   * conversación.
   */
  protected onNewChat() {
    this.messageStore.resetMessages();
    this.chatStore.selectChat(null);
    this.chatModeService.setMode('EPHEMERAL');
    this.chatViewService.setView('startChat')
    this.router.navigate(['/chat']);
  }
}