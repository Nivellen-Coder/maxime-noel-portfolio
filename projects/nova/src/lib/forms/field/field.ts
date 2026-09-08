import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  signal,
  input,
} from '@angular/core';

import { FIELD_CONTEXT } from './field-context';
import { createUniqueId } from '../../core/services/identifiers.service';

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

  readonly disabled = input(false, { transform: booleanAttribute });
  readonly required = input(false, { transform: booleanAttribute });
  readonly invalid = input(false, { transform: booleanAttribute });

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
    describedBy: this.describedBy,

    disabled: this.disabled,
    required: this.required,
    invalid: this.invalid,

    setHelperId: (id: string | null) => this.setHelperId(id),
    setErrorId: (id: string | null) => this.setErrorId(id),
  };

  setHelperId(id: string | null): void {
    this.helperId.set(id);
  }

  setErrorId(id: string | null): void {
    this.errorId.set(id);
  }

}
