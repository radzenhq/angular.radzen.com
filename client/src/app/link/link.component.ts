import { Component, Injector } from '@angular/core';
import { LinkGenerated } from './link-generated.component';

@Component({
  selector: 'page-link',
  templateUrl: './link.component.html'
})
export class LinkComponent extends LinkGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
