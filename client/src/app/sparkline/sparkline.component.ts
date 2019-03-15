import { Component, Injector } from '@angular/core';
import { SparklineGenerated } from './sparkline-generated.component';

@Component({
  selector: 'page-sparkline',
  templateUrl: './sparkline.component.html'
})
export class SparklineComponent extends SparklineGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
