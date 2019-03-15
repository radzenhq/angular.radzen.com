import { Component, Injector } from '@angular/core';
import { ButtonGenerated } from './button-generated.component';

@Component({
  selector: 'page-button',
  templateUrl: './button.component.html'
})
export class ButtonComponent extends ButtonGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
