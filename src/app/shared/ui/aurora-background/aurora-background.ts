import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input
} from '@angular/core';

import { AuroraIntensity, AuroraOrb, AuroraPreset } from './aurora-background.types';

@Component({
  selector: 'nds-aurora-background',
  standalone: true,
  templateUrl: './aurora-background.html',
  styleUrl: './aurora-background.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuroraBackgroundComponent {

  readonly animated = input(true);

  readonly noise = input(true);

  readonly grid = input(true);

  readonly blur = input(180);

  readonly intensity = input<AuroraIntensity>('medium');

  readonly preset = input<AuroraPreset>('default');

  readonly orbs = computed<AuroraOrb[]>(() => {

    switch (this.preset()) {

      case 'violet':
        return this.createVioletPreset();

      case 'cyber':
        return this.createCyberPreset();

      case 'nebula':
        return this.createNebulaPreset();

      case 'sunset':
        return this.createSunsetPreset();

      default:
        return this.createDefaultPreset();

    }

  });

  readonly cssClasses = computed(() => ({

    animated: this.animated(),

    noise: this.noise(),

    grid: this.grid(),

    [`intensity-${this.intensity()}`]: true

  }));

  private createDefaultPreset(): AuroraOrb[] {

    return [

      {
        id: crypto.randomUUID(),
        color: 'var(--nds-color-primary)',
        size: '42rem',
        top: '-15%',
        left: '-10%',
        duration: 18,
        delay: 0
      },

      {
        id: crypto.randomUUID(),
        color: 'var(--nds-color-secondary)',
        size: '36rem',
        top: '40%',
        left: '60%',
        duration: 22,
        delay: -8
      },

      {
        id: crypto.randomUUID(),
        color: 'var(--nds-color-accent)',
        size: '28rem',
        top: '10%',
        left: '75%',
        duration: 20,
        delay: -4
      }

    ];

  }

  private createVioletPreset(): AuroraOrb[] {

    return [
      {
        id: crypto.randomUUID(),
        color: '#7C4DFF',
        size: '42rem',
        top: '-10%',
        left: '5%',
        duration: 18,
        delay: 0
      },
      {
        id: crypto.randomUUID(),
        color: '#B388FF',
        size: '34rem',
        top: '55%',
        left: '65%',
        duration: 20,
        delay: -5
      }
    ];

  }

  private createCyberPreset(): AuroraOrb[] {

    return [
      {
        id: crypto.randomUUID(),
        color: '#00E5FF',
        size: '44rem',
        top: '0%',
        left: '0%',
        duration: 16,
        delay: 0
      },
      {
        id: crypto.randomUUID(),
        color: '#2979FF',
        size: '30rem',
        top: '45%',
        left: '65%',
        duration: 22,
        delay: -8
      }
    ];

  }

  private createNebulaPreset(): AuroraOrb[] {

    return [
      {
        id: crypto.randomUUID(),
        color: '#6A5CFF',
        size: '48rem',
        top: '-20%',
        left: '10%',
        duration: 24,
        delay: 0
      },
      {
        id: crypto.randomUUID(),
        color: '#35D7FF',
        size: '32rem',
        top: '45%',
        left: '72%',
        duration: 18,
        delay: -3
      }
    ];

  }

  private createSunsetPreset(): AuroraOrb[] {

    return [
      {
        id: crypto.randomUUID(),
        color: '#FF6B6B',
        size: '46rem',
        top: '-10%',
        left: '-5%',
        duration: 22,
        delay: 0
      },
      {
        id: crypto.randomUUID(),
        color: '#FFA94D',
        size: '34rem',
        top: '48%',
        left: '62%',
        duration: 19,
        delay: -4
      }
    ];

  }

  readonly hasBlur = computed(() => this.blur());

}
