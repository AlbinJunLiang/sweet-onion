import { Component, computed, inject, model } from '@angular/core';
import { MatDialogContent, MatDialogActions, MatDialogClose, MatDialogRef, MatDialog } from "@angular/material/dialog";
import { MatAnchor, MatIconButton } from "@angular/material/button";
import { MatIcon } from "@angular/material/icon";
import { MatDivider } from "@angular/material/divider";
import { MatRadioChange, MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ConfigService } from '../../core/services/ui/config-service';
import { SnackBarService } from '../../core/services/ui/snackbar-service';
import { LanguageService } from '../../core/services/ui/language-service';
import { UserService } from '../../core/services/api/user-service';
import { AuthService } from '../../core/auth/auth-service';
import { AuthUserStore } from '../../core/stores/auth-user-store';
import { ChatStore } from '../../core/stores/chat-store';
import { ConfirmDialog } from '../../shared/components/confirm-dialog/confirm-dialog';
import { ChatMode } from '../../core/types/chat-mode-type';

@Component({
  selector: 'app-config-component',
  imports: [FormsModule, MatDialogContent, MatDialogActions,
    MatDialogClose, MatAnchor, MatIconButton, MatIcon, MatDivider,
    MatRadioModule, MatCheckboxModule],
  templateUrl: './config-component.html',
  styleUrl: './config-component.scss',
})
export class ConfigComponent {

  protected dialogRef = inject(MatDialogRef<ConfigComponent>);
  protected configService = inject(ConfigService);
  protected languageService = inject(LanguageService);
  readonly textToSpeechActive = model(this.configService.isTextToSpeechActive());
  readonly voice = model<'NATIVE' | 'GOOGLE'>('NATIVE');
  protected snackBar = inject(SnackBarService);

  protected userService = inject(UserService);
  private authUserStore = inject(AuthUserStore);
  protected userId = computed(() => this.authUserStore.userSyncData()?.user.id);
  private chatStore = inject(ChatStore);
  private dialog = inject(MatDialog);
  protected authService = inject(AuthService);


  public onChangeVoice(event: MatRadioChange): void {
    if (event.value === 'NATIVE') {
      this.snackBar.show(this.languageService.translate('ALREADY_IN_NATIVE_VOICE'), 'ok');
    } else {
      this.snackBar.show(this.languageService.translate('NOT_AVAILABLE'), 'ok');
    }
  }


  public onChangeLanguage(event: MatRadioChange): void {
    this.languageService.changeLang(event.value);
    this.snackBar.show(this.languageService.translate('UPDATED'), 'ok');
  }

  toggleTTS(value: boolean) {
    this.snackBar.show(this.languageService.translate('UPDATED'), 'ok');
  }


  async deleteUserChats(type: ChatMode) {
    let filter = {};

    if (type === 'OTHER') {
      filter = {};
    } else {
      filter = { type: type }
    }

    this.userService.deleteUserChats(this.userId() ?? '', filter).subscribe({
      next: (res) => {
        this.snackBar.show(`${this.languageService.translate('DELETED')}: ${res.deletedCount} chats.`, 'Ok')
        this.chatStore.resetStore();
      },
      error: (err) => {
        console.error('Ocurrió un error al borrar:', err.error.message);
      }
    });
  }

  protected async onDeleteUserChats(type: ChatMode) {

    this.dialog.open(ConfirmDialog, {
      data: {
        title: this.languageService.translate('CONVERSATIONS'),
        message: this.languageService.translate('CONFIRM_DELETE_MESSAGE'),
        confirmText: this.languageService.translate('CONFIRM_DELETE_BUTTON'),
        cancelText: this.languageService.translate('CANCEL'),
      },
      panelClass: 'custom-dialog-container',
      width: '380px'
    }).afterClosed().subscribe(result => {
      if (result) {
        this.deleteUserChats(type);
      }
    });
  }
}
