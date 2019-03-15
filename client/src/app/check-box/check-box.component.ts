import { Component, Injector } from '@angular/core';
import { CheckBoxGenerated } from './check-box-generated.component';

@Component({
  selector: 'page-check-box',
  templateUrl: './check-box.component.html'
})
export class CheckBoxComponent extends CheckBoxGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
