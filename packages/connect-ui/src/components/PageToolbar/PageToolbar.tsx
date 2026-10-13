import { useState, type CSSProperties, type ReactNode } from 'react';
import { Menu, Popover } from '@mantine/core';
import clsx from 'clsx';
import type { ToneName } from '../../theme/tokens';
import { AppSelect } from '../AppSelect';
import { Icon } from '../Icon';
import classes from './PageToolbar.module.css';

export interface ToolbarChip {
  key: string;
  label: string;
  /** Tom do chip ativo @default 'lavender' */
  tone?: ToneName;
  count?: number;
  /** Ícone do Connect antes do rótulo */
  icon?: string;
}

export interface ToolbarFilterField {
  key: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  /** Rótulo da opção "todos" (valor vazio) @default 'Todos' */
  placeholder?: string;
}

export interface ToolbarColumnOption {
  key: string;
  label: string;
}

export interface PageToolbarProps {
  /** Chips de filtro rápido (abas por status) */
  chips?: ToolbarChip[];
  onChipClick?: (key: string) => void;
  activeChip?: string;
  /** Mostra o campo de busca @default true */
  search?: boolean;
  /** Busca controlada (sem `onSearchChange` o campo guarda o próprio estado) */
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  /** @default 'Buscar...' */
  searchPlaceholder?: string;
  /** Campos do popover "Filtros" (cada um vira um AppSelect) */
  filters?: ToolbarFilterField[];
  /** Mostra "Limpar filtros" quando há filtro ativo */
  onFiltersClear?: () => void;
  /** Colunas do menu "Colunas" (com `onColumnVisibilityChange`) */
  columnOptions?: ToolbarColumnOption[];
  /** Visibilidade por coluna: `false` esconde; ausente = visível */
  columnVisibility?: Record<string, boolean>;
  onColumnVisibilityChange?: (visibility: Record<string, boolean>) => void;
  /** Botões à direita (ex.: "Novo colaborador") */
  actions?: ReactNode;
  /** Mantido por compatibilidade com o connect-jc (não exibido) */
  count?: number;
  className?: string;
  style?: CSSProperties;
}

const isColumnVisible = (visibility: Record<string, boolean>, key: string) => visibility[key] !== false;

/**
 * Barra de ferramentas de listas (`.ptb`): chips de status à esquerda; busca, filtros, colunas e ações à direita.
 */
export function PageToolbar({
  chips,
  onChipClick,
  activeChip,
  search = true,
  searchValue,
  onSearchChange,
  searchPlaceholder = 'Buscar...',
  filters,
  onFiltersClear,
  columnOptions,
  columnVisibility = {},
  onColumnVisibilityChange,
  actions,
  className,
  style,
}: PageToolbarProps) {
  const [internalQuery, setInternalQuery] = useState('');
  const q = searchValue ?? internalQuery;
  const setQ = onSearchChange ?? setInternalQuery;
  const showFilters = Boolean(filters?.length);
  const showColumns = Boolean(columnOptions?.length && onColumnVisibilityChange);
  const filtersActive = filters?.some((field) => Boolean(field.value)) ?? false;

  const toggleColumn = (key: string) => {
    if (!columnOptions || !onColumnVisibilityChange) return;
    const visible = isColumnVisible(columnVisibility, key);
    const visibleCount = columnOptions.filter((c) => isColumnVisible(columnVisibility, c.key)).length;
    if (visible && visibleCount <= 1) return; // sempre sobra ao menos uma coluna
    onColumnVisibilityChange({ ...columnVisibility, [key]: !visible });
  };

  return (
    <div className={clsx(classes.root, className)} style={style}>
      {chips && (
        <div className={classes.chips} role="group" aria-label="Filtros rápidos">
          {chips.map((c) => {
            const active = c.key === activeChip;
            const tone = c.tone ?? 'lavender';
            return (
              <button
                key={c.key}
                type="button"
                className={classes.chip}
                data-active={active || undefined}
                aria-pressed={active}
                style={
                  active
                    ? ({ '--chip-bg': `var(--cn-tone-${tone}-bg)`, '--chip-fg': `var(--cn-tone-${tone}-fg)` } as CSSProperties)
                    : undefined
                }
                onClick={() => onChipClick?.(c.key)}
              >
                {c.icon && <Icon name={c.icon} size={13} />}
                <span>{c.label}</span>
                {c.count != null && <span className={classes.chipCount}>{c.count}</span>}
              </button>
            );
          })}
        </div>
      )}

      <div className={classes.right}>
        {search && (
          <label className={classes.search}>
            <Icon name="search" size={15} className={classes.searchIcon} />
            <input
              type="search"
              placeholder={searchPlaceholder}
              value={q}
              onChange={(e) => setQ(e.target.value)}
              aria-label={searchPlaceholder}
            />
          </label>
        )}

        {showFilters && (
          <Popover position="bottom-end" offset={6} width={320} trapFocus shadow="lg" radius={11}>
            <Popover.Target>
              <button type="button" className={classes.select} data-active={filtersActive || undefined} aria-haspopup="dialog">
                <Icon name="filter" size={14} />
                Filtros
                {filtersActive && <span className={classes.dot} aria-hidden="true" />}
                {filtersActive && <span className={classes.srOnly}>(ativos)</span>}
              </button>
            </Popover.Target>
            <Popover.Dropdown className={clsx(classes.dropMenu, classes.filtersMenu)} aria-label="Filtros">
              {filters?.map((field) => (
                <AppSelect
                  key={field.key}
                  label={field.label}
                  value={field.value}
                  onChange={field.onChange}
                  placeholder={field.placeholder ?? 'Todos'}
                  withinPortal={false}
                  options={[{ value: '', label: field.placeholder ?? 'Todos' }, ...field.options]}
                />
              ))}
              {onFiltersClear && filtersActive && (
                <button type="button" className={classes.clear} onClick={onFiltersClear}>
                  Limpar filtros
                </button>
              )}
            </Popover.Dropdown>
          </Popover>
        )}

        {showColumns && (
          <Menu position="bottom-end" offset={6} closeOnItemClick={false} shadow="lg" radius={11}>
            <Menu.Target>
              <button type="button" className={classes.select}>
                <Icon name="sliders" size={14} />
                Colunas
              </button>
            </Menu.Target>
            <Menu.Dropdown className={classes.dropMenu} aria-label="Colunas visíveis">
              {columnOptions?.map((column) => {
                const visible = isColumnVisible(columnVisibility, column.key);
                return (
                  <Menu.Item
                    key={column.key}
                    className={classes.dropRow}
                    data-on={visible || undefined}
                    onClick={() => toggleColumn(column.key)}
                    rightSection={visible ? <Icon name="check" size={13} /> : undefined}
                  >
                    {column.label}
                    <span className={classes.srOnly}>{visible ? ' (visível)' : ' (oculta)'}</span>
                  </Menu.Item>
                );
              })}
            </Menu.Dropdown>
          </Menu>
        )}

        {actions}
      </div>
    </div>
  );
}
PageToolbar.displayName = '@jcdecor/connect-ui/PageToolbar';
