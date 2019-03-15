import { Component, Injector } from '@angular/core';
import { DatePickerGenerated } from './date-picker-generated.component';

@Component({
  selector: 'page-date-picker',
  templateUrl: './date-picker.component.html'
})
export class DatePickerComponent extends DatePickerGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
