import { Component, Injector } from '@angular/core';
import { FileInputGenerated } from './file-input-generated.component';

@Component({
  selector: 'page-file-input',
  templateUrl: './file-input.component.html'
})
export class FileInputComponent extends FileInputGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
