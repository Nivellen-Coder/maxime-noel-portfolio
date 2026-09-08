import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  contentChildren,
  inject,
  input,
  model,
} from '@angular/core';

import { Size } from '../../core/types/size.types';
import { FIELD_CONTEXT } from '../field/field-context';
import { FieldControlDirective } from '../field/field-control.directive';

import {
  PrefixDirective
} from '../../core/directives/prefix.directive';

import {
  SuffixDirective
} from '../../core/directives/suffix.directive';

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
  imports: [FieldControlDirective],
})
export class Textarea {

  private readonly field = inject(FIELD_CONTEXT, { optional: true });

  readonly placeholder = input('');

  readonly rows = input(4);

  readonly resize = input<'vertical'>('vertical');

  readonly size = input<Size>('md');

  readonly disabled = input(false, { transform: booleanAttribute });

  readonly readonly = input(false, { transform: booleanAttribute });

  readonly required = input(false, { transform: booleanAttribute });

  readonly isDisabled = computed(() =>
    this.disabled() || (this.field?.disabled() ?? false),
  );

  readonly isRequired = computed(() =>
    this.required() || (this.field?.required() ?? false),
  );

  readonly controlId = computed(() => this.field?.controlId() ?? null);

  readonly labelId = computed(() => this.field?.labelId() ?? null);

  readonly describedBy = computed(() => this.field?.describedBy() ?? null);

  readonly invalid = computed(() => this.field?.invalid() ?? false);

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
