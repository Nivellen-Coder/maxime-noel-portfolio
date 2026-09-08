import {
  booleanAttribute,
  Component,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  computed,
  inject,
  input,
  signal,
  model,
} from '@angular/core';

import { Size } from '../../core/types/size.types';
import { FIELD_CONTEXT } from '../field/field-context';
import {
  InputType,
  InputVariant,
} from './input.types';

import { FieldControlDirective } from '../field/field-control.directive';

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

  '[attr.data-disabled]': 'isDisabled()',
  '[attr.data-readonly]': 'readonly()',
  '[attr.data-required]': 'isRequired()',
  '[attr.data-invalid]': 'invalid()',
},
  imports: [
    FieldControlDirective,
  ],
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

  readonly disabled = input(false, { transform: booleanAttribute });

  readonly readonly = input(false, { transform: booleanAttribute });

  readonly required = input(false, { transform: booleanAttribute });

  readonly isDisabled = computed(() =>
    this.disabled() || (this.field?.disabled() ?? false)
  );

  readonly isRequired = computed(() =>
    this.required() || (this.field?.required() ?? false)
  );

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
    this.field?.controlId() ?? null
  );

  readonly labelId = computed(() =>
    this.field?.labelId() ?? null
  );

  readonly helperId = computed(() =>
    this.field?.helperId() ?? null
  );

  readonly errorId = computed(() =>
    this.field?.errorId() ?? null
  );

  readonly invalid = computed(() =>
    this.field?.invalid() ?? false,
  );

  readonly describedBy = computed(() =>
    this.field?.describedBy() ?? null
  );

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

}
