import { Component, Injector } from '@angular/core';
import { UploadGenerated } from './upload-generated.component';

@Component({
  selector: 'page-upload',
  templateUrl: './upload.component.html'
})
export class UploadComponent extends UploadGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
