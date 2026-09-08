import { InjectionToken, Signal } from '@angular/core';

export interface FieldContext {

  /* --------------------------------------------------------------------------
   * Identity
   * -------------------------------------------------------------------------- */

    readonly controlId: Signal<string>;

    readonly labelId: Signal<string>;

    readonly helperId: Signal<string | null>;

    readonly errorId: Signal<string | null>;

    readonly disabled: Signal<boolean>;

    readonly required: Signal<boolean>;

    readonly invalid: Signal<boolean>;

  /* --------------------------------------------------------------------------
   * Accessibility
   * -------------------------------------------------------------------------- */

  readonly describedBy: Signal<string | null>;

  readonly setHelperId: (id: string | null) => void;
  readonly setErrorId: (id: string | null) => void;

}

export const FIELD_CONTEXT =
  new InjectionToken<FieldContext>('FIELD_CONTEXT');
