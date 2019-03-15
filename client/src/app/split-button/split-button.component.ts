import { Component, Injector } from '@angular/core';
import { SplitButtonGenerated } from './split-button-generated.component';

@Component({
  selector: 'page-split-button',
  templateUrl: './split-button.component.html'
})
export class SplitButtonComponent extends SplitButtonGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
