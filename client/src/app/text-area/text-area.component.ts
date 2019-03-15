import { Component, Injector } from '@angular/core';
import { TextAreaGenerated } from './text-area-generated.component';

@Component({
  selector: 'page-text-area',
  templateUrl: './text-area.component.html'
})
export class TextAreaComponent extends TextAreaGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
