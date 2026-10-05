import { themed, type ThemeComponents } from './types';
import {
  ActionBar,
  Dialog,
  Drawer,
  FloatingWindow,
  HoverCard,
  LoadingOverlay,
  Menu,
  Menubar,
  Modal,
  Overlay,
  Popover,
  Tooltip,
} from '@mantine-vue/core';
import { overlayProps } from '../controls';
import { brand } from '../tokens';
import classes from './overlays.module.css';

const menuClassNames = { dropdown: classes.dropdown, item: classes.menuItem, label: classes.menuLabel, divider: classes.menuDivider };

export const overlaysComponents: ThemeComponents = {
  Menu: themed(Menu, { defaultProps: { shadow: 'md', radius: 'sm' }, classNames: menuClassNames }),
  Menubar: themed(Menubar, { classNames: { root: classes.menubarRoot, target: classes.menubarTarget } }),
  Popover: themed(Popover, { defaultProps: { shadow: 'md', radius: 'sm' }, classNames: { dropdown: classes.dropdown } }),
  HoverCard: themed(HoverCard, { defaultProps: { shadow: 'md', radius: 'md' }, classNames: { dropdown: classes.dropdown } }),
  Tooltip: themed(Tooltip, { defaultProps: { radius: 'sm', withArrow: true }, classNames: { tooltip: classes.tooltip } }),
  Modal: themed(Modal, {
    defaultProps: { radius: 'md', centered: true, shadow: 'lg', overlayProps },
    classNames: { content: classes.modalContent, header: classes.modalHeader, title: classes.modalTitle },
  }),
  Drawer: themed(Drawer, {
    defaultProps: { shadow: 'lg', overlayProps },
    classNames: { content: classes.modalContent, header: classes.modalHeader, title: classes.modalTitle },
  }),
  Dialog: themed(Dialog, { defaultProps: { radius: 'md', shadow: 'lg' }, classNames: { root: classes.floatingSurface } }),
  ActionBar: themed(ActionBar, {
    defaultProps: { radius: 'md', shadow: 'lg' },
    classNames: { root: classes.floatingSurface, divider: classes.actionBarDivider },
  }),
  FloatingWindow: themed(FloatingWindow, { defaultProps: { radius: 'md', shadow: 'lg', withBorder: true }, classNames: { root: classes.floatingSurface } }),
  /** Overlay solto (sobre imagens/cards) usa o navy da marca em vez do preto. */
  Overlay: themed(Overlay, { defaultProps: { color: brand.obsidian } }),
  LoadingOverlay: themed(LoadingOverlay, { defaultProps: { overlayProps: { backgroundOpacity: 0.75, blur: 1 } } }),
};
