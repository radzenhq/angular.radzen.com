import { Component, Injector } from '@angular/core';
import { StepsGenerated } from './steps-generated.component';

@Component({
  selector: 'page-steps',
  templateUrl: './steps.component.html'
})
export class StepsComponent extends StepsGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
