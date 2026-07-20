export type AuroraIntensity = 'low' | 'medium' | 'high';

export type AuroraPreset =
  | 'default'
  | 'violet'
  | 'cyber'
  | 'nebula'
  | 'sunset';

export interface AuroraOrb {

  id: string;

  size: string;

  color: string;

  top: string;

  left: string;

  duration: number;

  delay: number;

}
