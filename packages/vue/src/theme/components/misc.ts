import { themed, type ThemeComponents } from './types';
import { Divider, Paper, ScrollArea } from '@mantine-vue/core';
import classes from './misc.module.css';

export const miscComponents: ThemeComponents = {
  Paper: themed(Paper, { defaultProps: { radius: 'md' }, classNames: { root: classes.paper } }),
  Divider: themed(Divider, { classNames: { root: classes.divider } }),
  // Trilho sem fundo no hover (o dark-8 do Mantine destoava das superfícies) e polegar nos tons de borda/texto da marca
  ScrollArea: themed(ScrollArea, { classNames: { scrollbar: classes.scrollbar, thumb: classes.scrollThumb } }),
};
