import { Component, Injector } from '@angular/core';
import { DataListGenerated } from './data-list-generated.component';

@Component({
  selector: 'page-data-list',
  templateUrl: './data-list.component.html'
})
export class DataListComponent extends DataListGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
