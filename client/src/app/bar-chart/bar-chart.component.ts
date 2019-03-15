import { Component, Injector } from '@angular/core';
import { BarChartGenerated } from './bar-chart-generated.component';

@Component({
  selector: 'page-bar-chart',
  templateUrl: './bar-chart.component.html'
})
export class BarChartComponent extends BarChartGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
