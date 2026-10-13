import { Badge, type BadgeProps, type ElementProps } from '@mantine/core';
import clsx from 'clsx';
import { priorities, statuses, tones, type PrioName, type StatusName } from '../../theme/tokens';
import classes from './PrioBadge.module.css';

export interface PrioBadgeProps extends Omit<BadgeProps, 'color' | 'variant'>, ElementProps<'div', 'color'> {
  /** Prioridade: high (coral) · med (amarelo) · low (verde) · info (azul) @default 'info' */
  tone?: PrioName;
  /** Bolinha na cor do texto antes do rótulo */
  dot?: boolean;
  /** Texto; sem children mostra o rótulo padrão (Alta, Média, Baixa, Info) */
  children?: React.ReactNode;
}

/** Selo de prioridade do Connect (antigo `<Badge tone>`). Badge `light` do Mantine com a cor do tom. */
export function PrioBadge({ tone = 'info', dot, children, className, ...others }: PrioBadgeProps) {
  const p = priorities[tone] ?? priorities.info;
  return (
    <Badge
      variant="light"
      color={tones[p.tone].color}
      className={clsx(classes.root, className)}
      leftSection={dot ? <span className={classes.dot} style={{ background: 'currentColor' }} /> : undefined}
      data-prio={tone}
      {...others}
    >
      {children ?? p.label}
    </Badge>
  );
}
PrioBadge.displayName = '@jcdecor/connect-ui/PrioBadge';

export interface StatusBadgeProps extends Omit<BadgeProps, 'color' | 'variant'>, ElementProps<'div', 'color'> {
  /** Status do registro @default 'ativo' */
  status?: StatusName;
  /** Substitui o rótulo padrão (Ativo, Pendente, Atrasado, Concluído, Rascunho, Pausado) */
  children?: React.ReactNode;
}

/** Selo de status com bolinha colorida (ativo, pendente, atrasado, concluído, rascunho, pausado). */
export function StatusBadge({ status = 'ativo', children, className, ...others }: StatusBadgeProps) {
  const s = statuses[status] ?? statuses.ativo;
  return (
    <Badge
      variant="light"
      color={tones[s.tone].color}
      className={clsx(classes.root, className)}
      leftSection={<span className={classes.dot} style={{ background: s.dot }} />}
      data-status={status}
      {...others}
    >
      {children ?? s.label}
    </Badge>
  );
}
StatusBadge.displayName = '@jcdecor/connect-ui/StatusBadge';
