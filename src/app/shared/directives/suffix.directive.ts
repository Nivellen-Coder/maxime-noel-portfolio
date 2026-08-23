import {
  Directive,
  ElementRef,
  inject,
} from '@angular/core';

@Directive({
  selector: '[ndsSuffix]',
  standalone: true,
})
export class SuffixDirective {

  readonly element =
    inject<ElementRef<HTMLElement>>(ElementRef);

}
