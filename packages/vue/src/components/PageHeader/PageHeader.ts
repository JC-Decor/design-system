import { factory } from '@mantine-vue/core';
import PageHeaderComponent from './PageHeader.vue';
import type { PageHeaderFactory } from './PageHeader.types';
import { varsResolver } from './PageHeader.vars';
import classes from './PageHeader.module.css';

/** Cabeçalho de página: breadcrumbs, ícone, kicker, título, descrição e ações. */
export const PageHeader = factory<PageHeaderFactory>(PageHeaderComponent, { classes, varsResolver });

export type {
  PageHeaderBreadcrumb,
  PageHeaderCssVariables,
  PageHeaderFactory,
  PageHeaderOwnProps,
  PageHeaderProps,
  PageHeaderSlots,
  PageHeaderStylesNames,
} from './PageHeader.types';
