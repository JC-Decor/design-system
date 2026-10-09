import { factory } from '@mantine-vue/core';
import PromoBannerComponent from './PromoBanner.vue';
import type { PromoBannerFactory } from './PromoBanner.types';
import { varsResolver } from './PromoBanner.vars';
import classes from './PromoBanner.module.css';

/** Banner promocional (topo do site / campanhas). Suporta `v-model:opened`. */
export const PromoBanner = factory<PromoBannerFactory>(PromoBannerComponent, { classes, varsResolver });

export type {
  PromoBannerCssVariables,
  PromoBannerEmits,
  PromoBannerFactory,
  PromoBannerOwnProps,
  PromoBannerProps,
  PromoBannerSlots,
  PromoBannerStylesNames,
  PromoBannerVariant,
} from './PromoBanner.types';
