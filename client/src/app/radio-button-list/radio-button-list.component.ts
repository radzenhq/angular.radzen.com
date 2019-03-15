import { Component, Injector } from '@angular/core';
import { RadioButtonListGenerated } from './radio-button-list-generated.component';

@Component({
  selector: 'page-radio-button-list',
  templateUrl: './radio-button-list.component.html'
})
export class RadioButtonListComponent extends RadioButtonListGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
