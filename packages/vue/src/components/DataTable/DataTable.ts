import { computed, defineComponent, h, mergeProps, ref, type SetupContext, type SlotsType, type VNodeChild } from 'vue';
import {
  Box,
  EmptyState,
  Pagination,
  ScrollArea,
  Skeleton,
  TableTbody,
  TableTd,
  TableTh,
  TableThead,
  TableTr,
  resolveNode,
  type BoxProps,
  type MantineNode,
  type TableProps,
} from '@mantine-vue/core';
import { useUncontrolled } from '@mantine-vue/hooks';
import { Table } from '../../theme/themeDefaults';
import { IconArrowDown, IconArrowUp, IconArrowsSort, IconDatabaseOff } from '@tabler/icons-vue';
import { formatNumber } from '../../utils/format';
import { useListenerCheck } from '../../utils/vue';
import classes from './DataTable.module.css';

export interface DataTableColumn<T> {
  /** Chave do campo em `T` (também usada para ordenar). Omita em colunas calculadas/de ações e use `id` + `render`. */
  key?: keyof T & string;
  /** Identificador da coluna quando não há `key` (ex.: 'acoes') */
  id?: string;
  /** Cabeçalho. Também aceita o slot `header-<id>` (o slot tem prioridade). */
  header: MantineNode;
  /** Renderização customizada da célula. O slot `cell-<id>` (`{ row, index }`) tem prioridade. */
  render?: (row: T, index: number) => VNodeChild;
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

/** Props declaradas pelo próprio DataTable. As demais (style props do Box, atributos) vão para o wrapper. */
export interface DataTableOwnProps<T> {
  columns: DataTableColumn<T>[];
  data: T[];
  /** Chave única de cada linha @default índice */
  rowKey?: (row: T, index: number) => PropertyKey;
  /** Ordenação inicial quando não controlada */
  initialSort?: DataTableSort<T>;
  /** Controle externo da ordenação (use `v-model:sort`; `null` = sem ordenação) */
  sort?: DataTableSort<T> | null;
  /** Ativa paginação local com N linhas por página */
  pageSize?: number;
  loading?: boolean;
  /** Linhas de skeleton durante loading @default 5 */
  loadingRows?: number;
  /** Estado vazio customizado. Também aceita o slot `empty` (o slot tem prioridade). */
  empty?: MantineNode;
  /** Remove a moldura (card) em volta da tabela */
  plain?: boolean;
  striped?: boolean;
  stickyHeader?: boolean;
  /** Props repassadas para o Table do Mantine */
  tableProps?: Omit<TableProps, 'data'>;
}

export interface DataTableProps<T> extends Omit<BoxProps, keyof DataTableOwnProps<T>>, DataTableOwnProps<T> {
  'onUpdate:sort'?: (sort: DataTableSort<T> | null) => void;
  /** Mudança de ordenação (controlada ou não) */
  onSortChange?: (sort: DataTableSort<T> | null) => void;
  /** Clique (ou Enter/Espaço) numa linha. Torna as linhas focáveis. */
  onRowClick?: (row: T, index: number) => void;
}

export type DataTableSlots<T> = {
  /** Estado vazio customizado */
  empty?: () => VNodeChild;
} & {
  /** Célula da coluna `<id>` (`key` ou `id`) */
  [K in `cell-${string}`]?: (scope: { row: T; index: number }) => VNodeChild;
} & {
  /** Cabeçalho da coluna `<id>` */
  [K in `header-${string}`]?: () => VNodeChild;
};

type DataTableEmits<T> = {
  'update:sort': (sort: DataTableSort<T> | null) => void;
  'sort-change': (sort: DataTableSort<T> | null) => void;
  'row-click': (row: T, index: number) => void;
};

const columnId = <T>(column: DataTableColumn<T>) => (column.id ?? column.key ?? '') as string;

function compare(a: unknown, b: unknown) {
  if (typeof a === 'number' && typeof b === 'number') return a - b;
  return String(a ?? '').localeCompare(String(b ?? ''), 'pt-BR', { numeric: true, sensitivity: 'base' });
}

/**
 * Tabela de dados com ordenação, colunas numéricas pt-BR, paginação e estados vazio/carregando.
 *
 * - `v-model:sort` (controlado) ou `initialSort` (não controlado); `@sort-change` em ambos os casos.
 * - `@row-click="(row, index) => …"` torna as linhas clicáveis/focáveis.
 * - Slots: `#cell-<coluna>="{ row, index }"`, `#header-<coluna>`, `#empty`.
 */
export const DataTable = defineComponent(
  <T extends Record<string, any>>(
    props: DataTableProps<T>,
    { attrs, slots, emit }: SetupContext<DataTableEmits<T>, SlotsType<DataTableSlots<T>>>,
  ) => {
    const [sort, setSortValue] = useUncontrolled<DataTableSort<T> | null>({
      value: () => props.sort,
      defaultValue: props.initialSort ?? null,
      onChange: (next) => {
        emit('update:sort', next);
        emit('sort-change', next);
      },
    });
    const page = ref(1);

    const setSort = (next: DataTableSort<T> | null) => {
      setSortValue(next);
      page.value = 1;
    };

    const toggleSort = (key: string) => {
      const current = sort.value;
      if (!current || current.key !== key) setSort({ key, direction: 'asc' });
      else if (current.direction === 'asc') setSort({ key, direction: 'desc' });
      else setSort(null);
    };

    const sorted = computed(() => {
      const current = sort.value;
      if (!current) return props.data;
      const column = props.columns.find((c) => columnId(c) === current.key);
      const getValue = column?.sortValue ?? ((row: T) => (column?.key ? row[column.key] : undefined));
      const result = [...props.data].sort((a, b) => compare(getValue(a), getValue(b)));
      return current.direction === 'desc' ? result.reverse() : result;
    });

    // `row-click` está em `emits`, então o listener é procurado nas props do VNode (ver useListenerCheck).
    const hasListener = useListenerCheck();

    return () => {
      const { columns, pageSize, loading, plain, striped, stickyHeader, tableProps } = props;
      const loadingRows = props.loadingRows ?? 5;
      const currentSort = sort.value;
      const total = sorted.value.length;
      const totalPages = pageSize ? Math.max(1, Math.ceil(total / pageSize)) : 1;
      const currentPage = Math.min(page.value, totalPages);
      const visible = pageSize ? sorted.value.slice((currentPage - 1) * pageSize, currentPage * pageSize) : sorted.value;
      const clickable = hasListener('row-click');

      const header = h(TableThead as any, null, () =>
        h(TableTr as any, null, () =>
          columns.map((column) => {
            const id = columnId(column);
            const isSorted = currentSort?.key === id;
            const SortIcon = !isSorted ? IconArrowsSort : currentSort!.direction === 'asc' ? IconArrowUp : IconArrowDown;
            const label = resolveNode(column.header, slots[`header-${id}`] as (() => VNodeChild) | undefined);
            return h(
              TableTh as any,
              {
                key: id,
                class: column.numeric ? classes.num : undefined,
                style: { width: typeof column.width === 'number' ? `${column.width}px` : column.width },
                'aria-sort': isSorted ? (currentSort!.direction === 'asc' ? 'ascending' : 'descending') : undefined,
              },
              () =>
                column.sortable
                  ? h(
                      'button',
                      { type: 'button', class: classes.sortButton, 'data-sorted': isSorted || undefined, onClick: () => toggleSort(id) },
                      [label, h(SortIcon, { size: 12, stroke: '2.5', opacity: isSorted ? 1 : 0.5 })],
                    )
                  : label,
            );
          }),
        ),
      );

      let body: VNodeChild;
      if (loading) {
        body = Array.from({ length: loadingRows }, (_, i) =>
          h(TableTr as any, { key: i }, () =>
            columns.map((column) =>
              h(TableTd as any, { key: columnId(column) }, () =>
                h(Skeleton as any, { height: 14, width: column.numeric ? '50%' : '80%', ml: column.numeric ? 'auto' : 0 }),
              ),
            ),
          ),
        );
      } else if (visible.length === 0) {
        const empty = resolveNode(props.empty, slots.empty);
        body = h(TableTr as any, null, () =>
          h(TableTd as any, { colspan: columns.length }, () =>
            empty ??
            h(EmptyState as any, {
              py: 'xl',
              size: 'sm',
              icon: () => h(IconDatabaseOff, { size: 22 }),
              title: 'Nenhum resultado',
              description: 'Não há dados para exibir com os filtros atuais.',
            }),
          ),
        );
      } else {
        body = visible.map((row, index) =>
          h(
            TableTr as any,
            {
              key: props.rowKey ? props.rowKey(row, index) : index,
              class: classes.row,
              'data-clickable': clickable ? true : undefined,
              tabindex: clickable ? 0 : undefined,
              onClick: clickable ? () => emit('row-click', row, index) : undefined,
              onKeydown: clickable
                ? (event: KeyboardEvent) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault();
                      emit('row-click', row, index);
                    }
                  }
                : undefined,
            },
            () =>
              columns.map((column) => {
                const id = columnId(column);
                const cellSlot = slots[`cell-${id}`] as ((scope: { row: T; index: number }) => VNodeChild) | undefined;
                const raw = column.key ? row[column.key] : undefined;
                const content = cellSlot
                  ? cellSlot({ row, index })
                  : column.render
                    ? column.render(row, index)
                    : column.numeric && typeof raw === 'number'
                      ? formatNumber(raw, column.format)
                      : (raw as VNodeChild);
                return h(TableTd as any, { key: id, class: column.numeric ? classes.num : undefined }, () => content);
              }),
          ),
        );
      }

      return h(Box as any, mergeProps({ class: classes.wrapper, 'data-plain': plain || undefined }, attrs), () => [
        h(ScrollArea as any, { type: 'auto' }, () =>
          h(Table as any, { striped, stickyHeader, ...tableProps }, () => [header, h(TableTbody as any, null, () => body)]),
        ),
        pageSize && total > pageSize
          ? h('div', { class: classes.footer }, [
              h(
                'span',
                `${formatNumber((currentPage - 1) * pageSize + 1)}–${formatNumber(Math.min(currentPage * pageSize, total))} de ${formatNumber(total)}`,
              ),
              h(Pagination as any, {
                size: 'sm',
                total: totalPages,
                modelValue: currentPage,
                'onUpdate:modelValue': (value: number) => {
                  page.value = value;
                },
              }),
            ])
          : null,
      ]);
    };
  },
  {
    name: 'DataTable',
    inheritAttrs: false,
    props: [
      'columns',
      'data',
      'rowKey',
      'initialSort',
      'sort',
      'pageSize',
      'loading',
      'loadingRows',
      'empty',
      'plain',
      'striped',
      'stickyHeader',
      'tableProps',
    ],
    emits: ['update:sort', 'sort-change', 'row-click'],
  },
);
