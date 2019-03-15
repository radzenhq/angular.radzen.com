import { Component, Injector } from '@angular/core';
import { TextBoxGenerated } from './text-box-generated.component';

@Component({
  selector: 'page-text-box',
  templateUrl: './text-box.component.html'
})
export class TextBoxComponent extends TextBoxGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
