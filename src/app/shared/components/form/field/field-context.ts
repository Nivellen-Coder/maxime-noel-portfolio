import {
  computed,
  InjectionToken,
  Signal,
  WritableSignal,
} from '@angular/core';

export interface FieldContext {

  /* --------------------------------------------------------------------------
   * Identity
   * -------------------------------------------------------------------------- */

    readonly controlId: Signal<string>;

    readonly labelId: Signal<string>;

    readonly helperId: Signal<string | null>;

    readonly errorId: Signal<string | null>;

    readonly disabled: WritableSignal<boolean>;

    readonly required: WritableSignal<boolean>;

    readonly invalid: WritableSignal<boolean>;

  /* --------------------------------------------------------------------------
   * Accessibility
   * -------------------------------------------------------------------------- */

  readonly describedBy: Signal<string | null>;

}

export const FIELD_CONTEXT =
  new InjectionToken<FieldContext>('FIELD_CONTEXT');
