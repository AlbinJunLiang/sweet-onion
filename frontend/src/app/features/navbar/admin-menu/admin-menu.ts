import { Component, inject } from '@angular/core';
import { MatMenu, MatMenuItem, MatMenuModule, MatMenuTrigger } from "@angular/material/menu";
import { MatIcon } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatListItemIcon, MatListItem } from "@angular/material/list";
import { LanguageService } from '../../../core/services/ui/language-service';
import { NavDrawerService } from '../../../core/services/ui/nav-drawer-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-menu',
  imports: [MatMenuModule, MatIcon, MatMenu, MatButtonModule, MatMenuTrigger, MatMenuItem, MatListItemIcon, MatListItem],
  templateUrl: './admin-menu.html',
  styleUrl: './admin-menu.scss',
})
export class AdminMenu {

  protected drawerService = inject(NavDrawerService);
  protected languageService = inject(LanguageService);

  private router = inject(Router);

  goTo(route: string = 'admin') {
    this.router.navigate([route]);
    if(this.drawerService.isMobile()){
    this.drawerService.toggle();
    }
  }

}
