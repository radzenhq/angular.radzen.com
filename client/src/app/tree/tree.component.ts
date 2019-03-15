import { Component, Injector } from '@angular/core';
import { TreeGenerated } from './tree-generated.component';

@Component({
  selector: 'page-tree',
  templateUrl: './tree.component.html'
})
export class TreeComponent extends TreeGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
