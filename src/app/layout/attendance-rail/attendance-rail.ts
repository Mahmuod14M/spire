import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ChatService } from '../../core/services/chat.service';

@Component({
  selector: 'app-attendance-rail',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block h-dvh shrink-0',
  },
  template: `
    @if (!chat.isOpen()) {
      <aside
        class="flex h-dvh w-[7.5rem] flex-col items-center gap-3 rounded-3xl bg-white p-2 pt-1"
      >
        <div class="flex w-full flex-col items-center rounded-2xl px-2 py-3 text-center">
          <img
            src="images/time.png"
            alt=""
            aria-hidden="true"
            class="mb-1 h-9 w-9 object-contain"
          />
          <span class="mt-1 text-xs text-ink-muted">Attendance</span>
        </div>

        <div class="flex w-full flex-col items-center rounded-2xl px-2 py-3 text-center">
          <img
            src="images/gate.png"
            alt=""
            aria-hidden="true"
            class="mb-1 h-9 w-9 object-contain"
          />
          <span class="text-xs font-medium leading-tight text-gate">Out of gate</span>
        </div>

        <hr class="my-8 w-full border-t border-gray-200" />

        <button
          type="button"
          class="flex items-center justify-center rounded-full transition hover:scale-[1.03]"
          aria-label="Open spire AI"
          (click)="openChat()"
        >
          <img src="images/add-btn.png" alt="" aria-hidden="true" class="object-contain" />
        </button>

        <hr class="my-8 w-full border-t border-gray-200" />

        <button
          type="button"
          class="mt-auto flex items-center justify-center transition hover:scale-[1.03]"
          (click)="openChat()"
          aria-label="Open spire AI"
        >
          <img src="images/stars.png" alt="" aria-hidden="true" class="object-contain" />
        </button>
      </aside>
    }
  `,
})
export class AttendanceRail {
  protected readonly chat = inject(ChatService);

  openChat(): void {
    this.chat.open();
  }
}
