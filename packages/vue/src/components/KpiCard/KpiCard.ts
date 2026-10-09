import { factory } from '@mantine-vue/core';
import KpiCardComponent from './KpiCard.vue';
import type { KpiCardFactory } from './KpiCard.types';
import { varsResolver } from './KpiCard.vars';
import classes from './KpiCard.module.css';

/** Tile de KPI dos dashboards (ds-kpi). */
export const KpiCard = factory<KpiCardFactory>(KpiCardComponent, { classes, varsResolver });

export { getDeltaTone } from './KpiCard.vars';
export { KpiGroup, type KpiGroupProps } from './KpiGroup';
export type {
  KpiCardCssVariables,
  KpiCardFactory,
  KpiCardOwnProps,
  KpiCardProps,
  KpiCardSlots,
  KpiCardStylesNames,
} from './KpiCard.types';
