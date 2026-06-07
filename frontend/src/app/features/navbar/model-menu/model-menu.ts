import { Component, inject } from '@angular/core';
import { MatIcon } from "@angular/material/icon";
import { MatMenu, MatMenuTrigger, MatMenuItem } from "@angular/material/menu";
import { MatListItem, MatListItemIcon } from "@angular/material/list";
import { ConfigService } from '../../../core/services/ui/config-service';
import { ModelConfig } from '../../../core/interfaces/model-config-interface';
import { LanguageService } from '../../../core/services/ui/language-service';
import { ModelStore } from '../../../core/stores/model-store';


@Component({
  selector: 'app-model-menu',
  imports: [MatIcon, MatMenu, MatMenuTrigger, MatListItem, MatListItemIcon, MatMenuItem],
  templateUrl: './model-menu.html',
  styleUrl: './model-menu.scss',
})
export class ModelMenu {

  private configService = inject(ConfigService);
  public selectedModel = this.configService.model;
  protected languageService = inject(LanguageService);
  protected modelStore = inject(ModelStore);

  ngOnInit() {
    this.modelStore.loadModels();
  }

  selectModel(model: ModelConfig) {
    this.selectedModel.set(model);
  }
}
