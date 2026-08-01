import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

import {
  TextAlign,
  TextElement,
  TextVariant,
  TextWeight
} from './text.types';

@Component({
  selector: 'nds-text',
  standalone: true,
  templateUrl: './text.html',
  styleUrl: './text.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'nds-text',

    '[attr.data-variant]': 'variant()',
    '[attr.data-align]': 'align()',
    '[attr.data-weight]': 'weight()'
  }
})
export class Text {

  /**
   * HTML element rendered by the component.
   */
  readonly as = input<TextElement>('span');

  /**
   * Typography variant.
   */
  readonly variant = input<TextVariant>('body-md');

  /**
   * Optional text alignment.
   */
  readonly align = input<TextAlign>('start');

  /**
   * Optional font weight override.
   */
  readonly weight = input<TextWeight>('regular');

}
