import { Box, type BoxProps, type ElementProps } from '@mantine/core';
import clsx from 'clsx';
import { Illustration, type IllustrationSource } from '../Illustration';
import classes from './SectionHeader.module.css';

export interface SectionHeaderProps extends BoxProps, ElementProps<'div', 'title'> {
  title: React.ReactNode;
  description?: React.ReactNode;
  /** Selo ao lado do título (contagem, status) */
  badge?: React.ReactNode;
  /** Ações à direita */
  actions?: React.ReactNode;
  /** URL de ilustração decorativa (some no mobile) */
  illustration?: IllustrationSource;
  /** Título 17px e ilustração menor */
  compact?: boolean;
  /** Nível do título @default 2 */
  order?: 2 | 3 | 4;
}

/** Cabeçalho de seção (`.section-header`): título 20/700, selo, descrição, ilustração opcional e ações. */
export function SectionHeader({ title, description, badge, actions, illustration, compact, order = 2, className, ...others }: SectionHeaderProps) {
  const H = `h${order}` as const;
  return (
    <Box className={clsx(classes.root, className)} data-compact={compact || undefined} {...others}>
      <div className={classes.copy}>
        <div className={classes.titleRow}>
          <H className={classes.title}>{title}</H>
          {badge}
        </div>
        {description && <p className={classes.description}>{description}</p>}
      </div>
      {illustration && <Illustration src={illustration} size={compact ? 'sm' : 'md'} tone="soft" className={classes.illustration} />}
      {actions && <div className={classes.actions}>{actions}</div>}
    </Box>
  );
}
SectionHeader.displayName = '@jcdecor/connect-ui/SectionHeader';
