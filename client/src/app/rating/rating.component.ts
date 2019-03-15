import { Component, Injector } from '@angular/core';
import { RatingGenerated } from './rating-generated.component';

@Component({
  selector: 'page-rating',
  templateUrl: './rating.component.html'
})
export class RatingComponent extends RatingGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
