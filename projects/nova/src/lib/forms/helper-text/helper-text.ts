import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  ViewEncapsulation,
  inject,
} from '@angular/core';

import { FIELD_CONTEXT } from '../field/field-context';

let helperTextId = 0;

@Component({
  selector: 'nds-helper-text',
  standalone: true,
  templateUrl: './helper-text.html',
  styleUrl: './helper-text.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,

  host: {
    class: 'nds-helper-text',
    '[id]': 'id',
  },
})
export class HelperText implements OnDestroy {

  private readonly field = inject(
    FIELD_CONTEXT,
    { optional: true },
  );

  readonly id = `nds-helper-${++helperTextId}`;

  constructor() {
    this.field?.setHelperId(this.id);
  }

  ngOnDestroy(): void {
    this.field?.setHelperId(null);
  }
}
