import { IconDefinition } from './icon.model';

import { IconName } from './icon.types';

import { checkIcon } from '../definitions/check.icon';
import { downloadIcon } from '../definitions/download.icon';
import { searchIcon } from '../definitions/search.icon';

export const ICON_REGISTRY = {
  check: checkIcon,
  download: downloadIcon,
  search: searchIcon,
} satisfies Record<IconName, IconDefinition>;
