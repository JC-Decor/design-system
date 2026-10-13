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
  type MantineThemeComponents,
} from '@mantine/core';
import { overlayProps } from '../controls';
import classes from './overlays.module.css';

const menuClassNames = { dropdown: classes.dropdown, item: classes.menuItem, label: classes.menuLabel, divider: classes.menuDivider };

export const overlaysComponents: MantineThemeComponents = {
  Menu: Menu.extend({ defaultProps: { shadow: 'lg', radius: 'sm' }, classNames: menuClassNames }),
  Menubar: Menubar.extend({ classNames: { root: classes.menubarRoot, target: classes.menubarTarget } }),
  Popover: Popover.extend({ defaultProps: { shadow: 'md', radius: 'sm' }, classNames: { dropdown: classes.dropdown } }),
  HoverCard: HoverCard.extend({ defaultProps: { shadow: 'md', radius: 'md' }, classNames: { dropdown: classes.dropdown } }),
  Tooltip: Tooltip.extend({ defaultProps: { radius: 8, withArrow: false, openDelay: 300 }, classNames: { tooltip: classes.tooltip } }),
  Modal: Modal.extend({
    defaultProps: { radius: 'lg', centered: true, shadow: 'xl', padding: 'xl', overlayProps },
    classNames: { content: classes.modalContent, header: classes.modalHeader, title: classes.modalTitle },
  }),
  Drawer: Drawer.extend({
    defaultProps: { shadow: 'xl', padding: 'xl', overlayProps },
    classNames: { content: classes.modalContent, header: classes.modalHeader, title: classes.modalTitle },
  }),
  Dialog: Dialog.extend({ defaultProps: { radius: 'md', shadow: 'lg' }, classNames: { root: classes.floatingSurface } }),
  ActionBar: ActionBar.extend({
    defaultProps: { radius: 'md', shadow: 'lg' },
    classNames: { root: classes.floatingSurface, divider: classes.actionBarDivider },
  }),
  FloatingWindow: FloatingWindow.extend({ defaultProps: { radius: 'md', shadow: 'lg', withBorder: true }, classNames: { root: classes.floatingSurface } }),
  /** Overlay solto (sobre imagens/cards) usa o ink do Connect em vez do preto. */
  Overlay: Overlay.extend({ defaultProps: { color: '#0E1022' } }),
  LoadingOverlay: LoadingOverlay.extend({ defaultProps: { overlayProps: { backgroundOpacity: 0.75, blur: 1, color: 'var(--ds-surface)' } } }),
};
