import { ChangeDetectionStrategy, Component, ElementRef, inject, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChatService } from '../../../core/services/chat.service';
import { BreakpointService } from '../../../core/services/breakpoint.service';
import { FaIconComponent } from '../../../shared/fa-icon.component';
import { ICONS } from '../../../shared/icons';
import { ChatMessageComponent } from '../components/chat-message/chat-message';
import { ContextFilesComponent } from '../components/context-files/context-files';

@Component({
  selector: 'app-chat-panel',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, FaIconComponent, ChatMessageComponent, ContextFilesComponent],
  templateUrl: './chat-panel.html',
  host: { class: 'flex h-full flex-col bg-surface-muted' },
})
export class ChatPanel {
  protected readonly chat = inject(ChatService);
  protected readonly breakpoint = inject(BreakpointService);
  protected readonly icons = ICONS;
  protected draft = '';

  private readonly scroller = viewChild<ElementRef<HTMLElement>>('scroller');

  send(): void {
    this.chat.send(this.draft);
    this.draft = '';
    queueMicrotask(() => {
      const el = this.scroller()?.nativeElement;
      if (el) {
        el.scrollTop = el.scrollHeight;
      }
    });
  }

  startChat(): void {
    this.chat.start();
    queueMicrotask(() => {
      const el = this.scroller()?.nativeElement;
      if (el) {
        el.scrollTop = el.scrollHeight;
      }
    });
  }

  close(): void {
    this.chat.close();
  }
}
