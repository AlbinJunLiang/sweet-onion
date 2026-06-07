import { Component, computed, inject, signal } from '@angular/core';
import { AuthService } from '../../../core/auth/auth-service';
import { SnackBarService } from '../../../core/services/ui/snackbar-service';
import { CountdownService } from '../../../core/services/ui/countdown-service';
import { MatDialogRef, MatDialogClose, MatDialog } from '@angular/material/dialog';
import { Verify } from '../verify/verify';
import { MatIcon } from "@angular/material/icon";
import { MatError, MatLabel, MatFormField } from "@angular/material/form-field";
import { FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { Auth } from '../auth';
import { MatProgressSpinner } from "@angular/material/progress-spinner";
import { LanguageService } from '../../../core/services/ui/language-service';

@Component({
  selector: 'app-forgot-dialog',
  imports: [
    MatIcon, MatDialogClose,
    MatError, MatLabel, MatFormField,
    ReactiveFormsModule, MatInputModule,
    MatProgressSpinner],
  templateUrl: './forgot-dialog.html',
  styleUrl: './forgot-dialog.scss',
})
export class ForgotDialog {

  private authService = inject(AuthService);
  private snackBarService = inject(SnackBarService);
  private dialogRef = inject(MatDialogRef<Verify>);
  private countdownService = inject(CountdownService);
  private dialog = inject(MatDialog);
  protected isLoading = signal(false);
  private readonly TIMER_KEY = 'forgot';
  private readonly COOLDOWN_MINUTES = 10;
  private fb = inject(NonNullableFormBuilder);
  public form: FormGroup = this.createForm();
    protected languageService = inject(LanguageService);
  

  private createForm(): FormGroup {
    return this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  protected step = computed<'initial' | 'sent'>(() =>
    this.countdownService.isActive(this.TIMER_KEY) ? 'sent' : 'initial'
  );

  protected countdown = computed<string>(() =>
    this.countdownService.getLabel(this.TIMER_KEY, '10:00')
  );

  sendForgotPassword() {
    if (this.form.valid) {
      const { email } = this.form.value;
      this.onForgotPassword(email);
    } else {
      this.form.markAllAsTouched();
    }
  }

  onForgotPassword(email: string) {
    this.isLoading.set(true);
    this.authService.sendPasswordResetEmail(email).subscribe({
      next: () => {
        this.isLoading.set(false);
        this.countdownService.start(this.TIMER_KEY, this.COOLDOWN_MINUTES);
        this.snackBarService.show(this.languageService.translate('RECOVERY_EMAIL_SENT'), 'Ok');
      },
      error: (err) => {
        this.isLoading.set(false);
        this.snackBarService.show(this.languageService.translate('LINK_SEND_ERROR'), 'Ok');
      }
    });
  }

  close() {
    this.form.reset();
    this.dialogRef.close();

    if (!this.authService.isLoggedIn()) {
      this.openLogin();
    }
  }

  openLogin() {
    this.dialog.open(Auth, {
      width: '420px',
      maxWidth: '95vw',
      panelClass: 'custom-dialog-login-container',
      disableClose: false
    });
  }
}
