import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  contentChildren,
  input,
  model,
} from '@angular/core';

import { Size } from '../../../../shared/types/size.types';

import {
  PrefixDirective
} from '../../../../shared/directives/prefix.directive';

import {
  SuffixDirective
} from '../../../../shared/directives/suffix.directive';

@Component({
  selector: 'nds-textarea',
  standalone: true,
  templateUrl: './textarea.html',
  styleUrl: './textarea.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'nds-textarea',

    '[attr.data-size]': 'size()',

    '[attr.data-resize]': 'resize()',

    '[attr.data-prefix]': 'hasPrefix()',

    '[attr.data-suffix]': 'hasSuffix()',
  },
})
export class Textarea {

  readonly placeholder = input('');

  readonly rows = input(4);

  readonly resize = input<'vertical'>('vertical');

  readonly size = input<Size>('md');

  readonly disabled = input(false);

  readonly readonly = input(false);

  readonly required = input(false);

  readonly value = model('');

  readonly prefixes =
      contentChildren(PrefixDirective);

  readonly suffixes =
      contentChildren(SuffixDirective);

  readonly hasPrefix = computed(
      () => this.prefixes().length > 0
  );

  readonly hasSuffix = computed(
      () => this.suffixes().length > 0
  );

  protected onInput(
      event: Event,
  ): void {

      const element =
          event.target as HTMLTextAreaElement;

      this.value.set(element.value);

  }

}
