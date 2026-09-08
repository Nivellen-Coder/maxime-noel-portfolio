import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input
} from '@angular/core';

import {
  TextSize,
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
    // '[attr.data-variant]': 'variant()',
    '[attr.data-size]': 'size()',
    // '[attr.data-align]': 'align()'
  }
})
export class Text {

  // readonly variant = input<TextVariant>('body');

  readonly size = input<TextSize>('md');

  // readonly align = input<TextAlign>('left');

}
