import { useEffect, useState, type CSSProperties, type ReactNode, type Ref } from 'react';
import { Combobox, useCombobox } from '@mantine/core';
import { useHotkeys, useOs, useUncontrolled } from '@mantine/hooks';
import clsx from 'clsx';
import { Icon } from '../Icon';
import classes from './GlobalSearchBox.module.css';

export interface GlobalSearchItem {
  id: string | number;
  label: string;
  /** Linha secundária (cargo, tipo, data…) */
  meta?: string;
  /** Ícone do Connect; herda o do grupo */
  icon?: string;
}

export interface GlobalSearchGroup {
  key: string;
  /** Título do grupo (ex.: "Pessoas") */
  title: string;
  /** Ícone padrão dos itens @default 'search' */
  icon?: string;
  items: GlobalSearchItem[];
}

export interface GlobalSearchBoxProps {
  /** Texto da busca (controlado) */
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  /** Resultados agrupados (Pessoas, Documentos, Comunicados…) */
  groups?: GlobalSearchGroup[];
  /** Chamado ao escolher um resultado; a busca é limpa e o painel fecha */
  onSelect?: (item: GlobalSearchItem, group: GlobalSearchGroup) => void;
  loading?: boolean;
  /** `true` usa a mensagem padrão; string personaliza */
  error?: boolean | string;
  /** Mínimo de caracteres para abrir o painel @default 2 */
  minChars?: number;
  /** @default 'Buscar pessoas, documentos, comunicados...' */
  placeholder?: string;
  /** Atalho para focar a busca, no formato do `useHotkeys` (ex.: 'mod+K'); exibe a dica em <kbd> */
  shortcut?: string;
  /** Modo expandido (mobile): ocupa a linha inteira e mostra o botão de fechar */
  expanded?: boolean;
  inputRef?: Ref<HTMLInputElement>;
  onCloseExpanded?: () => void;
  className?: string;
  style?: CSSProperties;
  /** Conteúdo extra no fim do painel (ex.: link "Ver todos os resultados") */
  footer?: ReactNode;
}

const optionValue = (groupKey: string, id: string | number) => `${groupKey}::${id}`;

function shortcutLabel(shortcut: string, os: string) {
  const mac = os === 'macos' || os === 'ios';
  return shortcut
    .split('+')
    .map((k) => (k.toLowerCase() === 'mod' ? (mac ? '⌘' : 'Ctrl') : k.length === 1 ? k.toUpperCase() : k))
    .join(mac ? '' : ' ');
}

/**
 * Busca global do cabeçalho (`.hd-search`): campo com painel de resultados agrupados.
 * Apresentacional — quem usa faz a consulta (`onChange`) e passa `groups`/`loading`/`error`.
 * Teclado: ↑/↓ navegam, Enter abre o resultado, Esc fecha.
 */
export function GlobalSearchBox({
  value,
  defaultValue,
  onChange,
  groups = [],
  onSelect,
  loading = false,
  error,
  minChars = 2,
  placeholder = 'Buscar pessoas, documentos, comunicados...',
  shortcut,
  expanded = false,
  inputRef,
  onCloseExpanded,
  className,
  style,
  footer,
}: GlobalSearchBoxProps) {
  const [q, setQ] = useUncontrolled({ value, defaultValue, finalValue: '', onChange });
  const [input, setInput] = useState<HTMLInputElement | null>(null);
  const os = useOs();
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const enabled = q.trim().length >= minChars;
  const hasResults = groups.some((g) => g.items.length > 0);

  useEffect(() => {
    if (enabled && document.activeElement === input) combobox.openDropdown();
    if (!enabled) combobox.closeDropdown();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled, input]);

  // Ao chegarem novos resultados, pré-seleciona o primeiro para o Enter funcionar direto
  useEffect(() => {
    if (combobox.dropdownOpened && hasResults && !loading) combobox.selectFirstOption();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [groups, loading]);

  useHotkeys(shortcut ? [[shortcut, () => input?.focus()]] : [], []);

  const setRefs = (node: HTMLInputElement | null) => {
    setInput(node);
    if (typeof inputRef === 'function') inputRef(node);
    else if (inputRef) (inputRef as { current: HTMLInputElement | null }).current = node;
  };

  const select = (val: string) => {
    for (const group of groups) {
      const item = group.items.find((it) => optionValue(group.key, it.id) === val);
      if (item) {
        combobox.closeDropdown();
        setQ('');
        onCloseExpanded?.();
        onSelect?.(item, group);
        return;
      }
    }
  };

  const showPanel = combobox.dropdownOpened && enabled;
  const errorMessage = typeof error === 'string' ? error : 'Não foi possível concluir a busca.';

  return (
    <Combobox
      store={combobox}
      onOptionSubmit={select}
      withinPortal={false}
      offset={8}
      position="bottom-start"
      width="target"
      classNames={{ dropdown: classes.panel, option: classes.item, group: classes.group, groupLabel: classes.groupTitle }}
    >
      <Combobox.DropdownTarget>
        <div
          className={clsx(classes.root, className)}
          data-expanded={expanded || undefined}
          data-open={showPanel || undefined}
          style={style}
        >
          <Icon name="search" size={17} className={classes.searchIcon} />
          <Combobox.EventsTarget>
            <input
              ref={setRefs}
              className={classes.input}
              value={q}
              onChange={(event) => {
                setQ(event.currentTarget.value);
                combobox.openDropdown();
              }}
              onFocus={() => enabled && combobox.openDropdown()}
              onBlur={() => combobox.closeDropdown()}
              onKeyDown={(event) => {
                if (event.key === 'Escape') {
                  combobox.closeDropdown();
                  onCloseExpanded?.();
                }
              }}
              placeholder={placeholder}
              aria-label={placeholder}
              autoComplete="off"
              type="search"
            />
          </Combobox.EventsTarget>
          {shortcut && !expanded && <kbd className={classes.kbd}>{shortcutLabel(shortcut, os)}</kbd>}
          {expanded && (
            <button
              type="button"
              className={classes.close}
              aria-label="Fechar busca"
              onClick={() => {
                combobox.closeDropdown();
                onCloseExpanded?.();
              }}
            >
              <Icon name="x" size={16} />
            </button>
          )}
        </div>
      </Combobox.DropdownTarget>

      <Combobox.Dropdown hidden={!showPanel}>
        <Combobox.Options aria-label="Resultados da busca">
          {loading && <div className={classes.status}>Buscando…</div>}
          {!loading && error && <div className={classes.status}>{errorMessage}</div>}
          {!loading && !error && !hasResults && (
            <div className={classes.status}>Nenhum resultado para “{q.trim()}”.</div>
          )}
          {!loading &&
            !error &&
            groups
              .filter((g) => g.items.length > 0)
              .map((group) => (
                <Combobox.Group key={group.key} label={group.title}>
                  {group.items.map((item) => (
                    <Combobox.Option key={item.id} value={optionValue(group.key, item.id)}>
                      <span className={classes.itemIcon}>
                        <Icon name={item.icon ?? group.icon ?? 'search'} size={14} />
                      </span>
                      <span className={classes.itemText}>
                        <span className={classes.itemLabel}>{item.label}</span>
                        {item.meta && <span className={classes.itemMeta}>{item.meta}</span>}
                      </span>
                    </Combobox.Option>
                  ))}
                </Combobox.Group>
              ))}
          {footer}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
GlobalSearchBox.displayName = '@jcdecor/connect-ui/GlobalSearchBox';
