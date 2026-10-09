import { themed, type ThemeComponents } from './types';
import { Container, Splitter } from '@mantine-vue/core';
import classes from './layout.module.css';

export const layoutComponents: ThemeComponents = {
  // As seções (AppShellMain, AppShellNavbar…) usam o getStyles do AppShell, mas o tipo do
  // `AppShell.extend` no Mantine Vue só declara `root` — entrada simples em vez de `.extend`.
  AppShell: {
    classNames: {
      main: classes.appShellMain,
      navbar: classes.appShellNavbar,
      aside: classes.appShellAside,
      header: classes.appShellHeader,
      footer: classes.appShellFooter,
    },
  },
  // size="xl" = largura máxima do grid da marca (1224px) em vez dos 1320px do Mantine
  Container: themed(Container, { classNames: { root: classes.container } }),
  // Divisória na cor de divisores da marca; alça com superfície/borda dos tokens (adapta ao escuro)
  Splitter: themed(Splitter, {
    classNames: { root: classes.splitter, handle: classes.splitterHandle, thumb: classes.splitterThumb },
  }),
};
