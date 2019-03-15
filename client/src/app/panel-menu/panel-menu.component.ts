import { Component, Injector } from '@angular/core';
import { PanelMenuGenerated } from './panel-menu-generated.component';

@Component({
  selector: 'page-panel-menu',
  templateUrl: './panel-menu.component.html'
})
export class PanelMenuComponent extends PanelMenuGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
