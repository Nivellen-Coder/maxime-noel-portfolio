import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  inject,
} from '@angular/core';

import { FIELD_CONTEXT } from '../field/field-context';

@Component({
  selector: 'nds-helper-text',
  standalone: true,
  templateUrl: './helper-text.component.html',
  styleUrl: './helper-text.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'nds-helper-text',
  },
})
export class HelperTextComponent {

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
   * Accessibility
   * -------------------------------------------------------------------------- */

  readonly id = computed(
    () => this.field?.helperId() ?? null,
  );

}
