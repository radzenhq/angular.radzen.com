import { Component, Injector } from '@angular/core';
import { GaugeGenerated } from './gauge-generated.component';

@Component({
  selector: 'page-gauge',
  templateUrl: './gauge.component.html'
})
export class GaugeComponent extends GaugeGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
