import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input
} from '@angular/core';

import { TextVariant } from '../../../../lib/components/text/text.types';

@Component({
  selector: 'nds-label',
  standalone: true,
  templateUrl: './label.html',
  styleUrl: './label.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'nds-label',

    '[attr.data-required]': 'required()'
  }
})
export class Label {

  /**
   * Indicates that the associated field is required.
   */
  readonly required = input(false);

  /**
   * Typography variant used internally.
   */
  protected readonly variant: TextVariant = 'label-md';

}
