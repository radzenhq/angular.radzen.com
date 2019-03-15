import { Component, Injector } from '@angular/core';
import { PieChartGenerated } from './pie-chart-generated.component';

@Component({
  selector: 'page-pie-chart',
  templateUrl: './pie-chart.component.html'
})
export class PieChartComponent extends PieChartGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
