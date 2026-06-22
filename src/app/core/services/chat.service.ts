import { computed, Injectable, signal } from '@angular/core';
import { ChatMessage } from '../models/chat-message';
import { ContextFile } from '../models/context-file';
import { CHAT_MESSAGES } from '../data/chat-messages';
import { CONTEXT_FILES } from '../data/context-files';

@Injectable({ providedIn: 'root' })
export class ChatService {
  private readonly _isOpen = signal(false);
  private readonly _messages = signal<ChatMessage[]>(CHAT_MESSAGES);
  private readonly _contextFiles = signal<ContextFile[]>(CONTEXT_FILES);

  readonly isOpen = this._isOpen.asReadonly();
  readonly messages = this._messages.asReadonly();
  readonly contextFiles = this._contextFiles.asReadonly();

  readonly enabledFilesCount = computed(
    () => this._contextFiles().filter((file) => file.enabled).length,
  );

  open(): void {
    this._isOpen.set(true);
  }

  close(): void {
    this._isOpen.set(false);
  }

  toggle(): void {
    this._isOpen.update((open) => !open);
  }

  toggleFile(id: string): void {
    this._contextFiles.update((files) =>
      files.map((file) => (file.id === id ? { ...file, enabled: !file.enabled } : file)),
    );
  }

  send(text: string): void {
    const value = text.trim();
    if (!value) {
      return;
    }
    this._messages.update((messages) => [
      ...messages,
      { id: `m${messages.length + 1}`, role: 'user', text: value },
    ]);
  }
}
