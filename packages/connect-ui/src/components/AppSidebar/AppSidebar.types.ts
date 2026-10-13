import type { ReactNode } from 'react';
import type { ToneName } from '../../theme/tokens';

/** Subitem de navegação (filho de um grupo). */
export interface NavChild {
  key: string;
  label: string;
  /** Contador/selo à direita (ex.: pendências) */
  badge?: ReactNode;
}

/** Item da navegação lateral: link simples ou grupo expansível (com `children`). */
export interface NavItem {
  key: string;
  /** Nome de ícone do Connect @default 'home' */
  icon?: string;
  label: string;
  children?: NavChild[];
  /** Contador/selo à direita (ex.: 3 aprovações pendentes) */
  badge?: ReactNode;
}

export interface NavConfig {
  primary: NavItem[];
  secondary: NavItem[];
}

/** Usuário logado exibido no cabeçalho (avatar com iniciais `seed` no tom `tone`). */
export interface UserConfig {
  name: string;
  role: string;
  seed: string;
  tone: ToneName;
  picture?: string;
}

/** Perspectiva (Visão RH / Gestor / Colaborador): rótulo, usuário e navegação. */
export interface Perspective {
  key: string;
  label: string;
  user: UserConfig;
  nav: NavConfig;
}

export interface PerspectiveOption {
  key: string;
  label: string;
  userSeed: string;
  userTone: ToneName;
}

export interface NavigateOptions {
  replace?: boolean;
  state?: Record<string, unknown>;
}
