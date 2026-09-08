import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

import { Spinner } from '../../feedback/spinner/spinner';

import {
  ButtonSize,
  ButtonType,
  ButtonVariant,
} from './button.types';

@Component({
  selector: 'nds-button',
  standalone: true,
  imports: [Spinner],
  templateUrl: './button.html',
  styleUrl: './button.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'nds-button',
    '[attr.data-size]': 'size()',
    '[attr.data-variant]': 'variant()',
    '[attr.data-loading]': 'loading()',
    '[attr.data-disabled]': 'disabled()',
  },
})
export class Button {
  readonly variant = input<ButtonVariant>('primary');

  readonly size = input<ButtonSize>('md');

  readonly type = input<ButtonType>('button');

  readonly disabled = input(false, {
    transform: booleanAttribute,
  });

  readonly loading = input(false, {
    transform: booleanAttribute,
  });
}
