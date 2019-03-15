import { Component, Injector } from '@angular/core';
import { ListBoxGenerated } from './list-box-generated.component';

@Component({
  selector: 'page-list-box',
  templateUrl: './list-box.component.html'
})
export class ListBoxComponent extends ListBoxGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
