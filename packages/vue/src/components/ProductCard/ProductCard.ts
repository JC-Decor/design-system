import { factory } from '@mantine-vue/core';
import ProductCardComponent from './ProductCard.vue';
import type { ProductCardFactory } from './ProductCard.types';
import classes from './ProductCard.module.css';

/**
 * Card de produto do e-commerce: imagem, selos, nome, avaliação, preço e CTA.
 * `v-model:favorite` mostra o botão de favoritar; `@action` mostra o CTA.
 */
export const ProductCard = factory<ProductCardFactory>(ProductCardComponent, { classes });

export type {
  ProductCardEmits,
  ProductCardFactory,
  ProductCardOwnProps,
  ProductCardProps,
  ProductCardSlots,
  ProductCardStylesNames,
} from './ProductCard.types';
