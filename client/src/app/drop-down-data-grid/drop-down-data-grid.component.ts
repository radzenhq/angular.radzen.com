import { Component, Injector } from '@angular/core';
import { DropDownDataGridGenerated } from './drop-down-data-grid-generated.component';

@Component({
  selector: 'page-drop-down-data-grid',
  templateUrl: './drop-down-data-grid.component.html'
})
export class DropDownDataGridComponent extends DropDownDataGridGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
