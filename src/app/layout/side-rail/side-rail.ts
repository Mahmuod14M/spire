import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FaIconComponent } from '../../shared/fa-icon.component';
import { ICONS, IconDef } from '../../shared/icons';

interface RailItem {
  id: string;
  icon: IconDef;
  label: string;
}

@Component({
  selector: 'app-side-rail',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FaIconComponent],
  host: {
    class: 'block max-w-[70px] shrink-0',
  },
  template: `
    <nav
      class="flex h-full w-full max-w-[70px] bg-white rounded-3xl p-2 mx-2 flex-col items-center gap-1.5 border-r border-black/5 bg-surface-muted/60 py-5"
      aria-label="Primary"
    >
      @for (item of items; track item.id) {
        <button
          type="button"
          class="flex h-11 w-11 items-center justify-center rounded-xl text-lg transition"
          [class]="
            active() === item.id
              ? 'bg-primary/10 text-[#F6EDFC]/10'
              : 'text-ink-muted hover:bg-white/80 hover:text-ink'
          "
          (click)="active.set(item.id)"
          [attr.aria-label]="item.label"
          [attr.aria-current]="active() === item.id ? 'page' : null"
        >
          <app-fa-icon [icon]="item.icon" />
        </button>
      }

      <button
        type="button"
        class="mt-auto flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-primary/10 ring-2 ring-white shadow-sm transition hover:bg-primary/15"
        aria-label="Account"
      >
        <app-fa-icon [icon]="icons.user" class="text-lg text-primary" />
      </button>
    </nav>
  `,
})
export class SideRail {
  protected readonly icons = ICONS;
  protected readonly active = signal('home');

  protected readonly items: RailItem[] = [
    { id: 'home', icon: ICONS.home, label: 'Home' },
    { id: 'grid', icon: ICONS.grid, label: 'Dashboard' },
    { id: 'briefcase', icon: ICONS.briefcase, label: 'Workspace' },
    { id: 'folder', icon: ICONS.folder, label: 'Files' },
    { id: 'calendar', icon: ICONS.calendar, label: 'Calendar' },
    { id: 'docs', icon: ICONS.documents, label: 'Documents' },
    { id: 'tasks', icon: ICONS.tasks, label: 'Tasks' },
    { id: 'table', icon: ICONS.table, label: 'Reports' },
  ];
}
