import type { CSSProperties } from 'react';
import { ActionIcon } from '@mantine/core';
import clsx from 'clsx';
import { formatNumber } from '../../utils/format';
import { Icon } from '../Icon';
import classes from './DataTable.module.css';

/** Páginas visíveis: até 7 sem reticências; senão 1, vizinhas da atual, última e "…" nos saltos. */
export function buildPageItems(current: number, totalPages: number): Array<number | 'ellipsis'> {
  if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i + 1);
  const pages = new Set<number>([1, totalPages, current]);
  if (current - 1 >= 1) pages.add(current - 1);
  if (current + 1 <= totalPages) pages.add(current + 1);
  if (current <= 3) [2, 3, 4].forEach((p) => pages.add(p));
  if (current >= totalPages - 2) [totalPages - 1, totalPages - 2, totalPages - 3].forEach((p) => pages.add(p));
  const items: Array<number | 'ellipsis'> = [];
  let prev = 0;
  for (const page of [...pages].sort((a, b) => a - b)) {
    if (prev && page - prev > 1) items.push('ellipsis');
    items.push(page);
    prev = page;
  }
  return items;
}

export interface TablePaginationProps {
  /** Total de registros @default 0 */
  total?: number;
  /** Página atual (1-based) @default 1 */
  page?: number;
  /** @default 10 */
  pageSize?: number;
  /** Sem handler os controles ficam desabilitados */
  onPageChange?: (page: number) => void;
  className?: string;
  style?: CSSProperties;
}

/** Paginação de tabela (`.tbl-pag`): "Mostrando 1-10 de 48" + botões de página (`.pag-btn`). */
export function TablePagination({ total = 0, page = 1, pageSize = 10, onPageChange, className, style }: TablePaginationProps) {
  const totalPages = Math.max(1, Math.ceil(total / pageSize) || 1);
  const current = Math.min(Math.max(page, 1), totalPages);
  const from = total === 0 ? 0 : (current - 1) * pageSize + 1;
  const to = Math.min(current * pageSize, total);
  const items = buildPageItems(current, totalPages);
  const canGoPrev = current > 1 && Boolean(onPageChange);
  const canGoNext = current < totalPages && Boolean(onPageChange);

  return (
    <nav className={clsx(classes.pagination, className)} style={style} aria-label="Paginação">
      <div className={classes.paginationInfo} aria-live="polite">
        Mostrando{' '}
        <b>
          {formatNumber(from)}-{formatNumber(to)}
        </b>{' '}
        de <b>{formatNumber(total)}</b>
      </div>
      <div className={classes.paginationControls}>
        <ActionIcon size={30} aria-label="Página anterior" disabled={!canGoPrev} onClick={() => onPageChange?.(current - 1)}>
          <Icon name="chev-l" size={14} />
        </ActionIcon>
        {items.map((item, index) =>
          item === 'ellipsis' ? (
            <span key={`e-${index}`} className={classes.pageButton} data-ellipsis aria-hidden="true">
              …
            </span>
          ) : (
            <button
              key={item}
              type="button"
              className={classes.pageButton}
              data-active={item === current || undefined}
              aria-current={item === current ? 'page' : undefined}
              aria-label={`Página ${item}`}
              disabled={!onPageChange || item === current}
              onClick={() => onPageChange?.(item)}
            >
              {item}
            </button>
          ),
        )}
        <ActionIcon size={30} aria-label="Próxima página" disabled={!canGoNext} onClick={() => onPageChange?.(current + 1)}>
          <Icon name="chev-r" size={14} />
        </ActionIcon>
      </div>
    </nav>
  );
}
TablePagination.displayName = '@jcdecor/connect-ui/TablePagination';
