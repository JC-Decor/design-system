import { ActionIcon, Box, Card, UnstyledButton, type CardProps } from '@mantine/core';
import clsx from 'clsx';
import { priorities, type PrioName } from '../../theme/tokens';
import { CardFootLink, CardHeader } from '../CardHeader';
import { Icon } from '../Icon';
import { PrioBadge } from '../PrioBadge';
import classes from './AlertsCard.module.css';

export interface AlertData {
  /** Prioridade (cor do ícone e do selo) */
  tone: PrioName;
  /** Ícone do Connect */
  icon: string;
  title: string;
  desc: string;
  /** Linha mono discreta ("Vence em 2 dias · RH") */
  meta?: string;
  /** Clique no alerta (abre o detalhe) */
  onClick?: () => void;
}

export interface AlertItemProps {
  a: AlertData;
  className?: string;
}

/** Linha de alerta: ícone tonal da prioridade, título com selo, descrição, meta e seta que aparece no hover. */
export function AlertItem({ a, className }: AlertItemProps) {
  const prio = priorities[a.tone] ?? priorities.info;
  return (
    <UnstyledButton
      component="div"
      role={a.onClick ? 'button' : undefined}
      tabIndex={a.onClick ? 0 : undefined}
      onClick={a.onClick}
      onKeyDown={(e: React.KeyboardEvent) => {
        if (a.onClick && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          a.onClick();
        }
      }}
      className={clsx(classes.alert, className)}
      data-interactive={a.onClick ? true : undefined}
      style={{ '--tone-bg': `var(--cn-tone-${prio.tone}-bg)`, '--tone-fg': `var(--cn-tone-${prio.tone}-fg)` } as React.CSSProperties}
    >
      <div className={classes.icon}>
        <Icon name={a.icon} size={17} />
      </div>
      <div className={classes.body}>
        <div className={classes.row}>
          <div className={classes.title}>{a.title}</div>
          <PrioBadge tone={a.tone} />
        </div>
        <div className={classes.desc}>{a.desc}</div>
        {a.meta && <div className={classes.meta}>{a.meta}</div>}
      </div>
      {a.onClick && (
        <span className={classes.go} aria-hidden>
          <Icon name="chev-r" size={15} />
        </span>
      )}
    </UnstyledButton>
  );
}
AlertItem.displayName = '@jcdecor/connect-ui/AlertItem';

export interface AlertsCardProps extends Omit<CardProps, 'children' | 'title'> {
  items: AlertData[];
  /** @default 'Alertas importantes' */
  title?: React.ReactNode;
  /** @default 'Itens que precisam da sua atenção' */
  sub?: React.ReactNode;
  /** Texto do link de rodapé; `null`/'' esconde @default 'Ver todos os alertas' */
  footLink?: string | null;
  footHref?: string;
  onFootLinkClick?: () => void;
  /** Mostra o botão de filtro no cabeçalho */
  onFilter?: () => void;
}

/** Card de alertas do painel: cabeçalho com filtro, lista de AlertItem e link "Ver todos". */
export function AlertsCard({
  items,
  title = 'Alertas importantes',
  sub = 'Itens que precisam da sua atenção',
  footLink = 'Ver todos os alertas',
  footHref,
  onFootLinkClick,
  onFilter,
  className,
  ...others
}: AlertsCardProps) {
  return (
    <Card className={clsx(classes.card, className)} {...others}>
      <CardHeader
        title={title}
        sub={sub}
        actions={
          onFilter && (
            <ActionIcon aria-label="Filtrar alertas" onClick={onFilter}>
              <Icon name="filter" size={16} />
            </ActionIcon>
          )
        }
      />
      <Box className={classes.list}>
        {items.map((a, i) => (
          <AlertItem key={`${a.title}-${i}`} a={a} />
        ))}
      </Box>
      {footLink && (
        <CardFootLink href={footHref} onClick={onFootLinkClick}>
          {footLink}
        </CardFootLink>
      )}
    </Card>
  );
}
AlertsCard.displayName = '@jcdecor/connect-ui/AlertsCard';
