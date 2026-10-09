import { ActionIcon, Button, CloseButton, type MantineSize, type MantineThemeComponents } from '@mantine/core';
import { control, isSize } from '../controls';
import classes from './buttons.module.css';

export const buttonsComponents: MantineThemeComponents = {
  Button: Button.extend({
    classNames: { root: classes.button },
    vars: (_theme, props) => {
      if (!isSize(props.size ?? 'md')) return { root: {} };
      const c = control[(props.size ?? 'md') as MantineSize];
      return { root: { '--button-height': c.height, '--button-padding-x': c.px, '--button-fz': c.fz } };
    },
  }),
  ActionIcon: ActionIcon.extend({ defaultProps: { variant: 'subtle' }, classNames: { root: classes.actionIcon } }),
  CloseButton: CloseButton.extend({ classNames: { root: classes.closeButton } }),
};
