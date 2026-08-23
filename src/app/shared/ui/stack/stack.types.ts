import { Spacing } from '../../types/spacing.types';
import { Alignment } from '../../types/alignment.types';
import { Justify } from '../../types/justify.types';


export type StackAlign =
  | 'start'
  | 'center'
  | 'end'
  | 'stretch';

export type StackJustify =
  | 'start'
  | 'center'
  | 'end'
  | 'between'
  | 'around'
  | 'evenly';

export interface StackConfig {

  readonly gap: Spacing;

  readonly padding: Spacing;

  readonly align: Alignment;

  readonly justify: Justify;

}
