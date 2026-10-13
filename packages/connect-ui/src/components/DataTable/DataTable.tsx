import { Fragment, useMemo, useState, type CSSProperties, type ReactNode } from 'react';
import { ActionIcon, Skeleton } from '@mantine/core';
import clsx from 'clsx';
import { DropdownMenu, type DropdownMenuEntry } from '../DropdownMenu';
import { Icon } from '../Icon';
import classes from './DataTable.module.css';

export interface TableColumn<T = Record<string, unknown>> {
  /** Cabeçalho (também vira o rótulo da célula no layout de cartões do mobile) */
  label: string;
  /** Campo da linha exibido quando não há `render`; também é o id da coluna */
  key?: Extract<keyof T, string> | (string & {});
  /** Largura (px ou CSS) */
  w?: string | number;
  align?: 'left' | 'center' | 'right';
  render?: (row: T, index: number) => ReactNode;
  /** Habilita ordenação nesta coluna (requer `sortable` na tabela) */
  sortable?: boolean;
}

/** Ordenação no formato do TanStack Table: `[{ id: 'nome', desc: false }]`. */
export type SortingState = { id: string; desc: boolean }[];

export type RowId = string | number;

export type DataTableEmptyModule = 'news' | 'people' | 'hierarchy' | 'documents' | 'approvals' | 'generic';

export interface DataTableProps<T = Record<string, unknown>> {
  columns: TableColumn<T>[];
  rows: T[];
  onRowClick?: (row: T) => void;
  /** Linhas mais baixas (10px) */
  dense?: boolean;
  /** Coluna de checkboxes */
  selectable?: boolean;
  rowExpandable?: boolean | ((row: T, index: number) => boolean);
  renderExpandedRow?: (row: T, index: number) => ReactNode;
  /** Id estável da linha (seleção/expansão) @default índice */
  getRowId?: (row: T, index: number) => RowId;
  /** Seleção controlada (ids) — pode conter ids de outras páginas */
  selectedRows?: RowId[];
  onSelectedRowsChange?: (selectedRows: RowId[]) => void;
  /** Mostra o esqueleto da tabela */
  loading?: boolean;
  /** Conteúdo acima da tabela (filtros, PageToolbar) */
  toolbar?: ReactNode;
  /** Substitui o estado vazio padrão */
  emptyState?: ReactNode;
  /** @default 'Nenhum registro encontrado' */
  emptyTitle?: string;
  /** @default 'Ajuste os filtros ou tente novamente em instantes.' */
  emptyDescription?: string;
  /** Ícone do estado vazio padrão @default 'generic' */
  emptyModule?: DataTableEmptyModule;
  rowAriaLabel?: (row: T, index: number) => string;
  getRowClassName?: (row: T, index: number) => string | undefined;
  'aria-label'?: string;
  /** Habilita ordenação nas colunas com `sortable` */
  sortable?: boolean;
  /** Ordenação controlada (ex.: server-side) */
  sorting?: SortingState;
  onSortingChange?: (sorting: SortingState) => void;
  /** Não reordena no cliente (os dados já chegam ordenados) */
  manualSorting?: boolean;
  /** Visibilidade controlada `{ [colunaId]: boolean }` (`false` esconde) */
  columnVisibility?: Record<string, boolean>;
  onColumnVisibilityChange?: (visibility: Record<string, boolean>) => void;
  /** Mostra a coluna de ações (⋯ / expandir) @default true */
  showRowActions?: boolean;
  /** Menu de ações por linha (⋯) */
  rowActions?: (row: T, index: number) => DropdownMenuEntry[];
  className?: string;
  style?: CSSProperties;
}

const EMPTY_ICON: Record<DataTableEmptyModule, string> = {
  news: 'megaphone',
  people: 'users',
  hierarchy: 'tree',
  documents: 'doc',
  approvals: 'check',
  generic: 'search',
};

const collator = new Intl.Collator('pt-BR', { numeric: true, sensitivity: 'base' });

function compareValues(a: unknown, b: unknown) {
  if (a == null && b == null) return 0;
  if (a == null) return 1;
  if (b == null) return -1;
  if (typeof a === 'number' && typeof b === 'number') return a - b;
  if (a instanceof Date && b instanceof Date) return a.getTime() - b.getTime();
  return collator.compare(String(a), String(b));
}

const columnId = <T,>(col: TableColumn<T>, i: number) => col.key ?? `col_${i}`;

/** Esqueleto da tabela (estado de carregamento). */
function TableSkeleton({ rows, columns }: { rows: number; columns: number }) {
  return (
    <div className={classes.skeleton} aria-busy="true" aria-label="Carregando registros">
      <Skeleton height={36} radius={0} />
      {Array.from({ length: rows }, (_, r) => (
        <div key={r} className={classes.skeletonRow}>
          {Array.from({ length: Math.min(columns, 5) }, (_, c) => (
            <Skeleton key={c} height={12} radius="xl" width={c === 0 ? '70%' : '50%'} />
          ))}
        </div>
      ))}
    </div>
  );
}

