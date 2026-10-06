import type { Component, VNodeChild } from 'vue';
import type { BoxProps, ClassNames, Factory, MantineNode, Styles, Vars } from '@mantine-vue/core';

export type TopNavStylesNames = 'root' | 'brand' | 'links' | 'link' | 'linkSection' | 'linkLabel' | 'right' | 'burger' | 'mobileLinks';

export interface TopNavLink {
  /** Texto (ou conteúdo) do link */
  label: MantineNode;
  /** Destino; sem `href` o item vira `<button type="button">` */
  href?: string;
  /** Marca o link da página atual (`data-active` + `aria-current="page"`) */
  active?: boolean;
  /** Ícone/conteúdo antes do texto (como `leftSection` do Mantine) */
  leftSection?: MantineNode;
  /** Conteúdo depois do texto (ex.: contador, chevron) */
  rightSection?: MantineNode;
  /** Desabilita o link (sem navegação nem `onClick`) */
  disabled?: boolean;
  /** Nome acessível, necessário quando o link mostra só um ícone */
  'aria-label'?: string;
  /** Chamado no clique (antes de fechar o menu mobile) */
  onClick?: (event: MouseEvent) => void;
}

// Os campos do Styles API são declarados aqui (e não via `extends StylesApiProps`) porque o
// compilador de SFC não resolve tipos-base vindos de node_modules em `defineProps`.
/** Props declaradas pelo próprio `TopNav`. Veja `TopNavProps` para o tipo público completo. */
export interface TopNavOwnProps {
  /** Classes por parte (`root`, `brand`, `links`, `link`, `linkSection`, `linkLabel`, `right`, `burger`, `mobileLinks`) */
  classNames?: ClassNames<TopNavFactory>;
  /** Estilos inline por parte */
  styles?: Styles<TopNavFactory>;
  /** Variáveis CSS por parte */
  vars?: Vars<TopNavFactory>;
  /** Remove as classes do TopNav (classNames/styles continuam valendo) @default false */
  unstyled?: boolean;
  /** Marca à esquerda (o slot `brand` tem prioridade) @default <JcLogo variant="dark" :size="28" /> (a barra é navy em ambos os temas) */
  brand?: MantineNode;
  /** Link da marca; `null` renderiza a marca como texto @default '/' */
  brandHref?: string | null;
  links?: TopNavLink[];
  /** Componente usado nos links (ex.: `RouterLink` do vue-router, recebe `to`/`href`) @default 'a' */
  linkComponent?: string | Component;
  /** Conteúdo à direita, ex.: ThemeToggle, avatar (o slot `rightSection` tem prioridade) */
  rightSection?: MantineNode;
  /** Esconde os links em telas pequenas e mostra um hambúrguer @default true */
  collapseOnMobile?: boolean;
}

export interface TopNavProps extends Omit<BoxProps, keyof TopNavOwnProps>, TopNavOwnProps {}

export interface TopNavSlots {
  /** Marca à esquerda (sobrepõe a prop `brand`) */
  brand?: () => VNodeChild;
  /** Conteúdo à direita (sobrepõe a prop `rightSection`) */
  rightSection?: () => VNodeChild;
}

export type TopNavFactory = Factory<{
  props: TopNavProps;
  ref: HTMLDivElement;
  slots: TopNavSlots;
  element: 'div';
  stylesNames: TopNavStylesNames;
}>;
