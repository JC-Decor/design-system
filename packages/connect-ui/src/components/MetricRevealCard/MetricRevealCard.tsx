import { useState } from 'react';
import { Box, UnstyledButton, type BoxProps, type ElementProps } from '@mantine/core';
import clsx from 'clsx';
import { Icon } from '../Icon';
import { PrioBadge } from '../PrioBadge';
import classes from './MetricRevealCard.module.css';

export interface MetricRevealCardProps extends BoxProps, Omit<ElementProps<'article'>, 'onClick'> {
  label: React.ReactNode;
  value: React.ReactNode;
  description?: React.ReactNode;
  /** Tendência à direita ("+4 no mês") */
  trend?: React.ReactNode;
  /** Selo informativo à direita */
  status?: React.ReactNode;
  /** Detalhe revelado ao clicar */
  children?: React.ReactNode;
  /** Clique no card (também alterna o detalhe, se houver) */
  onClick?: () => void;
  /** Permite revelar `children` @default true quando há children */
  expandable?: boolean;
}

/** Card de métrica que revela um detalhe ao clicar (`.metric-reveal-card`): rótulo, valor 28px, descrição, selo e tendência. */
export function MetricRevealCard({ label, value, description, trend, status, children, onClick, expandable, className, ...others }: MetricRevealCardProps) {
  const [expanded, setExpanded] = useState(false);
  const canReveal = (expandable ?? Boolean(children)) && Boolean(children);
  return (
    <Box
      component="article"
      className={clsx(classes.card, className)}
      data-expanded={expanded || undefined}
      data-interactive={canReveal || onClick ? true : undefined}
      {...others}
    >
      <UnstyledButton
        className={classes.trigger}
        onClick={() => {
          onClick?.();
          if (canReveal) setExpanded((v) => !v);
        }}
        aria-expanded={canReveal ? expanded : undefined}
        disabled={!canReveal && !onClick}
      >
        <span className={classes.copy}>
          <span className={classes.label}>{label}</span>
          <strong className={classes.value}>{value}</strong>
          {description && <span className={classes.description}>{description}</span>}
        </span>
        <span className={classes.side}>
          {status && <PrioBadge tone="info">{status}</PrioBadge>}
          {trend && <span className={classes.trend}>{trend}</span>}
          {canReveal && <Icon name="chev" size={16} className={classes.chevron} />}
        </span>
      </UnstyledButton>
      {canReveal && expanded && <div className={classes.detail}>{children}</div>}
    </Box>
  );
}
MetricRevealCard.displayName = '@jcdecor/connect-ui/MetricRevealCard';
