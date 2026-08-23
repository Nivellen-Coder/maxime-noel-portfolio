import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

import { Alignment } from '../../../../shared/types/alignment.types';
import { Justify } from '../../../../shared/types/justify.types';
import { Spacing } from '../../../../shared/types/spacing.types';

@Component({
  selector: 'nds-inline',
  standalone: true,

  templateUrl: './inline.html',
  styleUrl: './inline.scss',

  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,

  host: {

    class: 'nds-inline',

    '[attr.data-gap]': 'gap()',

    '[attr.data-padding]': 'padding()',

    '[attr.data-align]': 'align()',

    '[attr.data-justify]': 'justify()',

    '[attr.data-full-width]': 'fullWidth()',

  }

})
export class Inline {

  readonly gap =
    input<Spacing>('md');

  readonly padding =
    input<Spacing>('none');

  readonly align =
    input<Alignment>('center');

  readonly justify =
    input<Justify>('start');

  readonly fullWidth =
    input(false);

}
