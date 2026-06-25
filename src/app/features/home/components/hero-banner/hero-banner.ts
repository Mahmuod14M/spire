import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ChatService } from '../../../../core/services/chat.service';

@Component({
  selector: 'app-hero-banner',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './hero-banner.html',
})
export class HeroBanner {
  private readonly chat = inject(ChatService);

  openChat(): void {
    this.chat.open();
  }
}
