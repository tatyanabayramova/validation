/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@validator/dist/components';




export declare interface ValidatedInput extends Components.ValidatedInput {
  /**
   *  
   */
  userInputChanged: EventEmitter<CustomEvent<string>>;
  /**
   *  
   */
  validationChanged: EventEmitter<CustomEvent<boolean>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['placeholder', 'size', 'type', 'validationPattern']
})
@Component({
  selector: 'validated-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['placeholder', 'size', 'type', 'validationPattern']
})
export class ValidatedInput {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['userInputChanged', 'validationChanged']);
  }
}
