import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FaIconComponent } from '../../shared/fa-icon.component';
import { ICONS } from '../../shared/icons';

interface RailItem {
  id: string;
  image: string;
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
      class="mx-2 flex h-full w-full max-w-[70px] flex-col items-center gap-1.5 rounded-3xl border-r border-black/5 bg-surface-muted/60 bg-white p-2 py-5"
      aria-label="Primary"
    >
      @for (item of items; track item.id) {
        <button
          type="button"
          class="flex h-11 w-11 items-center justify-center rounded-xl transition"
          [class]="
            active() === item.id
              ? 'bg-primary/10'
              : 'hover:bg-white/80'
          "
          (click)="active.set(item.id)"
          [attr.aria-label]="item.label"
          [attr.aria-current]="active() === item.id ? 'page' : null"
        >
          <img [src]="item.image" alt="" aria-hidden="true" class="h-5 w-5 object-contain" />
        </button>
      }

      <button
        type="button"
        class="mt-auto flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg bg-white  ring-1 ring-black/5   shadow-sm transition "
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
    { id: 'home', image: 'images/home.png', label: 'Home' },
    { id: 'apps', image: 'images/grid-layout.png', label: 'Apps' },
    { id: 'bag', image: 'images/bag.png', label: 'Workspace' },
    { id: 'file', image: 'images/file.png', label: 'Files' },
    { id: 'calendar', image: 'images/calendar.png', label: 'Calendar' },
    { id: 'docs', image: 'images/docs.png', label: 'Documents' },
  ];
}
