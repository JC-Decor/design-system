import { useId } from 'react';
import { Box, type BoxProps, type ElementProps } from '@mantine/core';
import { useUncontrolled } from '@mantine/hooks';
import clsx from 'clsx';
import { Icon } from '../Icon';
import classes from './ExpandableCard.module.css';

export interface ExpandableCardProps extends BoxProps, Omit<ElementProps<'article', 'title'>, 'children'> {
  title: React.ReactNode;
  /** Texto ao lado do título (data, autor) */
  subtitle?: React.ReactNode;
  /** Ícone do Connect num bloco navy suave */
  icon?: string;
  /** Resumo visível mesmo fechado */
  summary?: React.ReactNode;
  /** Conteúdo revelado ao expandir */
  children: React.ReactNode;
  defaultExpanded?: boolean;
  /** Modo controlado */
  expanded?: boolean;
  onExpandedChange?: (expanded: boolean) => void;
  /** Ações à direita (cliques não alternam o card) */
  actions?: React.ReactNode;
  disabled?: boolean;
}

/** Card que expande para mostrar detalhes (`.expandable-card`): cabeçalho clicável/teclado, chevron girando e conteúdo deslizando. */
export function ExpandableCard({
  title,
  subtitle,
  icon,
  summary,
  children,
  defaultExpanded = false,
  expanded,
  onExpandedChange,
  actions,
  disabled,
  className,
  ...others
}: ExpandableCardProps) {
  const contentId = useId();
  const [isExpanded, setExpanded] = useUncontrolled({ value: expanded, defaultValue: defaultExpanded, finalValue: false, onChange: onExpandedChange });
  const toggle = () => {
    if (!disabled) setExpanded(!isExpanded);
  };

  return (
    <Box
      component="article"
      className={clsx(classes.card, className)}
      data-expanded={isExpanded || undefined}
      data-disabled={disabled || undefined}
      {...others}
    >
      <div
        className={classes.trigger}
        role="button"
        tabIndex={disabled ? -1 : 0}
        aria-expanded={isExpanded}
        aria-controls={contentId}
        aria-disabled={disabled || undefined}
        onClick={toggle}
        onKeyDown={(event) => {
          if (event.target !== event.currentTarget || (event.key !== 'Enter' && event.key !== ' ')) return;
          event.preventDefault();
          toggle();
        }}
      >
        {icon && (
          <span className={classes.icon}>
            <Icon name={icon} size={18} />
          </span>
        )}
        <div className={classes.main}>
          <div className={classes.titleRow}>
            <h3 className={classes.title}>{title}</h3>
            {subtitle && <span className={classes.subtitle}>{subtitle}</span>}
          </div>
          {summary && <div className={classes.summary}>{summary}</div>}
        </div>
        {actions && (
          <div className={classes.actions} onClick={(event) => event.stopPropagation()} onKeyDown={(event) => event.stopPropagation()}>
            {actions}
          </div>
        )}
        <Icon name="chev" size={18} className={classes.chevron} />
      </div>
      <div id={contentId} className={classes.content} hidden={!isExpanded}>
        <div className={classes.contentInner}>{children}</div>
      </div>
    </Box>
  );
}
ExpandableCard.displayName = '@jcdecor/connect-ui/ExpandableCard';
