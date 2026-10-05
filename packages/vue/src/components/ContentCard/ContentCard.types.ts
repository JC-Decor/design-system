import type { VNodeChild } from 'vue';
import type { CardProps, Factory, MantineNode } from '@mantine-vue/core';
import type { JcStylesApiProps } from '../../utils/styles-api';

export type ContentCardStylesNames = 'root' | 'image' | 'kicker' | 'title' | 'body' | 'actions';

/** Props declaradas pelo próprio ContentCard. As demais (props do Card/Box) vão para o Card raiz. */
export interface ContentCardOwnProps extends JcStylesApiProps<ContentCardFactory> {
  /** Sobretítulo em caixa-alta. Também aceita o slot `kicker` (o slot tem prioridade). */
  kicker?: MantineNode;
  /** Também aceita o slot `title` (o slot tem prioridade). */
  title?: MantineNode;
  /** Imagem de capa (URL) ou nó customizado. Também aceita o slot `image` (o slot tem prioridade). */
  image?: string | MantineNode;
  imageAlt?: string;
  /** @default 180 */
  imageHeight?: number;
  /** Botões/links no rodapé do card. Também aceita o slot `actions` (o slot tem prioridade). */
  actions?: MantineNode;
}

export interface ContentCardProps extends Omit<CardProps, keyof ContentCardOwnProps>, ContentCardOwnProps {}

export interface ContentCardSlots {
  /** Corpo do card */
  default?: () => VNodeChild;
  kicker?: () => VNodeChild;
  title?: () => VNodeChild;
  image?: () => VNodeChild;
  actions?: () => VNodeChild;
}

export type ContentCardFactory = Factory<{
  props: ContentCardProps;
  slots: ContentCardSlots;
  ref: HTMLDivElement;
  stylesNames: ContentCardStylesNames;
}>;
