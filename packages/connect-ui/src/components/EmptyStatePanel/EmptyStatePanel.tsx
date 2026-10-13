import { Box, Button, type BoxProps, type ElementProps } from '@mantine/core';
import clsx from 'clsx';
import { Icon } from '../Icon';
import { Illustration, type IllustrationName, type IllustrationSource } from '../Illustration';
import classes from './EmptyStatePanel.module.css';

export type EmptyStateLayout = 'default' | 'compact' | 'card' | 'full';
export type EmptyStateModule =
  | 'news' | 'people' | 'hierarchy' | 'documents' | 'approvals' | 'goals' | 'feedback' | 'training' | 'requests' | 'generic';
export type EmptyStatePanelVariant = 'empty' | 'no-results' | 'error' | 'permission' | 'building';

/** Ilustração padrão por módulo (mesmo mapa do connect-jc). */
const MODULE_ILLUSTRATION: Record<EmptyStateModule, IllustrationName> = {
  news: 'news',
  people: 'meetTeam',
  hierarchy: 'collaboration',
  documents: 'document',
  approvals: 'confirmed',
  goals: 'businessPlan',
  feedback: 'chat',
  training: 'teamSpirit',
  requests: 'questions',
  generic: 'questions',
};

/** Ícone por módulo, usado com `illustration={false}`. */
const MODULE_ICON: Record<EmptyStateModule, string> = {
  news: 'megaphone',
  people: 'users',
  hierarchy: 'tree',
  documents: 'doc',
  approvals: 'check',
  goals: 'target',
  feedback: 'chat',
  training: 'book',
  requests: 'help',
  generic: 'sparkle',
};

export interface EmptyStateIllustrationProps extends BoxProps, ElementProps<'div', 'title'> {
  /** Nome do catálogo ou URL. Padrão: a ilustração do `module`; `false` mostra o ícone do módulo num bloco tonal. */
  illustration?: IllustrationSource | false;
  /** Texto alternativo da ilustração @default '' (decorativa) */
  illustrationAlt?: string;
  /** Ícone do Connect usado quando não há ilustração (vence o ícone do módulo) */
  icon?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  actionLabel?: string;
  onAction?: () => void;
  secondaryActionLabel?: string;
  onSecondaryAction?: () => void;
  /** default (sem moldura) · card (com borda/sombra) · compact (arte pequena) · full (centralizado, alto) @default 'default' */
  variant?: EmptyStateLayout;
  /** Módulo do app — escolhe o ícone padrão @default 'generic' */
  module?: EmptyStateModule;
  /** Conteúdo extra abaixo da descrição */
  children?: React.ReactNode;
}

/** Estado vazio ilustrado: arte à esquerda (ou acima, no `full`), texto e até duas ações. */
export function EmptyStateIllustration({
  illustration,
  illustrationAlt = '',
  icon,
  title,
  description,
  actionLabel,
  onAction,
  secondaryActionLabel,
  onSecondaryAction,
  variant = 'default',
  module = 'generic',
  children,
  className,
  ...others
}: EmptyStateIllustrationProps) {
  const art = illustration === false ? undefined : illustration ?? MODULE_ILLUSTRATION[module];
  const hasActions = (actionLabel && onAction) || (secondaryActionLabel && onSecondaryAction);
  return (
    <Box className={clsx(classes.illustrated, className)} data-variant={variant} data-module={module} {...others}>
      {art ? (
        <Illustration
          src={art}
          alt={illustrationAlt}
          size={variant === 'compact' ? 'sm' : variant === 'full' ? 'xl' : 'lg'}
          tone={variant === 'compact' ? 'muted' : 'soft'}
          className={classes.art}
        />
      ) : (
        <div className={classes.artIcon} aria-hidden>
          <Icon name={icon ?? MODULE_ICON[module]} size={variant === 'compact' ? 26 : 40} stroke={1.4} />
        </div>
      )}
      <div className={classes.copy}>
        <h3 className={classes.copyTitle}>{title}</h3>
        {description && <p className={classes.copyDesc}>{description}</p>}
        {children}
        {hasActions && (
          <div className={classes.actions}>
            {actionLabel && onAction && <Button onClick={onAction}>{actionLabel}</Button>}
            {secondaryActionLabel && onSecondaryAction && (
              <Button variant="outline" onClick={onSecondaryAction}>
                {secondaryActionLabel}
              </Button>
            )}
          </div>
        )}
      </div>
    </Box>
  );
}
EmptyStateIllustration.displayName = '@jcdecor/connect-ui/EmptyStateIllustration';

