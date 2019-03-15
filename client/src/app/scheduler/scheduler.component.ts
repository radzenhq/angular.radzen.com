import { Component, Injector } from '@angular/core';
import { SchedulerGenerated } from './scheduler-generated.component';

@Component({
  selector: 'page-scheduler',
  templateUrl: './scheduler.component.html'
})
export class SchedulerComponent extends SchedulerGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
