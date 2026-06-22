import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { FaVariant, IconDef } from './icons';

@Component({
  selector: 'app-fa-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'inline-flex shrink-0 items-center justify-center leading-none' },
  template: `
    <i
      [class]="classes()"
      [attr.aria-hidden]="label() ? null : 'true'"
      [attr.aria-label]="label()"
    ></i>
  `,
})
export class FaIconComponent {
  /** Full icon definition — preferred when loading from data models. */
  readonly icon = input<IconDef>();
  /** Icon name without the `fa-` prefix, e.g. `bars`. */
  readonly name = input<string>();
  readonly variant = input<FaVariant>('solid');
  readonly fixedWidth = input(false, { alias: 'fw' });
  readonly label = input<string>();
  readonly iconClass = input('', { alias: 'class' });

  protected readonly classes = computed(() => {
    const def = this.icon();
    const name = def?.name ?? this.name();
    if (!name) {
      return this.iconClass();
    }
    const variant = def?.variant ?? this.variant();
    const styleClass = variant === 'regular' ? 'fa-regular' : 'fa-solid';
    return [
      'fa',
      styleClass,
      `fa-${name}`,
      this.fixedWidth() ? 'fa-fw' : '',
      this.iconClass(),
    ]
      .filter(Boolean)
      .join(' ');
  });
}
