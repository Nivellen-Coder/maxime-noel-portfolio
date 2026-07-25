import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  booleanAttribute,
  computed,
  input
} from '@angular/core';

import {
  ButtonColor,
  ButtonSize,
  ButtonVariant
} from './button.types';

@Component({
  selector: 'nds-button',
  standalone: true,
  templateUrl: './button.html',
  styleUrl: './button.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,

  host: {
    'class': 'nds-button',

    '[attr.data-variant]': 'variant()',
    '[attr.data-color]': 'color()',
    '[attr.data-size]': 'size()',

    '[class.nds-button--loading]': 'loading()',
    '[class.nds-button--full-width]': 'fullWidth()',

    '[attr.aria-busy]': 'loading()',
    '[attr.aria-disabled]': 'disabledState()',

    '[attr.disabled]': 'disabledState() ? "" : null'
  }
})
export class ButtonComponent {

  readonly variant = input<ButtonVariant>('filled');

  readonly color = input<ButtonColor>('primary');

  readonly size = input<ButtonSize>('md');

  readonly loading = input(false, {
    transform: booleanAttribute
  });

  readonly disabled = input(false, {
    transform: booleanAttribute
  });

  readonly fullWidth = input(false, {
    transform: booleanAttribute
  });

  readonly disabledState = computed(() =>
    this.loading() || this.disabled()
  );

}
