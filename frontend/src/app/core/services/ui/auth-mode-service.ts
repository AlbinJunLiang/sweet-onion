import { Injectable, signal, computed } from "@angular/core";
import { AuthMode } from "../../types/auth-mode-type";

@Injectable({ providedIn: 'root' })
export class AuthModeService {

  private readonly authModeState = signal<AuthMode>('LOGIN');
  readonly authMode = this.authModeState.asReadonly();

  setAuthMode(mode: AuthMode): void {
    this.authModeState.set(mode);
  }
}