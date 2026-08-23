import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  contentChildren,
  inject,
  input,
  model,
  signal,
} from '@angular/core';

import { Size } from '../../../../shared/types/size.types';
import { FIELD_CONTEXT } from '../field/field-context';
import {
  InputType,
  InputVariant,
} from './input.types';


import {
    PrefixDirective
} from '../../../../shared/directives/prefix.directive';

import {
    SuffixDirective
} from '../../../../shared/directives/suffix.directive';

import { Icon } from '../../../../lib/components/icon/icon';
@Component({
  selector: 'nds-input',
  standalone: true,
  templateUrl: './input.html',
  styleUrl: './input.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'nds-input',

    '[attr.data-size]': 'size()',
    '[attr.data-variant]': 'variant()',
    '[attr.data-disabled]': 'disabled()',
    '[attr.data-readonly]': 'readonly()',

    '[attr.data-prefix]': 'hasPrefix()',
    '[attr.data-suffix]': 'hasSuffix()',
  },
  imports: [
    Icon,
  ]
})
export class Input {

  /* --------------------------------------------------------------------------
   * Context
   * -------------------------------------------------------------------------- */

  private readonly field = inject(
    FIELD_CONTEXT,
    {
      optional: true,
    },
  );

  /* --------------------------------------------------------------------------
   * Inputs
   * -------------------------------------------------------------------------- */

  readonly placeholder = input('');

  readonly type = input<InputType>('text');

  readonly variant = input<InputVariant>('outlined');

  readonly size = input<Size>('md');

  readonly disabled = input(false);

  readonly readonly = input(false);

  readonly required = input(false);

  /* --------------------------------------------------------------------------
   * Model
   * -------------------------------------------------------------------------- */

  readonly value = model<string>('');

    /* --------------------------------------------------------------------------
  * Internal state
  * -------------------------------------------------------------------------- */

  readonly passwordVisible = signal(false);

  /* --------------------------------------------------------------------------
  * Derived state
  * -------------------------------------------------------------------------- */

  readonly isPassword = computed(
    () => this.type() === 'password',
  );

  readonly nativeType = computed(() => {

    if (!this.isPassword()) {
      return this.type();
    }

    return this.passwordVisible()
      ? 'text'
      : 'password';

  });

  /* --------------------------------------------------------------------------
   * Accessibility
   * -------------------------------------------------------------------------- */

  readonly controlId = computed(() =>
    this.field?.controlId() ?? null,
  );

  readonly labelId = computed(() =>
    this.field?.labelId() ?? null,
  );

  readonly helperId = computed(() =>
    this.field?.helperId() ?? null,
  );

  readonly errorId = computed(() =>
    this.field?.errorId() ?? null,
  );

  readonly describedBy = computed(() => {

    const ids = [
      this.helperId(),
      this.errorId(),
    ].filter(Boolean);

    return ids.length
      ? ids.join(' ')
      : null;

  });

  /* --------------------------------------------------------------------------
   * Event handlers
   * -------------------------------------------------------------------------- */

  protected onInput(event: Event): void {

    const element =
      event.target as HTMLInputElement;

    this.value.set(element.value);

  }

  /* --------------------------------------------------------------------------
  * Event handlers
  * -------------------------------------------------------------------------- */

  protected togglePasswordVisibility(): void {

    this.passwordVisible.update(
      visible => !visible,
    );

  }

  readonly prefixes =
    contentChildren(PrefixDirective);

  readonly suffixes =
    contentChildren(SuffixDirective);

  readonly hasPrefix = computed(
    () => this.prefixes().length > 0
  );

  readonly hasSuffix = computed(
    () => this.suffixes().length > 0
  );

}
