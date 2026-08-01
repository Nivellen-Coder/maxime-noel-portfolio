import { IconDefinition } from './icon.model';

import { checkIcon } from './icons/check.icon';
import { closeIcon } from './icons/close.icon';
import { searchIcon } from './icons/search.icon';

export const ICON_REGISTRY = {

  check: checkIcon,

  close: closeIcon,

  search: searchIcon

} satisfies Record<string, IconDefinition>;

export type IconName = keyof typeof ICON_REGISTRY;
