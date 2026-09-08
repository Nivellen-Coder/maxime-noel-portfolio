import {
  Directive,
  inject
} from '@angular/core';

import { FIELD_CONTEXT } from './field-context';

@Directive()
export abstract class AbstractFieldControl {

  protected readonly field =
      inject(
          FIELD_CONTEXT,
          {
              optional:true
          }
      );

}
