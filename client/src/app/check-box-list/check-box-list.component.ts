import { Component, Injector } from '@angular/core';
import { CheckBoxListGenerated } from './check-box-list-generated.component';

@Component({
  selector: 'page-check-box-list',
  templateUrl: './check-box-list.component.html'
})
export class CheckBoxListComponent extends CheckBoxListGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
