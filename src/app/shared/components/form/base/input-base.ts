import {
  Directive,
  computed,
  contentChildren,
  input,
  model,
} from '@angular/core';

import { Size } from '../../../types/size.types';

import { PrefixDirective } from '../../../directives/prefix.directive';
import { SuffixDirective } from '../../../directives/suffix.directive';

@Directive()
export abstract class InputBase {

  /* --------------------------------------------------------------------------
   * Inputs
   * -------------------------------------------------------------------------- */

  readonly placeholder = input('');

  readonly size = input<Size>('md');

  readonly disabled = input(false);

  readonly readonly = input(false);

  readonly required = input(false);

  /* --------------------------------------------------------------------------
   * Model
   * -------------------------------------------------------------------------- */

  readonly value = model('');

  /* --------------------------------------------------------------------------
   * Content
   * -------------------------------------------------------------------------- */

  readonly prefixes = contentChildren(PrefixDirective);

  readonly suffixes = contentChildren(SuffixDirective);

  /* --------------------------------------------------------------------------
   * Derived state
   * -------------------------------------------------------------------------- */

  readonly hasPrefix = computed(
    () => this.prefixes().length > 0,
  );

  readonly hasSuffix = computed(
    () => this.suffixes().length > 0,
  );

}
