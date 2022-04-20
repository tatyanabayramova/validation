import {NgModule} from '@angular/core';

import {ValidatedInput} from 'src/lib/stencil-generated/components';
// @ts-ignore
import {defineCustomElements} from '@validator/loader';

defineCustomElements(window);

@NgModule({
  declarations: [
    ValidatedInput
  ],
  exports: [
    ValidatedInput,
  ],
  imports: [],
  providers: [],
})
export class ValidatorModule {
}
