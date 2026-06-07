import {  Injectable, signal } from '@angular/core';

@Injectable({
    providedIn: 'root' 
})
export class TextToSpeechService {

    public isPlaying = signal<boolean>(false);


    play(text: string, lang: string = 'es-ES'): void {
        if (!text) return;
        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = lang;

        utterance.onstart = () => this.isPlaying.set(true);
        utterance.onend = () => this.isPlaying.set(false);
        utterance.onerror = () => this.isPlaying.set(false);

        window.speechSynthesis.speak(utterance);
    }

    stop(): void {
        window.speechSynthesis.cancel();
        this.isPlaying.set(false);
    }


    playAudio(text: string, lang: string = 'es-ES') {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = lang;
        window.speechSynthesis.speak(utterance);
    }
}