import { Component, Injector } from '@angular/core';
import { ProgressBarGenerated } from './progress-bar-generated.component';

@Component({
  selector: 'page-progress-bar',
  templateUrl: './progress-bar.component.html'
})
export class ProgressBarComponent extends ProgressBarGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
