import { Component, inject, output } from '@angular/core';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { SpeechToTextService } from '../../core/services/ui/speech-to-text-service';
import { LanguageService } from '../../core/services/ui/language-service';

@Component({
  selector: 'app-voice-search-modal',
  standalone: true,
  imports: [MatDialogModule, MatIconModule],
  templateUrl: './voice-search-modal.html',
  styleUrl: './voice-search-modal.scss'

})

export class VoiceSearchModal {

  private dialogRef = inject(MatDialogRef<VoiceSearchModal>);
  protected speechToText = inject(SpeechToTextService);

  protected languageService = inject(LanguageService);
  public transcribedText = this.speechToText.textResult;
  public accept = output<boolean>();


  onAccept() {
    this.accept.emit(true);
    this.close();
  }

  ngAfterViewInit(): void {
    this.speechToText.clearText(); 
    this.speechToText.startSpeech();
  }

  ngOnDestroy(): void {
    this.speechToText.stopSpeech();
  }

  toggleListening() {
    if (this.speechToText.isRecording()) {
      this.speechToText.stopSpeech();
    } else {
      this.speechToText.startSpeech();
    }
  }

  close() {
    this.speechToText.stopSpeech();
    this.dialogRef.close();
  }
}