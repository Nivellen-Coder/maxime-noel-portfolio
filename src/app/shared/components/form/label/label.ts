import {
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
  },
})
export class Label {

  /* --------------------------------------------------------------------------
   * Context
   * -------------------------------------------------------------------------- */

  /* --------------------------------------------------------------------------
   * Inputs
   * -------------------------------------------------------------------------- */

  private readonly field = inject(FIELD_CONTEXT, {
    optional: true,
  });

  readonly required = input(false);

  /* --------------------------------------------------------------------------
   * Accessibility
   * -------------------------------------------------------------------------- */

  readonly controlId = computed(() =>
    this.field?.controlId() ?? null
  );

}
