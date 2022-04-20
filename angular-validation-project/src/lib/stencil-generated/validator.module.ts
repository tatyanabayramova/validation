import {NgModule} from '@angular/core';

import {CustomInput} from 'src/lib/stencil-generated/components';
// @ts-ignore
import {defineCustomElements} from '@validator/loader';

defineCustomElements(window);

@NgModule({
  declarations: [
    CustomInput
  ],
  exports: [
    CustomInput,
  ],
  imports: [],
  providers: [],
})
export class ValidatorModule {
}
