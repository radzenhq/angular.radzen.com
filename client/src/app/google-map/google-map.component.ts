import { Component, Injector } from '@angular/core';
import { GoogleMapGenerated } from './google-map-generated.component';

@Component({
  selector: 'page-google-map',
  templateUrl: './google-map.component.html'
})
export class GoogleMapComponent extends GoogleMapGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
