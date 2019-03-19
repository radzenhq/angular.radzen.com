import { Component, Injector } from '@angular/core';
import { PageWithParameterGenerated } from './page-with-parameter-generated.component';

@Component({
  selector: 'page-page-with-parameter',
  templateUrl: './page-with-parameter.component.html'
})
export class PageWithParameterComponent extends PageWithParameterGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
