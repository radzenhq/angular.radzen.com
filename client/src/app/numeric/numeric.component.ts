import { Component, Injector } from '@angular/core';
import { NumericGenerated } from './numeric-generated.component';

@Component({
  selector: 'page-numeric',
  templateUrl: './numeric.component.html'
})
export class NumericComponent extends NumericGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
