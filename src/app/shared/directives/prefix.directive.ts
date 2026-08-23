import {
  Directive,
  ElementRef,
  inject,
} from '@angular/core';

@Directive({
  selector: '[ndsPrefix]',
  standalone: true,
})
export class PrefixDirective {

  readonly element =
    inject<ElementRef<HTMLElement>>(ElementRef);

}
