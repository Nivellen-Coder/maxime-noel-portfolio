import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  inject,
  input,
} from '@angular/core';

import { FIELD_CONTEXT } from '../field/field-context';

@Component({
  selector: 'nds-label',
  standalone: true,
  templateUrl: './label.html',
  styleUrl: './label.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'nds-label',
    '[attr.id]': 'id()',
    '[attr.data-required]': 'required()',
    '[attr.for]': 'controlId()',
  },
})
export class Label {

  private readonly field = inject(
    FIELD_CONTEXT,
    {
      optional: true,
    }
  );

  readonly required = input(false, { transform: booleanAttribute });

  readonly isRequired = computed(() =>
    this.required() || (this.field?.required() ?? false),
  );

  readonly id = computed(() =>
    this.field?.labelId() ?? null
  );

  readonly controlId = computed(() =>
    this.field?.controlId() ?? null
  );
}
