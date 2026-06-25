import { ChangeDetectionStrategy, Component, inject, output } from '@angular/core';
import { FaIconComponent } from '../../shared/fa-icon.component';
import { ICONS } from '../../shared/icons';
import { ChatService } from '../../core/services/chat.service';

@Component({
  selector: 'app-top-nav',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FaIconComponent],
  templateUrl: './top-nav.html',
})
export class TopNav {
  protected readonly icons = ICONS;
  private readonly chat = inject(ChatService);

  readonly menuToggle = output<void>();

  openChat(): void {
    this.chat.open();
  }
}
