import type { CSSProperties, ReactNode } from 'react';
import { Button } from '@mantine/core';
import clsx from 'clsx';
import classes from './SelectionBanner.module.css';

export interface SelectionBannerProps {
  /** Itens marcados na página atual */
  selectedCount: number;
  /** Total que corresponde aos filtros (todas as páginas) */
  matchingTotal: number;
  /** Todos os `matchingTotal` estão selecionados */
  allMatching: boolean;
  /** Oferece "Selecionar todos os N…" (estilo Gmail) */
  showSelectAllMatching: boolean;
  /** Singular (ex.: "colaborador") */
  entityLabel: string;
  /** Plural (ex.: "colaboradores") */
  entityLabelPlural: string;
  onSelectAllMatching: () => void;
  onClear: () => void;
  /** Botões das ações em massa */
  actions?: ReactNode;
  /** Envolve a barra no recuo horizontal do card (`.card-pad-x`) @default true */
  withPadding?: boolean;
  className?: string;
  style?: CSSProperties;
}

/**
 * Barra de seleção em massa para tabelas paginadas (`.bulk-actions-bar`): contagem, oferta de
 * "selecionar todos que correspondem aos filtros", ações e "Limpar seleção". Some sem seleção.
 */
export function SelectionBanner({
  selectedCount,
  matchingTotal,
  allMatching,
  showSelectAllMatching,
  entityLabel,
  entityLabelPlural,
  onSelectAllMatching,
  onClear,
  actions,
  withPadding = true,
  className,
  style,
}: SelectionBannerProps) {
  if (selectedCount <= 0 && !allMatching) return null;
  const noun = selectedCount === 1 ? entityLabel : entityLabelPlural;

  const bar = (
    <div
      className={clsx(classes.bar, !withPadding && className)}
      style={withPadding ? undefined : style}
      role="region"
      aria-label="Ações em massa"
    >
      <div className={classes.copy}>
        <span className={classes.count} aria-live="polite">
          {allMatching
            ? `Todos os ${matchingTotal} ${entityLabelPlural} filtrados selecionados`
            : `${selectedCount} ${noun} selecionado(s)`}
        </span>
        {showSelectAllMatching && (
          <button type="button" className={classes.link} onClick={onSelectAllMatching}>
            Selecionar todos os {matchingTotal} {entityLabelPlural} que correspondem aos filtros
          </button>
        )}
      </div>
      <div className={classes.buttons}>
        {actions}
        <Button variant="ghost" onClick={onClear}>
          Limpar seleção
        </Button>
      </div>
    </div>
  );

  return withPadding ? (
    <div className={clsx(classes.padded, className)} style={style}>
      {bar}
    </div>
  ) : (
    bar
  );
}
SelectionBanner.displayName = '@jcdecor/connect-ui/SelectionBanner';
