import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ChatMessage } from '../../../../core/models/chat-message';
import { BoldTextPipe } from '../../../../shared/bold-text.pipe';
import { FaIconComponent } from '../../../../shared/fa-icon.component';
import { ICONS } from '../../../../shared/icons';

@Component({
  selector: 'app-chat-message',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [BoldTextPipe, FaIconComponent],
  template: `
    @let msg = message();
    @if (msg.role === 'user') {
      <div class="flex justify-end">
        <div
          class="max-w-[80%] rounded-2xl rounded-tr-sm bg-gradient-to-r from-secondary/10 to-primary/10 px-4 py-2.5 text-sm font-medium text-ink"
        >
          {{ msg.text }}
        </div>
      </div>
    } @else {
      <div class="space-y-3">
        <div
          class="rounded-2xl rounded-tl-sm bg-surface px-4 py-3 text-sm leading-relaxed text-ink shadow-sm ring-1 ring-black/5"
        >
          <p>
            @for (seg of msg.text | boldText; track $index) {
              @if (seg.bold) {
                <strong class="font-semibold">{{ seg.text }}</strong>
              } @else {
                <span>{{ seg.text }}</span>
              }
            }
          </p>
          @if (msg.showFeedback) {
            <div class="mt-3 flex items-center gap-4 text-ink-muted">
              <button type="button" class="transition hover:text-secondary" aria-label="Helpful">
                <app-fa-icon [icon]="icons.thumbsUp" />
              </button>
              <button type="button" class="transition hover:text-secondary" aria-label="Not helpful">
                <app-fa-icon [icon]="icons.thumbsDown" />
              </button>
              <button type="button" class="transition hover:text-secondary" aria-label="Copy">
                <app-fa-icon [icon]="icons.copy" />
              </button>
            </div>
          }
        </div>

        @for (action of msg.actions ?? []; track action.id) {
          <button
            type="button"
            class="flex w-full items-center gap-3 rounded-xl bg-surface px-4 py-3 text-left text-sm font-medium text-ink shadow-sm ring-1 ring-black/5 transition hover:ring-secondary/40"
          >
            <app-fa-icon [icon]="action.icon" class="text-ink-muted" />
            <span>{{ action.label }}</span>
          </button>
        }
      </div>
    }
  `,
})
export class ChatMessageComponent {
  protected readonly icons = ICONS;
  readonly message = input.required<ChatMessage>();
}
