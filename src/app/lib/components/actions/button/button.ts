import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { ButtonColor, ButtonSize, ButtonVariant } from './button.types';
import { Spinner } from "../../../../shared/ui/spinner/spinner";

@Component({
  selector: 'nds-button',
  standalone: true,

  templateUrl: './button.html',
  styleUrl: './button.scss',

  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,

  host: {

    class: 'nds-button',

    '[attr.data-variant]': 'variant()',

    '[attr.data-color]': 'color()',

    '[attr.data-size]': 'size()',

    '[attr.data-loading]': 'loading()',

    '[attr.data-disabled]': 'disabled()',

  },
  imports: [Spinner]

})
export class Button {

  /* --------------------------------------------------------------------------
   * Inputs
   * -------------------------------------------------------------------------- */

  readonly variant =
    input<ButtonVariant>('filled');

  readonly color =
    input<ButtonColor>('primary');

  readonly size =
    input<ButtonSize>('md');

  readonly disabled =
    input(false);

  readonly loading =
    input(false);

  readonly type =
    input<'button' | 'submit' | 'reset'>('button');

  protected readonly isInteractive =
    computed(() =>
      !this.disabled()
    );

}
