import { Component, Injector } from '@angular/core';
import { DropDownGenerated } from './drop-down-generated.component';

@Component({
  selector: 'page-drop-down',
  templateUrl: './drop-down.component.html'
})
export class DropDownComponent extends DropDownGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
