import { Component, inject } from '@angular/core';
import { MatToolbar } from "@angular/material/toolbar";
import { MatIcon } from "@angular/material/icon";
import { NavDrawerService } from '../../core/services/ui/nav-drawer-service';
import { MatButtonModule } from "@angular/material/button";
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../../core/auth/auth-service';
import { SnackBarService } from '../../core/services/ui/snackbar-service';
import { Auth } from '../auth/auth';
import { MatMenuModule } from "@angular/material/menu";
import { LanguageService } from '../../core/services/ui/language-service';
import { ChatModeService } from '../../core/services/ui/chat-mode-service';
import { Verify } from '../auth/verify/verify';
import { AuthUserStore } from '../../core/stores/auth-user-store';
import { ForgotDialog } from '../auth/forgot-dialog/forgot-dialog';
import { ChatViewService } from '../../core/services/ui/chat-view-service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-toolbar',
  imports: [MatToolbar, MatIcon, MatButtonModule, MatMenuModule],
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.scss',
})
export class Toolbar {

  protected drawerService = inject(NavDrawerService);
  protected authService = inject(AuthService);
  private snackBar = inject(SnackBarService);
  private dialog = inject(MatDialog);
  protected languageService = inject(LanguageService);
  public authUserStore = inject(AuthUserStore);
  protected chatService = inject(ChatModeService);
  protected chatViewService = inject(ChatViewService);
  private location = inject(Location);


  openLogin() {
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(Auth, {
      width: '420px',
      maxWidth: '95vw',
      panelClass: 'custom-dialog-login-container',
      disableClose: false
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Datos devueltos por el diálogo:', result);
      }
    });
  }

  /**
   * Cerrar sesión
   */

  protected onLogout() {
    this.authService.logout().subscribe({
      next: (user) => {
        this.snackBar.show(this.languageService.translate('SESSION_LOGOUT_MESSAGE'), 'Ok');
        this.chatViewService.setView('startChat');
        this.location.go('/');
      }
    });
  }

  /**
   * Ver el modal para verficar cuenta
   */

  protected openVerificationDialog() {
    this.dialog.open(Verify, {
      width: '100%',
      maxWidth: '380px',
      disableClose: true,
      autoFocus: false,
      restoreFocus: false,
      enterAnimationDuration: '0ms',
      exitAnimationDuration: '0ms'
    });
  }

  /**
   * Abrir el modal para recuperar la cuenta
   */
  protected openForgotPasswordDialog() {
    this.dialog.closeAll();
    this.dialog.open(ForgotDialog, {
      width: '100%',
      maxWidth: '380px',
      disableClose: true,
      autoFocus: false,
      restoreFocus: false,
      enterAnimationDuration: '0ms',
      exitAnimationDuration: '0ms'
    });
  }
}
