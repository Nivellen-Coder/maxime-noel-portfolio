import {
  Directive,
  ElementRef,
  inject,
} from '@angular/core';

import { FIELD_CONTEXT } from './field-context';

@Directive({
  selector: '[ndsFieldControl]',
  standalone: true,
})
export class FieldControlDirective {

  /**
   * Native HTML element.
   */
  readonly element =
    inject<ElementRef<HTMLElement>>(ElementRef);

  /**
   * Optional parent Field context.
   */
  protected readonly field =
    inject(FIELD_CONTEXT, {
      optional: true,
    });

}
