import { useMemo, useState } from 'react';
import { Box, EmptyState, Pagination, ScrollArea, Skeleton, Table, type BoxProps, type TableProps } from '@mantine/core';
import { IconArrowDown, IconArrowUp, IconArrowsSort, IconDatabaseOff } from '@tabler/icons-react';
import { formatNumber } from '../../utils/format';
import classes from './DataTable.module.css';

export interface DataTableColumn<T> {
  /** Chave do campo em `T` (também usada para ordenar). Omita em colunas calculadas/de ações e use `id` + `render`. */
  key?: keyof T & string;
  /** Identificador da coluna quando não há `key` (ex.: 'acoes') */
  id?: string;
  header: React.ReactNode;
  /** Renderização customizada da célula */
  render?: (row: T, index: number) => React.ReactNode;
  /** Coluna numérica: alinhada à direita, tabular-nums e formatada em pt-BR */
  numeric?: boolean;
  /** Opções de Intl.NumberFormat para colunas numéricas */
  format?: Intl.NumberFormatOptions;
  sortable?: boolean;
  /** Valor usado na ordenação quando diferente do campo */
  sortValue?: (row: T) => string | number;
  width?: number | string;
}

export type SortDirection = 'asc' | 'desc';
export interface DataTableSort<T> {
  /** `key` ou `id` da coluna ordenada */
  key: (keyof T & string) | (string & {});
  direction: SortDirection;
}

export interface DataTableProps<T> extends BoxProps {
  columns: DataTableColumn<T>[];
  data: T[];
  /** Chave única de cada linha @default índice */
  rowKey?: (row: T, index: number) => React.Key;
  initialSort?: DataTableSort<T>;
  /** Controle externo da ordenação */
  sort?: DataTableSort<T> | null;
  onSortChange?: (sort: DataTableSort<T> | null) => void;
  /** Ativa paginação local com N linhas por página */
  pageSize?: number;
  loading?: boolean;
  /** Linhas de skeleton durante loading @default 5 */
  loadingRows?: number;
  empty?: React.ReactNode;
  onRowClick?: (row: T, index: number) => void;
  /** Remove a moldura (card) em volta da tabela */
  plain?: boolean;
  striped?: boolean;
  stickyHeader?: boolean;
  /** Props repassadas para o Table do Mantine */
  tableProps?: Omit<TableProps, 'data'>;
}

const columnId = <T,>(column: DataTableColumn<T>) => (column.id ?? column.key ?? '') as string;

function compare(a: unknown, b: unknown) {
  if (typeof a === 'number' && typeof b === 'number') return a - b;
  return String(a ?? '').localeCompare(String(b ?? ''), 'pt-BR', { numeric: true, sensitivity: 'base' });
}

