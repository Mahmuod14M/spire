import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FaIconComponent } from '../../../../shared/fa-icon.component';
import { SERVICE_CATEGORIES } from '../../../../core/data/service-categories';

@Component({
  selector: 'app-services-slider',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FaIconComponent],
  templateUrl: './services-slider.html',
})
export class ServicesSlider {
  protected readonly categories = SERVICE_CATEGORIES;
}
