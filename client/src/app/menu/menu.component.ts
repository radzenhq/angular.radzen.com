import { Component, Injector } from '@angular/core';
import { MenuGenerated } from './menu-generated.component';

@Component({
  selector: 'page-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent extends MenuGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
