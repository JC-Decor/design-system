import { factory } from '@mantine-vue/core';
import ContentCardComponent from './ContentCard.vue';
import type { ContentCardFactory } from './ContentCard.types';
import classes from './ContentCard.module.css';

/** Card de conteúdo: superfície branca sobre LightGray, borda suave e sombra pequena (ds-card). */
export const ContentCard = factory<ContentCardFactory>(ContentCardComponent, { classes });

export type {
  ContentCardFactory,
  ContentCardOwnProps,
  ContentCardProps,
  ContentCardSlots,
  ContentCardStylesNames,
} from './ContentCard.types';
