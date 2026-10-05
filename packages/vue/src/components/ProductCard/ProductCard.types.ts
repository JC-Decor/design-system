import type { Component, VNodeChild } from 'vue';
import type { CardProps, Factory, MantineNode } from '@mantine-vue/core';
import type { JcStylesApiProps } from '../../utils/styles-api';
import type { PriceTagProps } from '../PriceTag';

export type ProductCardStylesNames = 'root' | 'media' | 'badges' | 'favorite' | 'category' | 'name' | 'price' | 'action';

/** Props declaradas pelo próprio ProductCard. As demais (props do Card/Box) vão para o Card raiz. */
export interface ProductCardOwnProps extends JcStylesApiProps<ProductCardFactory> {
  name: string;
  image: string;
  href?: string;
  category?: string;
  price: number;
  oldPrice?: number;
  installments?: PriceTagProps['installments'];
  pixDiscount?: number;
  unit?: string;
  /** Selos extras (ex.: "Novo", "Frete grátis"). Também aceita o slot `badges` (renderizado depois destes). */
  badges?: MantineNode[];
  /** Mostra selo "-X%" calculado a partir de oldPrice @default true */
  showDiscount?: boolean;
  rating?: number;
  reviews?: number;
  /**
   * Estado do favorito (use `v-model:favorite`). O botão de favoritar aparece quando esta prop é
   * passada ou quando há listener de `update:favorite`.
   */
  favorite?: boolean;
  /** Texto do CTA, exibido quando há listener de `action` (`@action`) @default 'Comprar' */
  actionLabel?: string;
  /** Proporção da imagem (largura/altura) @default 1 */
  imageRatio?: number;
  /** Componente do link (ex.: `RouterLink` do vue-router) @default 'a' */
  linkComponent?: string | Component;
}

export interface ProductCardProps extends Omit<CardProps, keyof ProductCardOwnProps>, ProductCardOwnProps {}

export interface ProductCardSlots {
  /** Selos extras, depois do selo de desconto e da prop `badges` */
  badges?: () => VNodeChild;
}

export interface ProductCardEmits {
  /** `v-model:favorite` — clique no coração, com o novo estado */
  'update:favorite': [favorite: boolean];
  /** Clique no CTA. O botão só é renderizado quando há listener (`@action`), como `onAction` no React. */
  action: [event: MouseEvent];
}

export type ProductCardFactory = Factory<{
  props: ProductCardProps;
  slots: ProductCardSlots;
  emits: ProductCardEmits;
  ref: HTMLDivElement;
  stylesNames: ProductCardStylesNames;
}>;
