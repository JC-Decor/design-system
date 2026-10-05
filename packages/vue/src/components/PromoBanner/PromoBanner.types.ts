import type { VNodeChild } from 'vue';
import type { BoxProps, Factory, MantineNode, MantineRadius } from '@mantine-vue/core';
import type { JcStylesApiProps } from '../../utils/styles-api';

export type PromoBannerVariant = 'horizon' | 'electric' | 'obsidian';
export type PromoBannerStylesNames = 'root' | 'content' | 'highlight' | 'close';
export type PromoBannerCssVariables = {
  root: '--banner-bg' | '--banner-color' | '--banner-highlight' | '--banner-radius';
};

/** Props declaradas pelo próprio PromoBanner. As demais (style props do Box, atributos) vão para a raiz. */
export interface PromoBannerOwnProps extends JcStylesApiProps<PromoBannerFactory> {
  /** `horizon` = azul com destaque Electric · `electric` = amarelo com destaque Horizon · `obsidian` @default 'horizon' */
  variant?: PromoBannerVariant;
  /**
   * Trecho destacado ao final (ex.: cupom). Também é possível usar `<strong>` dentro do slot padrão.
   * Também aceita o slot `highlight` (o slot tem prioridade).
   */
  highlight?: MantineNode;
  /** Ícone/elemento à esquerda do texto. Também aceita o slot `icon` (o slot tem prioridade). */
  icon?: MantineNode;
  /** Exibe botão de fechar; o banner some e emite `close` (e `update:opened` com `false`) */
  withCloseButton?: boolean;
  /** Controle externo da visibilidade (opcional, use `v-model:opened`) */
  opened?: boolean;
  /** Arredonda os cantos (por padrão o banner é full-bleed, sem raio) */
  radius?: MantineRadius;
}

export interface PromoBannerProps extends Omit<BoxProps, keyof PromoBannerOwnProps>, PromoBannerOwnProps {}

export interface PromoBannerSlots {
  /** Texto do banner */
  default?: () => VNodeChild;
  highlight?: () => VNodeChild;
  icon?: () => VNodeChild;
}

export interface PromoBannerEmits {
  /** Clique no botão de fechar */
  close: [];
  /** `v-model:opened` — emitido com `false` ao fechar */
  'update:opened': [opened: boolean];
}

export type PromoBannerFactory = Factory<{
  props: PromoBannerProps;
  slots: PromoBannerSlots;
  emits: PromoBannerEmits;
  ref: HTMLDivElement;
  element: 'div';
  stylesNames: PromoBannerStylesNames;
  vars: PromoBannerCssVariables;
  variant: PromoBannerVariant;
}>;
