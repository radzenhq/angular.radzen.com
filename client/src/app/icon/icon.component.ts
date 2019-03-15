import { Component, Injector } from '@angular/core';
import { IconGenerated } from './icon-generated.component';

@Component({
  selector: 'page-icon',
  templateUrl: './icon.component.html'
})
export class IconComponent extends IconGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
