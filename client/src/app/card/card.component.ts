import { Component, Injector } from '@angular/core';
import { CardGenerated } from './card-generated.component';

@Component({
  selector: 'page-card',
  templateUrl: './card.component.html'
})
export class CardComponent extends CardGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
