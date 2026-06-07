import { Injectable, signal } from "@angular/core";
import { ChatView } from "../../types/chat-view-type";

@Injectable({ providedIn: 'root' })
export class ChatViewService {

    private _view = signal<ChatView>("startChat");
    public view = this._view.asReadonly();


    public setView(view: ChatView): void {
        if (this._view() !== view) {
            this._view.set(view);
        }
    }

}