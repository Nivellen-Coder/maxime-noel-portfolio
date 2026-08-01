import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  inject,
  input,
  model,
} from '@angular/core';

import { Size } from '../../../../shared/types/size.types';
import { FIELD_CONTEXT } from '../field/field-context';
import {
  InputType,
  InputVariant,
} from './input.types';

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
  },
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

}
