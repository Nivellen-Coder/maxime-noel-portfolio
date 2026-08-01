import {
  Directive,
  ElementRef,
  inject
} from '@angular/core';

@Directive({
  selector: '[ndsButtonSuffix]',
  standalone: true,
  exportAs: 'ndsButtonSuffix'
})
export class ButtonSuffixDirective {

  /**
   * Référence de l'élément projeté.
   * Utile pour de futures animations, mesures ou focus.
   */
  readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);

}
