import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input
} from '@angular/core';

import {
  StackAlign,
  StackDirection,
  StackGap,
  StackJustify
} from './stack.types';

@Component({
  selector: 'nds-stack',
  standalone: true,
  templateUrl: './stack.html',
  styleUrl: './stack.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'nds-stack',

    '[attr.data-direction]': 'direction()',
    '[attr.data-gap]': 'gap()',
    '[attr.data-align]': 'align()',
    '[attr.data-justify]': 'justify()',

    '[attr.data-wrap]': 'wrap() ? "" : null',

    role: 'group'
  }
})
export class Stack {

  readonly direction = input<StackDirection>('column');

  readonly gap = input<StackGap>('md');

  readonly align = input<StackAlign>('stretch');

  readonly justify = input<StackJustify>('start');

  readonly wrap = input(false, {
    transform: booleanAttribute
  });

}
