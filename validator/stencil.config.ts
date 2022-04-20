import { Config } from '@stencil/core';
import {angularOutputTarget} from '@stencil/angular-output-target';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'validator',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    angularOutputTarget({
      componentCorePackage: '@validator/dist/components',
      directivesProxyFile: './../angular-validation-project/src/lib/stencil-generated/components.ts',
    }),
  ],
  plugins: [sass()],
};
