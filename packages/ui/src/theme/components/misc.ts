import { Divider, Paper, ScrollArea, type MantineThemeComponents } from '@mantine/core';
import classes from './misc.module.css';

export const miscComponents: MantineThemeComponents = {
  Paper: Paper.extend({ defaultProps: { radius: 'md' }, classNames: { root: classes.paper } }),
  Divider: Divider.extend({ classNames: { root: classes.divider } }),
  // Trilho sem fundo no hover (o dark-8 do Mantine destoava das superfícies) e polegar nos tons de borda/texto da marca
  ScrollArea: ScrollArea.extend({ classNames: { scrollbar: classes.scrollbar, thumb: classes.scrollThumb } }),
};
