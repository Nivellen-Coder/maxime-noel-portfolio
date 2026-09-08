import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  ViewEncapsulation,
  inject,
} from '@angular/core';

import { FIELD_CONTEXT } from '../field/field-context';

let errorTextId = 0;

@Component({
  selector: 'nds-error-text',
  standalone: true,
  templateUrl: './error-text.html',
  styleUrl: './error-text.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,

  host: {
    class: 'nds-error-text',
    '[id]': 'id',
  },
})
export class ErrorText implements OnDestroy {

  private readonly field = inject(
    FIELD_CONTEXT,
    { optional: true },
  );

  readonly id = `nds-error-${++errorTextId}`;

  constructor() {
    this.field?.setErrorId(this.id);
  }

  ngOnDestroy(): void {
    this.field?.setErrorId(null);
  }
}
