import { createVarsResolver, rem } from '@mantine-vue/core';
import type { PageHeaderProps } from './PageHeader.types';

export const varsResolver = createVarsResolver<PageHeaderProps>((_theme, { iconSize }) => ({
  root: {
    '--page-header-icon-size': iconSize === undefined ? undefined : typeof iconSize === 'number' ? rem(iconSize) : iconSize,
  },
}));
