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
  template: `
    <nav
      class="flex h-full w-16 flex-col items-center gap-2 bg-surface py-4 ring-1 ring-black/5"
      aria-label="Primary"
    >
      @for (item of items; track item.id) {
        <button
          type="button"
          class="flex h-11 w-11 items-center justify-center rounded-xl text-lg transition"
          [class]="
            active() === item.id
              ? 'bg-secondary/10 text-secondary'
              : 'text-ink-muted hover:bg-surface-muted hover:text-ink'
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
        class="mt-auto flex h-10 w-10 items-center justify-center rounded-full bg-surface-muted text-ink-muted ring-1 ring-black/5 transition hover:text-ink"
        aria-label="Account"
      >
        <app-fa-icon [icon]="icons.user" />
      </button>
    </nav>
  `,
})
export class SideRail {
  protected readonly icons = ICONS;
  protected readonly active = signal('home');

  protected readonly items: RailItem[] = [
    { id: 'home', icon: ICONS.home, label: 'Home' },
    { id: 'apps', icon: ICONS.apps, label: 'Apps' },
    { id: 'briefcase', icon: ICONS.briefcase, label: 'Workspace' },
    { id: 'folder', icon: ICONS.folder, label: 'Files' },
    { id: 'tasks', icon: ICONS.tasks, label: 'Tasks' },
    { id: 'docs', icon: ICONS.documents, label: 'Documents' },
    { id: 'star', icon: ICONS.star, label: 'Favorites' },
    { id: 'shop', icon: ICONS.shop, label: 'Shop' },
  ];
}