/** Tabela de dados com ordenação, colunas numéricas pt-BR, paginação e estados vazio/carregando. */
export function DataTable<T extends Record<string, any>>({
  columns,
  data,
  rowKey,
  initialSort,
  sort: controlledSort,
  onSortChange,
  pageSize,
  loading,
  loadingRows = 5,
  empty,
  onRowClick,
  plain,
  striped,
  stickyHeader,
  tableProps,
  ...others
}: DataTableProps<T>) {
  const [internalSort, setInternalSort] = useState<DataTableSort<T> | null>(initialSort ?? null);
  const sort = controlledSort !== undefined ? controlledSort : internalSort;
  const [page, setPage] = useState(1);

  const setSort = (next: DataTableSort<T> | null) => {
    if (controlledSort === undefined) setInternalSort(next);
    onSortChange?.(next);
    setPage(1);
  };

  const toggleSort = (key: string) => {
    if (!sort || sort.key !== key) setSort({ key, direction: 'asc' });
    else if (sort.direction === 'asc') setSort({ key, direction: 'desc' });
    else setSort(null);
  };

  const sorted = useMemo(() => {
    if (!sort) return data;
    const column = columns.find((c) => columnId(c) === sort.key);
    const getValue = column?.sortValue ?? ((row: T) => (column?.key ? row[column.key] : undefined));
    const result = [...data].sort((a, b) => compare(getValue(a), getValue(b)));
    return sort.direction === 'desc' ? result.reverse() : result;
  }, [data, sort, columns]);

  const totalPages = pageSize ? Math.max(1, Math.ceil(sorted.length / pageSize)) : 1;
  const currentPage = Math.min(page, totalPages);
  const visible = pageSize ? sorted.slice((currentPage - 1) * pageSize, currentPage * pageSize) : sorted;

  const header = (
    <Table.Thead>
      <Table.Tr>
        {columns.map((column) => {
          const id = columnId(column);
          const isSorted = sort?.key === id;
          const SortIcon = !isSorted ? IconArrowsSort : sort!.direction === 'asc' ? IconArrowUp : IconArrowDown;
          return (
            <Table.Th
              key={id}
              className={column.numeric ? classes.num : undefined}
              style={{ width: column.width }}
              aria-sort={isSorted ? (sort!.direction === 'asc' ? 'ascending' : 'descending') : undefined}
            >
              {column.sortable ? (
                <button type="button" className={classes.sortButton} data-sorted={isSorted || undefined} onClick={() => toggleSort(id)}>
                  {column.header}
                  <SortIcon size={12} stroke={2.5} opacity={isSorted ? 1 : 0.5} />
                </button>
              ) : (
                column.header
              )}
            </Table.Th>
          );
        })}
      </Table.Tr>
    </Table.Thead>
  );

  let body: React.ReactNode;
  if (loading) {
    body = Array.from({ length: loadingRows }, (_, i) => (
      <Table.Tr key={i}>
        {columns.map((column) => (
          <Table.Td key={columnId(column)}>
            <Skeleton height={14} width={column.numeric ? '50%' : '80%'} ml={column.numeric ? 'auto' : 0} />
          </Table.Td>
        ))}
      </Table.Tr>
    ));
  } else if (visible.length === 0) {
    body = (
      <Table.Tr>
        <Table.Td colSpan={columns.length}>
          {empty ?? (
            <EmptyState
              py="xl"
              size="sm"
              icon={<IconDatabaseOff size={22} />}
              title="Nenhum resultado"
              description="Não há dados para exibir com os filtros atuais."
            />
          )}
        </Table.Td>
      </Table.Tr>
    );
  } else {
    body = visible.map((row, index) => (
      <Table.Tr
        key={rowKey ? rowKey(row, index) : index}
        className={classes.row}
        data-clickable={onRowClick ? true : undefined}
        onClick={onRowClick ? () => onRowClick(row, index) : undefined}
        tabIndex={onRowClick ? 0 : undefined}
        onKeyDown={
          onRowClick
            ? (event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  onRowClick(row, index);
                }
              }
            : undefined
        }
      >
        {columns.map((column) => {
          const raw = column.key ? row[column.key] : undefined;
          const content = column.render
            ? column.render(row, index)
            : column.numeric && typeof raw === 'number'
              ? formatNumber(raw, column.format)
              : (raw as React.ReactNode);
          return (
            <Table.Td key={columnId(column)} className={column.numeric ? classes.num : undefined}>
              {content}
            </Table.Td>
          );
        })}
      </Table.Tr>
    ));
  }

  return (
    <Box className={classes.wrapper} data-plain={plain || undefined} {...others}>
      <ScrollArea type="auto">
        <Table striped={striped} stickyHeader={stickyHeader} {...tableProps}>
          {header}
          <Table.Tbody>{body}</Table.Tbody>
        </Table>
      </ScrollArea>
      {pageSize && sorted.length > pageSize && (
        <div className={classes.footer}>
          <span>
            {formatNumber((currentPage - 1) * pageSize + 1)}–{formatNumber(Math.min(currentPage * pageSize, sorted.length))} de{' '}
            {formatNumber(sorted.length)}
          </span>
          <Pagination size="sm" total={totalPages} value={currentPage} onChange={setPage} />
        </div>
      )}
    </Box>
  );
}
DataTable.displayName = '@jcdecor/ui/DataTable';
