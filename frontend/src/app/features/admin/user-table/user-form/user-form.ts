import { Component, effect, inject, input, model } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserStore } from '../../../../core/stores/user-store';
import { IUser } from '../../../../core/interfaces/user-interface';
import { SnackBarService } from '../../../../core/services/ui/snackbar-service';
import { ErrorRequest } from '../../../../core/interfaces/error-request-interface';
import { MatFormField, MatError, MatOption, MatSuffix, MatSelect, MatLabel } from "@angular/material/select";
import { MatIcon } from "@angular/material/icon";
import { MatProgressSpinner } from "@angular/material/progress-spinner";
import { MatInput } from '@angular/material/input';
import { MatAnchor } from "@angular/material/button";

@Component({
  selector: 'app-user-form',
  imports: [
    MatFormField, MatIcon, MatError, ReactiveFormsModule, MatOption,
    MatProgressSpinner, MatInput, MatSuffix, MatSelect, MatLabel, MatAnchor],
  templateUrl: './user-form.html',
  styleUrl: './user-form.scss',
})
export class UserForm {

  private fb = inject(NonNullableFormBuilder);
  protected userStore = inject(UserStore);
  public isFormOpen = model<boolean | null>(null);
  private snackbar = inject(SnackBarService);
  public editableUser = input<IUser | null>(null);


  // En tu componente .ts
  userForm = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(100)]],
    role: ['user', [Validators.required]],
    status: ['active', [Validators.required]],
    authId: ['', [Validators.required, Validators.maxLength(100)]]
  });


  constructor() {
    effect(() => {
      const editable = this.editableUser();
      if (editable) {
        this.userForm.patchValue({
          name: editable.name,
          role: editable.role,
          status: editable.status?.toLocaleLowerCase(),
          authId: editable.authId
        });
      }
    })
  }



  updateUser() {
    if (this.userForm.invalid) return;
    const formValues = this.userForm.getRawValue();
    this.userStore.updateUser(this.editableUser()?.id ?? '', formValues).subscribe({
      next: () => {
        this.snackbar.show('Actualizado', 'ok');
        this.isFormOpen.set(false);
      },
      error: (err) => {
        const error: ErrorRequest = err.error;
        this.snackbar.show(error.message, 'ok');
      }
    });
  }

  onCancel() {
    this.isFormOpen.set(false);
  }
}
