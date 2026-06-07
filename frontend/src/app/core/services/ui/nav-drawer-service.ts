import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { computed, inject, Injectable, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatDrawer } from '@angular/material/sidenav';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavDrawerService {


  private breakpointObserver = inject(BreakpointObserver);
  private drawerInstance?: MatDrawer;

  public isMobile = toSignal(
    this.breakpointObserver
      .observe(Breakpoints.Handset)
      .pipe(map(result => result.matches)),
    { initialValue: false }
  );

  public isExpanded = signal(true);

  // 3. Propiedad computada: modo del drawer automático
  // Si es móvil es 'over' (flotante), si no es 'side' (fijo)
  public drawerMode = computed(() => this.isMobile() ? 'over' : 'side');

  setDrawer(drawer: MatDrawer) {
    this.drawerInstance = drawer;
  }

  toggle() {
    this.drawerInstance?.toggle();
  }

  toggleMenu() {
    this.isExpanded.update(v => !v);
  }

  closeMenu() {
    this.isExpanded.set(false);
  }
}
