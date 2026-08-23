import { Size } from '../../../../shared/types/size.types';

export interface TextareaConfig {

  readonly rows: number;

  readonly resize: TextareaResize;

  readonly size: Size;

}

export type TextareaResize =

    | 'none'

    | 'vertical'

    | 'horizontal'

    | 'both';
