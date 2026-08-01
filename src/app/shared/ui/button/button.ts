import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  ViewEncapsulation
} from '@angular/core';

import {
  ButtonColor,
  ButtonSize,
  ButtonVariant
} from './button.types';

import { ButtonPrefixDirective } from './button-prefix.directive';
import { ButtonSuffixDirective } from './button-suffix.directive';

import { Spinner } from '../spinner/spinner';

@Component({
  selector: 'nds-button',
  standalone: true,
  templateUrl: './button.html',
  styleUrl: './button.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    Spinner
  ],
  host: {
  'class': 'nds-button',

  '[attr.data-variant]': 'variant()',
  '[attr.data-color]': 'color()',
  '[attr.data-size]': 'size()',

  '[attr.data-loading]': 'loading() ? "" : null',
  '[attr.data-disabled]': 'isDisabled() ? "" : null',
  '[attr.data-full-width]': 'fullWidth() ? "" : null'
  }
})
export class Button {

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

  readonly nativeType = input<
    'button' | 'submit' | 'reset'
  >('button');

  readonly isDisabled = computed(() =>
    this.loading() || this.disabled()
  );

  readonly prefix = contentChild(ButtonPrefixDirective);

  readonly suffix = contentChild(ButtonSuffixDirective);

  readonly hasPrefix = computed(() => !!this.prefix());

  readonly hasSuffix = computed(() => !!this.suffix());

}
