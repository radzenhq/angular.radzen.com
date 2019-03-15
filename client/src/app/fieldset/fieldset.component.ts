import { Component, Injector } from '@angular/core';
import { FieldsetGenerated } from './fieldset-generated.component';

@Component({
  selector: 'page-fieldset',
  templateUrl: './fieldset.component.html'
})
export class FieldsetComponent extends FieldsetGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
