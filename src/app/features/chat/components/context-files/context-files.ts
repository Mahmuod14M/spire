import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ChatService } from '../../../../core/services/chat.service';
import { FaIconComponent } from '../../../../shared/fa-icon.component';
import { ICONS } from '../../../../shared/icons';

@Component({
  selector: 'app-context-files',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FaIconComponent],
  template: `
    <div class="rounded-2xl bg-surface shadow-sm ring-1 ring-black/5">
      <button
        type="button"
        class="flex w-full items-center justify-between px-4 py-3 text-sm font-semibold text-ink"
        (click)="expanded.set(!expanded())"
        [attr.aria-expanded]="expanded()"
      >
        <span>{{ chat.enabledFilesCount() }} files loaded into context</span>
        <app-fa-icon
          [icon]="icons.chevronDown"
          [class]="'text-xs text-ink-muted transition-transform' + (expanded() ? ' rotate-180' : '')"
        />
      </button>

      @if (expanded()) {
        <ul class="max-h-72 space-y-1 overflow-y-auto border-t border-black/5 px-2 py-2">
          @for (file of chat.contextFiles(); track file.id) {
            <li class="flex items-center gap-3 rounded-xl px-2 py-2 hover:bg-surface-muted">
              <span
                class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                [style.backgroundColor]="file.accent + '1a'"
                [style.color]="file.accent"
              >
                <app-fa-icon [icon]="file.icon" />
              </span>
              <span class="min-w-0 flex-1">
                <span class="block truncate text-sm font-medium text-ink">{{ file.name }}</span>
                <span class="block text-xs text-ink-muted">{{ file.time }}</span>
              </span>
              <button
                type="button"
                class="text-xl transition"
                [class.text-secondary]="file.enabled"
                [class.text-ink-muted/30]="!file.enabled"
                [attr.aria-label]="'Toggle ' + file.name"
                [attr.aria-pressed]="file.enabled"
                (click)="chat.toggleFile(file.id)"
              >
                <app-fa-icon [icon]="file.enabled ? icons.toggleOn : icons.toggleOff" />
              </button>
            </li>
          }
        </ul>
      }
    </div>
  `,
})
export class ContextFilesComponent {
  protected readonly chat = inject(ChatService);
  protected readonly icons = ICONS;
  protected readonly expanded = signal(true);
}
