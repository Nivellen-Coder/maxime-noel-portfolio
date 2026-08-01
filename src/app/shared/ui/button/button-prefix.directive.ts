import {
  Directive,
  ElementRef,
  inject
} from '@angular/core';

@Directive({
  selector: '[ndsButtonPrefix]',
  standalone: true,
  exportAs: 'ndsButtonPrefix'
})
export class ButtonPrefixDirective {

  /**
   * Référence de l'élément projeté.
   * Utile pour de futures animations, mesures ou focus.
   */
  readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);

}
