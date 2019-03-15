import { Component, Injector } from '@angular/core';
import { MaskGenerated } from './mask-generated.component';

@Component({
  selector: 'page-mask',
  templateUrl: './mask.component.html'
})
export class MaskComponent extends MaskGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
