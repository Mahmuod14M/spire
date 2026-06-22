import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FaIconComponent } from '../../../../shared/fa-icon.component';
import { ICONS } from '../../../../shared/icons';
import { ChatService } from '../../../../core/services/chat.service';

@Component({
  selector: 'app-hero-banner',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FaIconComponent],
  templateUrl: './hero-banner.html',
})
export class HeroBanner {
  protected readonly icons = ICONS;
  private readonly chat = inject(ChatService);

  openChat(): void {
    this.chat.open();
  }
}
