import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  input
} from '@angular/core';

import {
  SurfacePadding,
  SurfaceRadius,
  SurfaceVariant
} from './surface.types';

@Component({
  selector: 'nds-surface',
  standalone: true,
  templateUrl: './surface.html',
  styleUrl: './surface.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SurfaceComponent {

  readonly variant = input<SurfaceVariant>('glass');

  readonly padding = input<SurfacePadding>('lg');

  readonly radius = input<SurfaceRadius>('xl');

  readonly border = input(true);

  readonly glow = input(false);

  readonly interactive = input(false);

  @HostBinding('attr.data-variant')
  protected get hostVariant(): SurfaceVariant {
    return this.variant();
  }

  @HostBinding('attr.data-padding')
  protected get hostPadding(): SurfacePadding {
    return this.padding();
  }

  @HostBinding('attr.data-radius')
  protected get hostRadius(): SurfaceRadius {
    return this.radius();
  }

  @HostBinding('class.nds-surface')
  protected readonly hostClass = true;

  @HostBinding('class.nds-surface--border')
  protected get hasBorder(): boolean {
    return this.border();
  }

  @HostBinding('class.nds-surface--glow')
  protected get hasGlow(): boolean {
    return this.glow();
  }

  @HostBinding('class.nds-surface--interactive')
  protected get isInteractive(): boolean {
    return this.interactive();
  }

}
