import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroBanner } from './components/hero-banner/hero-banner';
import { ServicesSlider } from './components/services-slider/services-slider';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [HeroBanner, ServicesSlider],
  templateUrl: './home.html',
})
export class Home {}
