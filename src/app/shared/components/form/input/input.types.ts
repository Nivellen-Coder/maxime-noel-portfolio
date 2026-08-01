/**
 * -----------------------------------------------------------------------------
 * Nova Design System
 * Input Types
 * -----------------------------------------------------------------------------
 */

import { Size } from '../../../../shared/types/size.types';

export type InputType =
  | 'text'
  | 'email'
  | 'password'
  | 'search'
  | 'tel'
  | 'url'
  | 'number';

export type InputVariant =
  | 'outlined'
  | 'filled';

export interface InputConfig {

  readonly type: InputType;

  readonly variant: InputVariant;

  readonly size: Size;

}
