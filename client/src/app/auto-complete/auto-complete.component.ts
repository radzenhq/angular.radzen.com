import { Component, Injector } from '@angular/core';
import { AutoCompleteGenerated } from './auto-complete-generated.component';

@Component({
  selector: 'page-auto-complete',
  templateUrl: './auto-complete.component.html'
})
export class AutoCompleteComponent extends AutoCompleteGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
