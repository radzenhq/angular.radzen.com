import { Component, Injector } from '@angular/core';
import { TemplateFormGenerated } from './template-form-generated.component';

@Component({
  selector: 'page-template-form',
  templateUrl: './template-form.component.html'
})
export class TemplateFormComponent extends TemplateFormGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
