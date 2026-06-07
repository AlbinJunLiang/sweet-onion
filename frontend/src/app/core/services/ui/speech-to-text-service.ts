import { inject, Injectable, signal } from '@angular/core';
import { ConfigService } from './config-service';

@Injectable({
  providedIn: 'root'
})
export class SpeechToTextService {

  private configService = inject(ConfigService);
  private recognition: any;
  private isStarting = false;

  textResult = signal<string>('');
  isRecording = signal<boolean>(false);
  errorMsg = signal<string | null>(null);

  constructor() {
    this.initSpeechRecognition();
  }

  private initSpeechRecognition() {
    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      console.error('❌ Speech Recognition no soportado');
      this.errorMsg.set('Navegador no soportado');
      return;
    }

    this.recognition = new SpeechRecognition();

    this.recognition.lang = this.configService.recognitionLang() ?? 'es-ES';
    this.recognition.continuous = true;
    this.recognition.interimResults = false;

    this.recognition.onstart = () => {
      this.isRecording.set(true);
      this.errorMsg.set(null);
    };

    this.recognition.onresult = (event: any) => {
      let appendText = '';

      for (let i = event.resultIndex; i < event.results.length; i++) {
        if (event.results[i].isFinal) {
          appendText += event.results[i][0].transcript + ' ';
        }
      }

      if (appendText.trim()) {
        this.textResult.update(actual =>
          actual + appendText
        );
      }
    };

    this.recognition.onerror = (event: any) => {
      this.errorMsg.set(`Error: ${event.error}`);
      this.isRecording.set(false);
      this.isStarting = false;
    };

    this.recognition.onend = () => {
      this.isRecording.set(false);
      this.isStarting = false;
    };
  }

  startSpeech() {
  if (!this.recognition) return;

  if (this.isRecording() || this.isStarting) return;

  this.isStarting = true;

  try {
    this.recognition.start();
  } catch (e: any) {
    console.error('Error al iniciar:', e.message);
  }
}

  stopSpeech() {
    if (!this.recognition) return;

    try {
      this.recognition.stop();
      this.isRecording.set(false);
      this.isStarting = false;
    } catch (e: any) {
      console.warn('Error al detener:', e);
    }
  }

  clearText() {
    this.textResult.set('');
  }
}