import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

import { Alignment } from '../../types/alignment.types';
import { Justify } from '../../types/justify.types';
import { Spacing } from '../../types/spacing.types';

@Component({
  selector: 'nds-stack',
  standalone: true,

  templateUrl: './stack.html',
  styleUrl: './stack.scss',

  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,

  host: {

    class: 'nds-stack',

    '[attr.data-gap]': 'gap()',

    '[attr.data-padding]': 'padding()',

    '[attr.data-align]': 'align()',

    '[attr.data-justify]': 'justify()',

    '[attr.data-full-width]': 'fullWidth()',

  }

})
export class Stack {

  /* --------------------------------------------------------------------------
   * Inputs
   * -------------------------------------------------------------------------- */

  readonly gap =
    input<Spacing>('md');

  readonly padding =
    input<Spacing>('none');

  readonly align =
    input<Alignment>('stretch');

  readonly justify =
    input<Justify>('start');

  readonly fullWidth =
    input(false);

}