const VARIANT_COPY: Record<EmptyStatePanelVariant, { icon: string; illustration: IllustrationName; title: string; desc: string }> = {
  empty: { icon: 'folder', illustration: 'questions', title: 'Nenhum item encontrado', desc: 'Adicione itens para começar.' },
  'no-results': { icon: 'search', illustration: 'questions', title: 'Nenhum resultado', desc: 'Ajuste os filtros para encontrar o que procura.' },
  error: { icon: 'zap', illustration: 'page-not-found', title: 'Algo deu errado', desc: 'Tente novamente em instantes.' },
  permission: { icon: 'lock', illustration: 'sign-in', title: 'Sem permissão', desc: 'Você não tem acesso a este recurso.' },
  building: { icon: 'gear', illustration: 'build-mode', title: 'Em construção', desc: 'Esta funcionalidade estará disponível em breve.' },
};

export interface EmptyStatePanelProps extends BoxProps, ElementProps<'div', 'title'> {
  /** Variante semântica — define ícone e textos padrão */
  variant?: EmptyStatePanelVariant;
  /** Ícone do Connect no bloco tonal @default ícone da variante ou 'sparkle' */
  icon?: string;
  /**
   * Ilustração (nome do catálogo ou URL): ativa o layout ilustrado. Com `variant`, o padrão é a arte da variante;
   * `false` força o layout simples (ícone em bloco lavanda).
   */
  illustration?: IllustrationSource | false;
  illustrationAlt?: string;
  title?: React.ReactNode;
  /** Descrição (alias legado: `desc`) */
  description?: React.ReactNode;
  desc?: React.ReactNode;
  /** Nó livre abaixo do texto (botões, links) */
  action?: React.ReactNode;
  actionLabel?: string;
  onAction?: () => void;
  secondaryActionLabel?: string;
  onSecondaryAction?: () => void;
  /** Módulo do app: também ativa o layout ilustrado (com ícone do módulo se não houver ilustração) */
  module?: EmptyStateModule;
  /** Layout ilustrado compacto (em vez de card) */
  compact?: boolean;
}

/**
 * Estado vazio do Connect (antigo `EmptyState`). Simples: ícone em bloco lavanda + título + descrição.
 * Com `illustration` ou `module`, usa o layout ilustrado em card.
 */
export function EmptyStatePanel({
  variant,
  icon,
  illustration,
  illustrationAlt,
  title,
  description,
  desc,
  action,
  actionLabel,
  onAction,
  secondaryActionLabel,
  onSecondaryAction,
  module,
  compact,
  className,
  ...others
}: EmptyStatePanelProps) {
  const copy = variant ? VARIANT_COPY[variant] : undefined;
  const resolvedTitle = title ?? copy?.title ?? 'Nenhum item encontrado';
  const resolvedDesc = description ?? desc ?? copy?.desc;

  const resolvedIllustration = illustration === false ? undefined : illustration ?? copy?.illustration;

  if (resolvedIllustration || (module && illustration !== false)) {
    return (
      <EmptyStateIllustration
        illustration={resolvedIllustration}
        illustrationAlt={illustrationAlt}
        icon={icon ?? (module ? undefined : copy?.icon)}
        title={resolvedTitle}
        description={resolvedDesc}
        actionLabel={actionLabel}
        onAction={onAction}
        secondaryActionLabel={secondaryActionLabel}
        onSecondaryAction={onSecondaryAction}
        module={module}
        variant={compact ? 'compact' : 'card'}
        data-state={variant}
        className={className}
        {...others}
      >
        {action}
      </EmptyStateIllustration>
    );
  }

  return (
    <Box className={clsx(classes.simple, className)} data-state={variant} {...others}>
      <div className={classes.simpleIcon} aria-hidden>
        <Icon name={icon ?? copy?.icon ?? 'sparkle'} size={26} />
      </div>
      <div className={classes.simpleTitle}>{resolvedTitle}</div>
      {resolvedDesc && <div className={classes.simpleDesc}>{resolvedDesc}</div>}
      {action}
      {((actionLabel && onAction) || (secondaryActionLabel && onSecondaryAction)) && (
        <div className={classes.actions}>
          {actionLabel && onAction && <Button onClick={onAction}>{actionLabel}</Button>}
          {secondaryActionLabel && onSecondaryAction && (
            <Button variant="outline" onClick={onSecondaryAction}>
              {secondaryActionLabel}
            </Button>
          )}
        </div>
      )}
    </Box>
  );
}
EmptyStatePanel.displayName = '@jcdecor/connect-ui/EmptyStatePanel';
