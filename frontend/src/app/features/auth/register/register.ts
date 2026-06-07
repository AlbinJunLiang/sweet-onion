import { Component, inject, signal } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogContent, MatDialogActions, MatDialog } from "@angular/material/dialog";
import { MatFormField, MatLabel, MatError, MatSuffix } from "@angular/material/form-field";
import { MatIcon } from "@angular/material/icon";
import { MatProgressSpinner } from "@angular/material/progress-spinner";
import { MatInput } from "@angular/material/input";
import { matchValidator } from '../../../shared/validators/password-validator';
import { MatAnchor } from "@angular/material/button";
import { AuthModeService } from '../../../core/services/ui/auth-mode-service';
import { AuthService } from '../../../core/auth/auth-service';
import { switchMap } from 'rxjs';
import { SnackBarService } from '../../../core/services/ui/snackbar-service';
import { CountdownService } from '../../../core/services/ui/countdown-service';
import { ForgotDialog } from '../forgot-dialog/forgot-dialog';
import { LanguageService } from '../../../core/services/ui/language-service';

@Component({
  selector: 'app-register',
  imports: [MatDialogContent, MatFormField,
    MatLabel, MatError, MatIcon, MatProgressSpinner,
    MatDialogActions, ReactiveFormsModule, MatInput,
    MatSuffix, MatAnchor],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {

  private fb = inject(NonNullableFormBuilder);
  public form: FormGroup = this.createForm();
  protected hidePassword = signal(true);
  protected hidePasswordConfirm = signal(true);
  protected isLoading = signal(false);
  protected authModeService = inject(AuthModeService);
  protected authService = inject(AuthService);
  private snackBar = inject(SnackBarService);
  protected isRegistered = signal(false);
  private readonly TIMER_KEY = 'verify';
  private readonly COOLDOWN_MINUTES = 10;
  private countdownService = inject(CountdownService);
  private dialog = inject(MatDialog);

  protected languageService = inject(LanguageService);


  private createForm(): FormGroup {
    return this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [Validators.required, Validators.minLength(6), Validators.maxLength(50)]
        ],
        confirmPassword: [
          '',
          [Validators.required, Validators.minLength(6), Validators.maxLength(50)]
        ],
      },
      {
        validators: matchValidator
      });
  }

  togglePassword(event: MouseEvent) {
    this.hidePassword.update(prev => !prev);
    event.stopPropagation();
  }

  togglePasswordConfirm(event: MouseEvent) {
    this.hidePasswordConfirm.update(prev => !prev);
    event.stopPropagation();
  }


  onRegister() {
    this.isRegistered.set(false);
    if (this.form.valid) {
      this.isLoading.set(true);

      const { email, password } = this.form.value;
      this.authService.register(email!, password!, email!)
        .pipe(
          switchMap(() => this.authService.sendEmailVerification())
        )
        .subscribe({
          next: () => {
            this.isLoading.set(false);
            this.isRegistered.set(true);
            this.countdownService.start(this.TIMER_KEY, this.COOLDOWN_MINUTES);
          },
          error: (err) => {
            this.isRegistered.set(false);
            this.isLoading.set(false);
            this.snackBar.show(this.languageService.translate('USER_ALREADY_REGISTERED'), 'Ok');
          }
        });

    } else {
      this.form.markAllAsTouched();
    }
  }


  openForgotPasswordDialog() {
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
