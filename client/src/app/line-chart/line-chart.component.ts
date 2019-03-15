import { Component, Injector } from '@angular/core';
import { LineChartGenerated } from './line-chart-generated.component';

@Component({
  selector: 'page-line-chart',
  templateUrl: './line-chart.component.html'
})
export class LineChartComponent extends LineChartGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
