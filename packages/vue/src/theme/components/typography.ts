import { themed, type ThemeComponents } from './types';
import {
  Blockquote,
  Code,
  List,
  Mark,
  Table,
  Title,
  Typography,
  getThemeColor,
} from '@mantine-vue/core';
import classes from './typography.module.css';

/** Cores de destaque amarelas (fill Electric com texto da marca). */
const YELLOWS = [undefined, 'yellow', 'electric'];

export const typographyComponents: ThemeComponents = {
  Blockquote: themed(Blockquote, {
    defaultProps: { iconSize: 40, radius: 'sm' },
    classNames: { root: classes.blockquote, icon: classes.blockquoteIcon, cite: classes.blockquoteCite },
    vars: (_theme, props) =>
      !props.color || props.color === 'horizon' || props.color === 'blue'
        ? { root: { '--bq-bd': 'var(--ds-primary)', '--bq-bg-light': 'var(--ds-primary-soft)', '--bq-bg-dark': 'var(--ds-primary-soft)' } }
        : { root: {} },
  }),
  Code: themed(Code, { classNames: { root: classes.code } }),
  List: themed(List, { defaultProps: { spacing: 'xs' }, classNames: { root: classes.list, item: classes.listItem, itemIcon: classes.listItemIcon } }),
  /** Mark e Highlight: amarelo só como fundo (Electric 200), texto sempre --ds-text */
  Mark: themed(Mark, {
    classNames: { root: classes.mark },
    vars: (theme, props) => {
      const yellow = YELLOWS.includes(props.color);
      const color = yellow ? 'electric' : props.color!;
      return {
        root: {
          '--mark-bg-light': getThemeColor(`${color}.${yellow ? 2 : 1}`, theme),
          '--mark-bg-dark': `color-mix(in srgb, ${getThemeColor(`${color}.${yellow ? 3 : 4}`, theme)} 32%, transparent)`,
        },
      };
    },
  }),
  Table: themed(Table, {
    defaultProps: { highlightOnHover: true, verticalSpacing: 'sm', horizontalSpacing: 'sm' },
    classNames: { table: classes.table, th: classes.th, thead: classes.thead, tr: classes.tr },
  }),
  Title: themed(Title, { classNames: { root: classes.title } }),
  Typography: themed(Typography, { classNames: { root: classes.typography } }),
};
