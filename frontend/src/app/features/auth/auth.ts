import { Component, computed, inject } from '@angular/core';
import { Login } from "./login/login";
import { MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatIcon } from "@angular/material/icon";
import { Register } from "./register/register";
import { AuthModeService } from '../../core/services/ui/auth-mode-service';
import { LanguageService } from '../../core/services/ui/language-service';

@Component({
  selector: 'app-auth',
  imports: [Login, MatIcon, MatDialogTitle, Register],
  templateUrl: './auth.html',
  styleUrl: './auth.scss',
})
export class Auth {
  protected dialogRef = inject(MatDialogRef<Auth>);
  protected authModeService = inject(AuthModeService);
  private languageService = inject(LanguageService);

  protected title = computed(() => {
    
    switch (this.authModeService.authMode()) {
      case 'LOGIN':
        return this.languageService.translate('LOGIN');
      case 'REGISTER':
        return this.languageService.translate('REGISTER');
      default:
        return '';
    }
  });

}
