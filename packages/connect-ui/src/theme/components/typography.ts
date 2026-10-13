import {
  Blockquote,
  Code,
  List,
  Mark,
  Table,
  Title,
  Typography,
  getThemeColor,
  type MantineThemeComponents,
} from '@mantine/core';
import classes from './typography.module.css';

/** Cores de destaque amarelas (fundo do tom yellow com texto ink). */
const YELLOWS = [undefined, 'yellow', 'orange'];

export const typographyComponents: MantineThemeComponents = {
  Blockquote: Blockquote.extend({
    defaultProps: { iconSize: 40, radius: 'sm' },
    classNames: { root: classes.blockquote, icon: classes.blockquoteIcon, cite: classes.blockquoteCite },
    vars: (_theme, props) =>
      !props.color || props.color === 'navy' || props.color === 'indigo'
        ? { root: { '--bq-bd': 'var(--ds-primary)', '--bq-bg-light': 'var(--ds-primary-soft)', '--bq-bg-dark': 'var(--ds-primary-soft)' } }
        : { root: {} },
  }),
  Code: Code.extend({ classNames: { root: classes.code } }),
  List: List.extend({ defaultProps: { spacing: 'xs' }, classNames: { root: classes.list, item: classes.listItem, itemIcon: classes.listItemIcon } }),
  /** Mark e Highlight: amarelo só como fundo (yellow 100 = --yellow-soft), texto sempre --ds-text */
  Mark: Mark.extend({
    classNames: { root: classes.mark },
    vars: (theme, props) => {
      const yellow = YELLOWS.includes(props.color);
      const color = yellow ? 'yellow' : props.color!;
      return {
        root: {
          '--mark-bg-light': getThemeColor(`${color}.1`, theme),
          '--mark-bg-dark': `color-mix(in srgb, ${getThemeColor(`${color}.${yellow ? 3 : 4}`, theme)} 32%, transparent)`,
        },
      };
    },
  }),
  Table: Table.extend({
    defaultProps: { highlightOnHover: true, verticalSpacing: 'sm', horizontalSpacing: 'sm' },
    classNames: { table: classes.table, th: classes.th, thead: classes.thead, tr: classes.tr },
  }),
  Title: Title.extend({ classNames: { root: classes.title } }),
  Typography: Typography.extend({ classNames: { root: classes.typography } }),
};
