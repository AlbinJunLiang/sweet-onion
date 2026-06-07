

import { Component, inject, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { AuthService } from '../../../core/auth/auth-service';
import { SnackBarService } from '../../../core/services/ui/snackbar-service';
import { finalize } from 'rxjs';
import { MatProgressSpinner } from "@angular/material/progress-spinner";
import { AuthModeService } from '../../../core/services/ui/auth-mode-service';
import { ForgotDialog } from '../forgot-dialog/forgot-dialog';
import { LanguageService } from '../../../core/services/ui/language-service';

@Component({
  selector: 'app-login',
  imports: [CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDividerModule, MatProgressSpinner],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  readonly dialogRef = input.required<MatDialogRef<any>>();
  private fb = inject(NonNullableFormBuilder);
  public form: FormGroup = this.createForm();
  private dialog = inject(MatDialog);
  protected hidePassword = signal(true);
  protected isLoading = signal(false);
  protected authService = inject(AuthService);
  protected isLoadingWithProvider = signal(false);
  private snackBar = inject(SnackBarService);
  protected authModeService = inject(AuthModeService);
  protected languageService = inject(LanguageService);


  private createForm(): FormGroup {
    return this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(50)
      ]],
    });
  }


  loginWithGoogle() {
    this.isLoadingWithProvider.set(true);
    this.authService.loginWithProvider().pipe(
      finalize(() => this.isLoadingWithProvider.set(false))
    ).subscribe({
      next: () => {
        this.snackBar.show(`${this.languageService.translate('WELCOME')} ${this.authService.user()?.email}!`, 'Ok');
        this.close();
      },
      error: (err) => {
        this.snackBar.show(this.languageService.translate('ERROR_SIGNIN_MESSAGE'), this.languageService.translate('CLOSE'));
      }
    });
  }

  onLogin() {
    if (this.form.invalid) return;
    this.isLoading.set(true);
    const { email, password } = this.form.value;

    this.authService.login(email, password).subscribe({
      next: (user) => {
        this.isLoading.set(false);
        this.snackBar.show(`${this.languageService.translate('WELCOME')} ${this.authService.user()?.email}!`, 'Ok');
        this.close();
      },
      error: (err: any) => {
        this.isLoading.set(false);
        if (err.code === 'auth/invalid-credential') {
          this.snackBar.show(`${this.languageService.translate('INVALID_CREDENTIALS')}`, 'Ok');
        } else {
          this.snackBar.show(this.languageService.translate('ERROR_SIGNIN_MESSAGE'), 'Ok');
        }
      }
    });
  }

  togglePassword(event: MouseEvent) {
    this.hidePassword.update(prev => !prev);
    event.stopPropagation();
  }

  openForgotPasswordDialog() {
    this.close();
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

  close() {
    this.dialog.closeAll();
    this.dialogRef().close();
    this.authModeService.setAuthMode('LOGIN');
  }
}
