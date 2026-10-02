import { Anchor, Burger, NavLink, Pagination, Stepper, TableOfContents, Tabs, Tree, type MantineThemeComponents } from '@mantine/core';
import classes from './navigation.module.css';

export const navigationComponents: MantineThemeComponents = {
  Tabs: Tabs.extend({ classNames: { root: classes.tabs, tab: classes.tab } }),
  Anchor: Anchor.extend({ classNames: { root: classes.anchor } }),
  Burger: Burger.extend({ classNames: { root: classes.burger } }),
  // variant explícito: o resolver de cores aplica as cores de tag (--ds-tag-primary-*) ao item ativo
  NavLink: NavLink.extend({ defaultProps: { variant: 'light' }, classNames: { root: classes.navLink } }),
  Pagination: Pagination.extend({ defaultProps: { radius: 'sm' }, classNames: { control: classes.paginationControl } }),
  Stepper: Stepper.extend({
    classNames: {
      root: classes.stepper,
      stepIcon: classes.stepIcon,
      stepCompletedIcon: classes.stepCompletedIcon,
      stepLabel: classes.stepLabel,
      stepDescription: classes.stepDescription,
    },
  }),
  TableOfContents: TableOfContents.extend({ classNames: { control: classes.tocControl } }),
  Tree: Tree.extend({ classNames: { root: classes.tree, label: classes.treeLabel } }),
};
