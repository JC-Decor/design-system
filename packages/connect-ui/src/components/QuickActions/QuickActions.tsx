import { Box, UnstyledButton, type BoxProps, type ElementProps } from '@mantine/core';
import clsx from 'clsx';
import { Icon } from '../Icon';
import classes from './QuickActions.module.css';

export interface QuickActionItem {
  /** Ícone do Connect */
  icon: string;
  title: string;
  desc: string;
  onClick?: () => void;
  disabled?: boolean;
}

export interface QuickActionsProps extends BoxProps, ElementProps<'section'> {
  items: QuickActionItem[];
  /** row = 4 colunas (vira 2/1 em telas menores) · grid = 1 coluna (lateral) @default 'row' */
  layout?: 'row' | 'grid';
  /** Rótulo da região @default 'Ações rápidas' */
  'aria-label'?: string;
}

/** Atalhos do painel (`.qa`): cards-botão com ícone lavanda, título, descrição e chevron; brilho lavanda no hover. */
export function QuickActions({ items, layout = 'row', className, 'aria-label': ariaLabel = 'Ações rápidas', ...others }: QuickActionsProps) {
  return (
    <Box component="section" aria-label={ariaLabel} className={clsx(classes.root, className)} data-layout={layout} {...others}>
      {items.map((a, i) => (
        <UnstyledButton key={`${a.title}-${i}`} className={classes.item} onClick={a.onClick} disabled={a.disabled}>
          <div className={classes.icon}>
            <Icon name={a.icon} size={19} />
          </div>
          <div className={classes.body}>
            <div className={classes.title}>{a.title}</div>
            <div className={classes.desc}>{a.desc}</div>
          </div>
          <Icon name="chev-r" size={16} className={classes.chevron} />
        </UnstyledButton>
      ))}
    </Box>
  );
}
QuickActions.displayName = '@jcdecor/connect-ui/QuickActions';
