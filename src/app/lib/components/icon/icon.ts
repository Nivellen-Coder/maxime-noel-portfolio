import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input
} from '@angular/core';

import { ICON_REGISTRY, IconName } from './icon.registry';

@Component({
  selector: 'nds-icon',
  standalone: true,
  templateUrl: './icon.html',
  styleUrl: './icon.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'nds-icon',

    '[attr.data-size]': 'size()'
  }
})
export class Icon {

  readonly name = input.required<IconName>();

  readonly size = input<'xs' | 'sm' | 'md' | 'lg' | 'xl'>('md');

  readonly icon = computed(() => ICON_REGISTRY[this.name()]);

}
