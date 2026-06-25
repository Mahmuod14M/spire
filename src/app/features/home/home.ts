import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ChatService } from '../../core/services/chat.service';
import { HeroBanner } from './components/hero-banner/hero-banner';
import { ServicesSlider } from './components/services-slider/services-slider';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [HeroBanner, ServicesSlider],
  templateUrl: './home.html',
})
export class Home {
  protected readonly chat = inject(ChatService);

  openChat(): void {
    this.chat.open();
  }
}
