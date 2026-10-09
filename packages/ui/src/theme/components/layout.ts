import { AppShell, Container, Splitter, type MantineThemeComponents } from '@mantine/core';
import classes from './layout.module.css';

export const layoutComponents: MantineThemeComponents = {
  AppShell: AppShell.extend({
    classNames: {
      main: classes.appShellMain,
      navbar: classes.appShellNavbar,
      aside: classes.appShellAside,
      header: classes.appShellHeader,
      footer: classes.appShellFooter,
    },
  }),
  // size="xl" = largura máxima do grid da marca (1224px) em vez dos 1320px do Mantine
  Container: Container.extend({ classNames: { root: classes.container } }),
  // Divisória na cor de divisores da marca; alça com superfície/borda dos tokens (adapta ao escuro)
  Splitter: Splitter.extend({
    classNames: { root: classes.splitter, handle: classes.splitterHandle, thumb: classes.splitterThumb },
  }),
};
