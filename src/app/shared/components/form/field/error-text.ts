import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  inject,
} from '@angular/core';

import { FIELD_CONTEXT } from '../field/field-context';

@Component({
  selector: 'nds-error-text',
  standalone: true,
  templateUrl: './error-text.html',
  styleUrl: './error-text.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'nds-error-text',
    role: 'alert',
  },
})
export class ErrorTextComponent {

  private readonly field = inject(
    FIELD_CONTEXT,
    {
      optional: true,
    },
  );

  readonly id = computed(
    () => this.field?.errorId() ?? null,
  );

}
