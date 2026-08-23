import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  contentChildren,
  input,
} from '@angular/core';

import { Size } from '../../../../shared/types/size.types';
import { Spinner } from '../../../../shared/ui/spinner/spinner';

import { PrefixDirective } from '../../../../shared/directives/prefix.directive';
import { SuffixDirective } from '../../../../shared/directives/suffix.directive';

import {
  ButtonColor,
  ButtonType,
  ButtonVariant,
} from './button.types';

@Component({
  selector: 'nds-button',
  standalone: true,
  templateUrl: './button.html',
  styleUrl: './button.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,

  host: {

    class: 'nds-button',

    '[attr.data-size]': 'size()',

    '[attr.data-variant]': 'variant()',

    '[attr.data-color]': 'color()',

    '[attr.data-loading]': 'loading()',

    '[attr.data-full-width]': 'fullWidth()',

    '[attr.data-prefix]': 'hasPrefix()',

    '[attr.data-suffix]': 'hasSuffix()',

  },
  imports: [Spinner],
})
export class Button {

  /* --------------------------------------------------------------------------
   * Inputs
   * -------------------------------------------------------------------------- */

  readonly variant = input<ButtonVariant>('filled');

  readonly color = input<ButtonColor>('primary');

  readonly size = input<Size>('md');

  readonly type = input<ButtonType>('button');

  readonly disabled = input(false);

  readonly loading = input(false);

  readonly fullWidth = input(false);

  /* --------------------------------------------------------------------------
   * Content
   * -------------------------------------------------------------------------- */

  readonly prefixes =
      contentChildren(PrefixDirective);

  readonly suffixes =
      contentChildren(SuffixDirective);

  /* --------------------------------------------------------------------------
   * Derived state
   * -------------------------------------------------------------------------- */

  readonly hasPrefix = computed(
      () => this.prefixes().length > 0,
  );

  readonly hasSuffix = computed(
      () => this.suffixes().length > 0,
  );

  readonly isDisabled = computed(
      () => this.disabled() || this.loading(),
  );

}
