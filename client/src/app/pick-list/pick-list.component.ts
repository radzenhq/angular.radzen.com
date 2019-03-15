import { Component, Injector } from '@angular/core';
import { PickListGenerated } from './pick-list-generated.component';

@Component({
  selector: 'page-pick-list',
  templateUrl: './pick-list.component.html'
})
export class PickListComponent extends PickListGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
