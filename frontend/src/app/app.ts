import { Component, effect, inject, signal } from '@angular/core';
import { ChatComponent } from "./features/chat-component/chat-component";
import { AuthService } from './core/auth/auth-service';
import { AuthUserStore } from './core/stores/auth-user-store';
import { MatDialog } from '@angular/material/dialog';
import { Verify } from './features/auth/verify/verify';
import { environment } from '../environments/environment';
import { ModelStore } from './core/stores/model-store';

@Component({
  selector: 'app-root',
  imports: [ChatComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('sweet-onion-frontend');
  protected authService = inject(AuthService);
  private authUserStore = inject(AuthUserStore);
  private dialog = inject(MatDialog);
  protected modelStore = inject(ModelStore);


  constructor() {
    this.authUserStore.initSync();

    effect(() => {
      const userData = this.authUserStore.userSyncData();
      if (!userData) {
        return;
      }
      if (userData && !this.authUserStore.isVerified() && this.dialog.openDialogs.length === 0) {
        this.openVerificationDialog();
      }
    });


    effect(async () => {
      const activeUser = this.authService.user();
      if (activeUser) {
        const token = await this.authService.getTokenAsync();
        if (environment.mockeable) {
          console.log('¡Token recuperado con éxito!:', token);
        }
      }
    });
  }

  openVerificationDialog() {
    this.dialog.open(Verify, {
      width: '100%',
      maxWidth: '380px',
      disableClose: true,
      panelClass: 'custom-dialog-container'
    });
  }
}
