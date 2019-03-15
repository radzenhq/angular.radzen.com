import { Component, Injector } from '@angular/core';
import { DataGridGenerated } from './data-grid-generated.component';

@Component({
  selector: 'page-data-grid',
  templateUrl: './data-grid.component.html'
})
export class DataGridComponent extends DataGridGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
