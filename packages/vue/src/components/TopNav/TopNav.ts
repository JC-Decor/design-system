import { factory } from '@mantine-vue/core';
import TopNavComponent from './TopNav.vue';
import type { TopNavFactory } from './TopNav.types';
import classes from './TopNav.module.css';

/** Barra de navegação Obsidian dos painéis (ds-nav). */
export const TopNav = factory<TopNavFactory>(TopNavComponent, { classes });

export type { TopNavFactory, TopNavLink, TopNavOwnProps, TopNavProps, TopNavSlots, TopNavStylesNames } from './TopNav.types';
