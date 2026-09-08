import {
  Directive,
  ElementRef,
  Renderer2,
  inject,
} from '@angular/core';

import { FIELD_CONTEXT } from './field-context';

@Directive({
  selector: '[ndsFieldControl]',
  standalone: true,
})
export class FieldControlDirective {

  private readonly element =
    inject<ElementRef<HTMLElement>>(ElementRef);

  private readonly renderer =
    inject(Renderer2);

  protected readonly field =
    inject(FIELD_CONTEXT, {
      optional: true,
    });

  constructor() {

    if (!this.field) {
      return;
    }

    const element =
      this.element.nativeElement;

    const field =
      this.field;

    this.renderer.setAttribute(
      element,
      'id',
      field.controlId()
    );

    this.renderer.setAttribute(
      element,
      'aria-labelledby',
      field.labelId()
    );

    const describedBy =
      field.describedBy();

    if (describedBy) {
      this.renderer.setAttribute(
        element,
        'aria-describedby',
        describedBy
      );
    }

    this.renderer.setAttribute(
      element,
      'aria-required',
      String(field.required())
    );

    this.renderer.setAttribute(
      element,
      'aria-invalid',
      String(field.invalid())
    );

    this.renderer.setAttribute(
      element,
      'aria-disabled',
      String(field.disabled())
    );
  }
}
