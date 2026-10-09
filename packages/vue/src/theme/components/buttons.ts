import { themed, type ThemeComponents } from './types';
import { ActionIcon, Button, CloseButton, type MantineSize } from '@mantine-vue/core';
import { control, isSize } from '../controls';
import classes from './buttons.module.css';

export const buttonsComponents: ThemeComponents = {
  Button: themed(Button, {
    classNames: { root: classes.button },
    vars: (_theme, props) => {
      if (!isSize(props.size ?? 'md')) return { root: {} };
      const c = control[(props.size ?? 'md') as MantineSize];
      return { root: { '--button-height': c.height, '--button-padding-x': c.px, '--button-fz': c.fz } };
    },
  }),
  ActionIcon: themed(ActionIcon, { defaultProps: { variant: 'subtle' }, classNames: { root: classes.actionIcon } }),
  CloseButton: themed(CloseButton, { classNames: { root: classes.closeButton } }),
};
