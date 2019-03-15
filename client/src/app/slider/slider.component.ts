import { Component, Injector } from '@angular/core';
import { SliderGenerated } from './slider-generated.component';

@Component({
  selector: 'page-slider',
  templateUrl: './slider.component.html'
})
export class SliderComponent extends SliderGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
