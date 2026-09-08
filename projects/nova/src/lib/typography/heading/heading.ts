import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input
} from '@angular/core';

import {
  HeadingAlign,
  HeadingLevel,
  HeadingSize
} from './heading.types';

@Component({
  selector: 'nds-heading',
  standalone: true,
  templateUrl: './heading.html',
  styleUrl: './heading.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'nds-heading',
    '[attr.data-size]': 'size()',
    '[attr.data-align]': 'align()'
  }
})
export class Heading {

  readonly level = input<HeadingLevel>('h2');

  readonly size = input<HeadingSize>('lg');

  readonly align = input<HeadingAlign>('left');

}
