import { Component, Injector } from '@angular/core';
import { SelectBarGenerated } from './select-bar-generated.component';

@Component({
  selector: 'page-select-bar',
  templateUrl: './select-bar.component.html'
})
export class SelectBarComponent extends SelectBarGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
