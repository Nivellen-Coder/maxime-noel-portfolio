export const NOVA_ICONS = [
  'search',
  'check',
  'download',
] as const;

export type IconName =
  typeof NOVA_ICONS[number];

export type IconSize =
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl';
