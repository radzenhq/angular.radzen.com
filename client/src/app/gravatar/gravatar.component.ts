import { Component, Injector } from '@angular/core';
import { GravatarGenerated } from './gravatar-generated.component';

@Component({
  selector: 'page-gravatar',
  templateUrl: './gravatar.component.html'
})
export class GravatarComponent extends GravatarGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
