import { Component, Injector } from '@angular/core';
import { AccordionGenerated } from './accordion-generated.component';

@Component({
  selector: 'page-accordion',
  templateUrl: './accordion.component.html'
})
export class AccordionComponent extends AccordionGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
