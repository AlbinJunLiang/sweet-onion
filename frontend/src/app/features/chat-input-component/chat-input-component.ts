import { Component, computed, ElementRef, inject, output, signal, viewChild } from '@angular/core';
import { VoiceSearchModal } from '../voice-search-modal/voice-search-modal';
import { MatDialog } from '@angular/material/dialog';
import { SpeechToTextService } from '../../core/services/ui/speech-to-text-service';
import { ChatMode } from '../../core/types/chat-mode-type';
import { ChatViewService } from '../../core/services/ui/chat-view-service';
import { LanguageService } from '../../core/services/ui/language-service';


@Component({
  selector: 'app-chat-input-component',
  imports: [],
  templateUrl: './chat-input-component.html',
  styleUrl: './chat-input-component.scss',
})
export class ChatInputComponent {

  public onSendText = output<string>();
  public onMode = output<ChatMode>();
  public searchQuery = signal<string>('');

  protected languageService = inject(LanguageService);
  protected speechToText = inject(SpeechToTextService);
  protected isVoiceSearchModalOpen = signal(false);


  protected text = computed(() => {
    const value = this.speechToText.textResult();
    return value.length > 500
      ? value.substring(0, 500) + '...'
      : value;
  });

  private textareaRef = viewChild.required<ElementRef<HTMLTextAreaElement>>('textarea');
  private chatViewService = inject(ChatViewService);
  private dialog = inject(MatDialog);



  public autoResize(textarea: HTMLTextAreaElement): void {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  }


  openVoiceModal() {
    this.isVoiceSearchModalOpen.set(true);
    this.speechToText.startSpeech();
    const dialogRef = this.dialog.open(VoiceSearchModal, {
      width: '400px',
      maxWidth: '90vw',
      disableClose: false
    });

    dialogRef.componentInstance.accept.subscribe((isAccept: boolean) => {
      if (isAccept) {
        this.send();
        this.speechToText.clearText();
      }
    });

    dialogRef.afterClosed().subscribe((result: string | undefined) => {
      if (result) {
        this.searchQuery.set(result);
      }
      this.isVoiceSearchModalOpen.set(false);
    });
  }

  send() {
    const textarea = this.textareaRef().nativeElement;
    const text = textarea.value.trim();
    if (text) {
      if (this.chatViewService.view() === 'startChat') {
        this.chatViewService.setView('newChat');
      }
      this.onSendText.emit(text);
      textarea.value = '';
      textarea.style.height = 'auto';
    }
  }
}
