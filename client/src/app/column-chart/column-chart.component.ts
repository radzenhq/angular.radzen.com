import { Component, Injector } from '@angular/core';
import { ColumnChartGenerated } from './column-chart-generated.component';

@Component({
  selector: 'page-column-chart',
  templateUrl: './column-chart.component.html'
})
export class ColumnChartComponent extends ColumnChartGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
