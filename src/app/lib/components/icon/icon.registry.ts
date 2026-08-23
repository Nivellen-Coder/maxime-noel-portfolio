import { IconDefinition } from './icon.model';

import { checkIcon } from '../icons/check.icon';
import { closeIcon } from '../icons/close.icon';
import { searchIcon } from './icons/search.icon';

export const ICON_REGISTRY = {

  check: checkIcon,

  close: closeIcon,

  search: searchIcon

} satisfies Record<string, IconDefinition>;

export const NOVA_ICONS = [
  'search',
  'close',
  'check',
  'eye',
  'eye-off',
] as const;

export type IconName = typeof NOVA_ICONS[number];
