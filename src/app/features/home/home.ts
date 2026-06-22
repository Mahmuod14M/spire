import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FaIconComponent } from '../../shared/fa-icon.component';
import { ICONS } from '../../shared/icons';
import { ChatService } from '../../core/services/chat.service';
import { HeroBanner } from './components/hero-banner/hero-banner';
import { ServicesSlider } from './components/services-slider/services-slider';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [HeroBanner, ServicesSlider, FaIconComponent],
  templateUrl: './home.html',
})
export class Home {
  protected readonly icons = ICONS;
  private readonly chat = inject(ChatService);

  openChat(): void {
    this.chat.open();
  }
}
