import { Component, Injector } from '@angular/core';
import { DonutChartGenerated } from './donut-chart-generated.component';

@Component({
  selector: 'page-donut-chart',
  templateUrl: './donut-chart.component.html'
})
export class DonutChartComponent extends DonutChartGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
