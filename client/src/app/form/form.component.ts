import { Component, Injector } from '@angular/core';
import { FormGenerated } from './form-generated.component';

@Component({
  selector: 'page-form',
  templateUrl: './form.component.html'
})
export class FormComponent extends FormGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
