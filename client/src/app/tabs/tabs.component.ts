import { Component, Injector } from '@angular/core';
import { TabsGenerated } from './tabs-generated.component';

@Component({
  selector: 'page-tabs',
  templateUrl: './tabs.component.html'
})
export class TabsComponent extends TabsGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
