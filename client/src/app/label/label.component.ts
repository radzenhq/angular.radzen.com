import { Component, Injector } from '@angular/core';
import { LabelGenerated } from './label-generated.component';

@Component({
  selector: 'page-label',
  templateUrl: './label.component.html'
})
export class LabelComponent extends LabelGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
