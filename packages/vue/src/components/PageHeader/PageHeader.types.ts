import type { Component, VNodeChild } from 'vue';
import type { BoxProps, ClassNames, Factory, MantineNode, Styles, Vars } from '@mantine-vue/core';

export interface PageHeaderBreadcrumb {
  label: MantineNode;
  href?: string;
}

export type PageHeaderStylesNames =
  | 'root'
  | 'breadcrumbs'
  | 'header'
  | 'main'
  | 'icon'
  | 'body'
  | 'kicker'
  | 'title'
  | 'description'
  | 'actions';

export type PageHeaderCssVariables = {
  root: '--page-header-icon-size';
};

// Os campos do Styles API são declarados aqui (e não via `extends StylesApiProps`) porque o
// compilador de SFC não resolve tipos-base vindos de node_modules em `defineProps`.
/** Props declaradas pelo próprio `PageHeader`. Veja `PageHeaderProps` para o tipo público completo. */
export interface PageHeaderOwnProps {
  /** Classes por parte (`root`, `breadcrumbs`, `header`, `main`, `icon`, `body`, `kicker`, `title`, `description`, `actions`) */
  classNames?: ClassNames<PageHeaderFactory>;
  /** Estilos inline por parte */
  styles?: Styles<PageHeaderFactory>;
  /** Variáveis CSS por parte (`--page-header-icon-size`) */
  vars?: Vars<PageHeaderFactory>;
  /** Remove as classes do PageHeader (classNames/styles continuam valendo) @default false */
  unstyled?: boolean;
  /** Também aceita o slot `kicker` (o slot tem prioridade). */
  kicker?: MantineNode;
  /** Também aceita o slot `title` (o slot tem prioridade). */
  title?: MantineNode;
  /** Também aceita o slot `description` (o slot tem prioridade). */
  description?: MantineNode;
  /** Ícone à esquerda do título, num quadro suave na cor primária. Também aceita o slot `icon`. */
  icon?: MantineNode;
  /** Tamanho do quadro do ícone (px ou CSS) @default 48 */
  iconSize?: number | string;
  /** Botões à direita do título. Também aceita o slot `actions` (o slot tem prioridade). */
  actions?: MantineNode;
  breadcrumbs?: PageHeaderBreadcrumb[];
  /** Componente dos links do breadcrumb (ex.: `RouterLink` do vue-router) @default 'a' */
  linkComponent?: string | Component;
  /** `display` usa display-small (página principal); `headline` usa headline-large @default 'headline' */
  size?: 'display' | 'headline';
}

export interface PageHeaderProps extends Omit<BoxProps, keyof PageHeaderOwnProps>, PageHeaderOwnProps {}

export interface PageHeaderSlots {
  kicker?: () => VNodeChild;
  title?: () => VNodeChild;
  description?: () => VNodeChild;
  icon?: () => VNodeChild;
  actions?: () => VNodeChild;
}

export type PageHeaderFactory = Factory<{
  props: PageHeaderProps;
  ref: HTMLDivElement;
  slots: PageHeaderSlots;
  element: 'div';
  stylesNames: PageHeaderStylesNames;
  vars: PageHeaderCssVariables;
}>;
