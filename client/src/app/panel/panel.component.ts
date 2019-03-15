import { Component, Injector } from '@angular/core';
import { PanelGenerated } from './panel-generated.component';

@Component({
  selector: 'page-panel',
  templateUrl: './panel.component.html'
})
export class PanelComponent extends PanelGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
