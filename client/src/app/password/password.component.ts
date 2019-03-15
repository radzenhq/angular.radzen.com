import { Component, Injector } from '@angular/core';
import { PasswordGenerated } from './password-generated.component';

@Component({
  selector: 'page-password',
  templateUrl: './password.component.html'
})
export class PasswordComponent extends PasswordGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
