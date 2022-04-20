/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@validator/dist/components';




export declare interface ValidatedInput extends Components.ValidatedInput {
  /**
   * This event is triggered when value of an input is changed, either by typing or pasting in. Current value is passed to the callback 
   */
  userInputChanged: EventEmitter<CustomEvent<string>>;
  /**
   * This event is triggered when input changes state from valid to invalid, and vice versa. Current validation state is passed to the callback 
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
