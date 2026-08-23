import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  signal
} from '@angular/core';

import { FIELD_CONTEXT } from './field-context';
import { createUniqueId } from '../../../services/identifiers.service';

@Component({
  selector: 'nds-field',
  standalone: true,
  templateUrl: './field.html',
  styleUrl: './field.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'nds-field'
  },
  providers: [
    {
      provide: FIELD_CONTEXT,
      useFactory: (field: Field) => field.context,
      deps: [Field]
    }
  ]
})
export class Field {

  /* --------------------------------------------------------------------------
   * Internal state
   * -------------------------------------------------------------------------- */

  readonly controlId = signal(createUniqueId('nds-control'));

  readonly labelId = signal(createUniqueId('nds-label'));

  readonly helperId = signal<string | null>(null);

  readonly errorId = signal<string | null>(null);

  readonly disabled = signal(false);

  readonly required = signal(false);

  readonly invalid = signal(false);

  /* --------------------------------------------------------------------------
   * Derived state
   * -------------------------------------------------------------------------- */

  readonly describedBy = computed(() => {

    const ids = [
      this.helperId(),
      this.errorId()
    ].filter(Boolean);

    return ids.length > 0
      ? ids.join(' ')
      : null;

  });

  /* --------------------------------------------------------------------------
   * Context
   * -------------------------------------------------------------------------- */

  readonly context = {
    controlId: this.controlId,
    labelId: this.labelId,
    helperId: this.helperId,
    errorId: this.errorId,
    disabled: this.disabled,
    required: this.required,
    invalid: this.invalid
  };

}
