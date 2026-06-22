import { ChangeDetectionStrategy, Component, inject, output } from '@angular/core';
import { FaIconComponent } from '../../shared/fa-icon.component';
import { ICONS } from '../../shared/icons';

@Component({
  selector: 'app-top-nav',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FaIconComponent],
  templateUrl: './top-nav.html',
})
export class TopNav {
  protected readonly icons = ICONS;

  readonly menuToggle = output<void>();
}