/**
 * Tabela de dados do Connect (`.tbl`): cabeçalho em caixa alta, ordenação por coluna, seleção com
 * checkboxes, linhas expansíveis, menu de ações por linha, esqueleto de carregamento e estado vazio.
 * Abaixo de 768px vira uma lista de cartões (rótulo da coluna + valor).
 */
export function DataTable<T = Record<string, unknown>>({
  columns,
  rows,
  onRowClick,
  dense,
  selectable,
  rowExpandable,
  renderExpandedRow,
  getRowId,
  selectedRows,
  onSelectedRowsChange,
  loading,
  toolbar,
  emptyState,
  emptyTitle = 'Nenhum registro encontrado',
  emptyDescription = 'Ajuste os filtros ou tente novamente em instantes.',
  emptyModule = 'generic',
  rowAriaLabel,
  getRowClassName,
  'aria-label': ariaLabel,
  sortable = false,
  sorting: controlledSorting,
  onSortingChange,
  manualSorting = false,
  columnVisibility: controlledVisibility,
  showRowActions = true,
  rowActions,
  className,
  style,
}: DataTableProps<T>) {
  const [internalSorting, setInternalSorting] = useState<SortingState>([]);
  const [internalSelection, setInternalSelection] = useState<RowId[]>([]);
  const [expanded, setExpanded] = useState<Set<string>>(() => new Set());

  const sorting = controlledSorting ?? internalSorting;
  const selection = selectedRows ?? internalSelection;
  const selectedSet = useMemo(() => new Set(selection.map(String)), [selection]);
  const visibility = controlledVisibility ?? {};
  const showActionsColumn = showRowActions && (Boolean(rowActions) || Boolean(renderExpandedRow));

  const visibleColumns = columns
    .map((col, i) => ({ col, id: columnId(col, i) }))
    .filter(({ id }) => visibility[id] !== false);

  const idOf = (row: T, index: number): RowId => (getRowId ? getRowId(row, index) : index);

  // Linhas com o índice original (render/getRowId recebem o índice dos dados, não o da ordenação)
  const indexed = useMemo(() => rows.map((row, index) => ({ row, index })), [rows]);
  const ordered = useMemo(() => {
    const sort = sorting[0];
    if (!sortable || manualSorting || !sort) return indexed;
    const col = columns.find((c, i) => columnId(c, i) === sort.id);
    if (!col?.key) return indexed;
    const key = col.key as string;
    const sorted = [...indexed].sort((a, b) =>
      compareValues((a.row as Record<string, unknown>)[key], (b.row as Record<string, unknown>)[key]),
    );
    return sort.desc ? sorted.reverse() : sorted;
  }, [indexed, sorting, sortable, manualSorting, columns]);

  if (loading) {
    return (
      <div className={clsx(classes.wrap, className)} style={style}>
        {toolbar && <div className={classes.toolbar}>{toolbar}</div>}
        <TableSkeleton rows={Math.max(rows.length || 4, 4)} columns={visibleColumns.length} />
      </div>
    );
  }

  if (!rows.length) {
    return (
      <div className={clsx(classes.wrap, className)} style={style}>
        {toolbar && <div className={classes.toolbar}>{toolbar}</div>}
        {emptyState ?? (
          <div className={classes.empty} role="status">
            <span className={classes.emptyIcon} aria-hidden="true">
              <Icon name={EMPTY_ICON[emptyModule]} size={26} />
            </span>
            <p className={classes.emptyTitle}>{emptyTitle}</p>
            {emptyDescription && <p className={classes.emptyDescription}>{emptyDescription}</p>}
          </div>
        )}
      </div>
    );
  }

  const setSorting = (next: SortingState) => {
    if (controlledSorting === undefined) setInternalSorting(next);
    onSortingChange?.(next);
  };
  const toggleSort = (id: string) => {
    const current = sorting.find((s) => s.id === id);
    // asc → desc → sem ordenação
    setSorting(!current ? [{ id, desc: false }] : !current.desc ? [{ id, desc: true }] : []);
  };

  const setSelection = (nextIds: Set<string>) => {
    // Mantém o tipo original dos ids (número/texto), inclusive os de outras páginas
    const known = new Map<string, RowId>();
    selection.forEach((id) => known.set(String(id), id));
    rows.forEach((row, i) => {
      const id = idOf(row, i);
      known.set(String(id), id);
    });
    const next = [...nextIds].map((k) => known.get(k) ?? k);
    if (!selectedRows) setInternalSelection(next);
    onSelectedRowsChange?.(next);
  };

  const pageIds = rows.map((row, i) => String(idOf(row, i)));
  const allSelected = pageIds.length > 0 && pageIds.every((id) => selectedSet.has(id));
  const someSelected = !allSelected && pageIds.some((id) => selectedSet.has(id));

  const toggleAll = () => {
    const next = new Set(selectedSet);
    if (allSelected) pageIds.forEach((id) => next.delete(id));
    else pageIds.forEach((id) => next.add(id));
    setSelection(next);
  };
  const toggleRow = (id: string) => {
    const next = new Set(selectedSet);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setSelection(next);
  };
  const toggleExpanded = (id: string) =>
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  const colSpan = visibleColumns.length + (selectable ? 1 : 0) + (showActionsColumn ? 1 : 0);

  return (
    <div className={clsx(classes.wrap, className)} data-dense={dense || undefined} style={style}>
      {toolbar && <div className={classes.toolbar}>{toolbar}</div>}
      <table className={classes.table} aria-label={ariaLabel}>
        <thead>
          <tr>
            {selectable && (
              <th className={classes.check}>
                <input
                  type="checkbox"
                  checked={allSelected}
                  ref={(input) => {
                    if (input) input.indeterminate = someSelected;
                  }}
                  aria-label="Selecionar todos os registros desta página"
                  onChange={toggleAll}
                />
              </th>
            )}
            {visibleColumns.map(({ col, id }) => {
              const canSort = sortable && Boolean(col.sortable);
              const sorted = sorting.find((s) => s.id === id);
              const dir = sorted ? (sorted.desc ? 'desc' : 'asc') : undefined;
              return (
                <th
                  key={id}
                  style={{ width: col.w, textAlign: col.align ?? 'left' }}
                  aria-sort={dir === 'asc' ? 'ascending' : dir === 'desc' ? 'descending' : undefined}
                >
                  {canSort ? (
                    <button type="button" className={classes.sortButton} data-sorted={dir} onClick={() => toggleSort(id)}>
                      {col.label}
                      <span className={classes.sortIcon} aria-hidden="true">
                        {dir === 'asc' ? '↑' : dir === 'desc' ? '↓' : '↕'}
                      </span>
                    </button>
                  ) : (
                    col.label
                  )}
                </th>
              );
            })}
            {showActionsColumn && (
              <th className={classes.actions}>
                <span className={classes.srOnly}>Ações</span>
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {ordered.map(({ row, index }) => {
            const rowId = String(idOf(row, index));
            const isSelected = selectedSet.has(rowId);
            const canExpand =
              Boolean(renderExpandedRow) &&
              (typeof rowExpandable === 'function' ? rowExpandable(row, index) : Boolean(rowExpandable));
            const isExpanded = canExpand && expanded.has(rowId);
            const interactive = Boolean(onRowClick) || canExpand;
            const actions = rowActions?.(row, index) ?? [];
            const activate = () => {
              onRowClick?.(row);
              if (canExpand && !rowActions) toggleExpanded(rowId);
            };

            return (
              <Fragment key={rowId}>
                <tr
                  className={getRowClassName?.(row, index)}
                  data-selected={isSelected || undefined}
                  data-expanded={isExpanded || undefined}
                  data-interactive={interactive || undefined}
                  onClick={interactive ? activate : undefined}
                  onKeyDown={(event) => {
                    if (!interactive || event.target !== event.currentTarget) return;
                    if (event.key !== 'Enter' && event.key !== ' ') return;
                    event.preventDefault();
                    activate();
                  }}
                  tabIndex={interactive ? 0 : undefined}
                  aria-label={rowAriaLabel?.(row, index)}
                  aria-expanded={canExpand ? isExpanded : undefined}
                  aria-selected={selectable ? isSelected : undefined}
                >
                  {selectable && (
                    <td className={classes.check} onClick={(event) => event.stopPropagation()}>
                      <input
                        type="checkbox"
                        checked={isSelected}
                        aria-label={rowAriaLabel ? `Selecionar ${rowAriaLabel(row, index)}` : `Selecionar registro ${index + 1}`}
                        onChange={() => toggleRow(rowId)}
                      />
                    </td>
                  )}
                  {visibleColumns.map(({ col, id }) => (
                    <td key={id} data-label={col.label} style={{ textAlign: col.align ?? 'left' }}>
                      {col.render
                        ? col.render(row, index)
                        : col.key
                          ? String((row as Record<string, unknown>)[col.key as string] ?? '')
                          : ''}
                    </td>
                  ))}
                  {showActionsColumn && (
                    <td className={classes.actions} onClick={(event) => event.stopPropagation()}>
                      {actions.length > 0 ? (
                        <DropdownMenu
                          align="end"
                          items={actions}
                          trigger={
                            <ActionIcon size={28} aria-label="Ações">
                              <Icon name="dots-v" size={14} />
                            </ActionIcon>
                          }
                        />
                      ) : canExpand ? (
                        <ActionIcon
                          size={28}
                          aria-label={isExpanded ? 'Recolher' : 'Expandir'}
                          aria-expanded={isExpanded}
                          onClick={() => toggleExpanded(rowId)}
                        >
                          <Icon name={isExpanded ? 'chev-up' : 'chev'} size={14} />
                        </ActionIcon>
                      ) : null}
                    </td>
                  )}
                </tr>
                {isExpanded && (
                  <tr className={classes.expandedRow}>
                    <td colSpan={colSpan}>
                      <div className={classes.expandedContent}>{renderExpandedRow?.(row, index)}</div>
                    </td>
                  </tr>
                )}
              </Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
DataTable.displayName = '@jcdecor/connect-ui/DataTable';
