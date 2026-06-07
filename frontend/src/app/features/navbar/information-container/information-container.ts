import { Component, inject } from '@angular/core';
import { LanguageService } from '../../../core/services/ui/language-service';

@Component({
  selector: 'app-information-container',
  imports: [],
  templateUrl: './information-container.html',
  styleUrl: './information-container.scss',
})
export class InformationContainer {
  protected languageService = inject(LanguageService);
}
