import { Component, Injector } from '@angular/core';
import { AreaChartGenerated } from './area-chart-generated.component';

@Component({
  selector: 'page-area-chart',
  templateUrl: './area-chart.component.html'
})
export class AreaChartComponent extends AreaChartGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
