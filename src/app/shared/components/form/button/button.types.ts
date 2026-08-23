import { Size } from '../../../../shared/types/size.types';

export type ButtonVariant =
  | 'filled'
  | 'outlined'
  | 'ghost'
  | 'text';

export type ButtonColor =
  | 'primary'
  | 'neutral'
  | 'success'
  | 'warning'
  | 'danger';

export type ButtonType =
  | 'button'
  | 'submit'
  | 'reset';

export interface ButtonConfig {

  readonly variant: ButtonVariant;

  readonly color: ButtonColor;

  readonly size: Size;

  readonly type: ButtonType;

}
