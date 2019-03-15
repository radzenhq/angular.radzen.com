import { Component, Injector } from '@angular/core';
import { TreeGridGenerated } from './tree-grid-generated.component';

@Component({
  selector: 'page-tree-grid',
  templateUrl: './tree-grid.component.html'
})
export class TreeGridComponent extends TreeGridGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
