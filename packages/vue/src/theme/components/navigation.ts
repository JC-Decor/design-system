import { themed, type ThemeComponents } from './types';
import { Anchor, Burger, NavLink, Pagination, Stepper, TableOfContents, Tabs, Tree } from '@mantine-vue/core';
import classes from './navigation.module.css';

export const navigationComponents: ThemeComponents = {
  Tabs: themed(Tabs, { classNames: { root: classes.tabs, tab: classes.tab } }),
  Anchor: themed(Anchor, { classNames: { root: classes.anchor } }),
  Burger: themed(Burger, { classNames: { root: classes.burger } }),
  // variant explícito: o resolver de cores aplica as cores de tag (--ds-tag-primary-*) ao item ativo
  NavLink: themed(NavLink, { defaultProps: { variant: 'light' }, classNames: { root: classes.navLink } }),
  Pagination: themed(Pagination, { defaultProps: { radius: 'sm' }, classNames: { control: classes.paginationControl } }),
  Stepper: themed(Stepper, {
    classNames: {
      root: classes.stepper,
      stepIcon: classes.stepIcon,
      stepCompletedIcon: classes.stepCompletedIcon,
      stepLabel: classes.stepLabel,
      stepDescription: classes.stepDescription,
    },
  }),
  TableOfContents: themed(TableOfContents, { classNames: { control: classes.tocControl } }),
  Tree: themed(Tree, { classNames: { root: classes.tree, label: classes.treeLabel } }),
};
