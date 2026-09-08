import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input
} from '@angular/core';

import {
  SpinnerSize,
  SpinnerVariant
} from './spinner.types';

@Component({
  selector: 'nds-spinner',
  standalone: true,
  templateUrl: './spinner.html',
  styleUrl: './spinner.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'nds-spinner',

    '[attr.data-size]': 'size()',
    '[attr.data-variant]': 'variant()',

    'role': 'status',
    'aria-live': 'polite',
    'aria-label': 'Loading'
  }
})
export class Spinner {

  readonly size = input<SpinnerSize>('md');

  readonly variant = input<SpinnerVariant>('inherit');

}
