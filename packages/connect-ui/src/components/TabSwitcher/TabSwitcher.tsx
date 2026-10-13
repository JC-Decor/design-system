import { useRef } from 'react';
import { Box, type BoxProps, type ElementProps } from '@mantine/core';
import clsx from 'clsx';
import type { ToneName } from '../../theme/tokens';
import { FilterChip } from '../FilterChip';
import classes from './TabSwitcher.module.css';

export interface TabSwitcherItem {
  key: string;
  label: string;
  count?: number;
  /** Ícone do Connect */
  icon?: string;
  disabled?: boolean;
  /** Tom quando ativa @default 'lavender' */
  tone?: ToneName;
}

export interface TabSwitcherProps extends BoxProps, Omit<ElementProps<'div'>, 'onChange'> {
  tabs: TabSwitcherItem[];
  activeKey: string;
  onChange: (key: string) => void;
  /** sm = chips mais baixos (barras de ferramentas densas) @default 'md' */
  size?: 'sm' | 'md';
  /** Rótulo do tablist @default 'Filtros' */
  'aria-label'?: string;
}

/** Abas em chips (`.ptb-chips`): tablist acessível com setas ←/→, Home/End e contadores. */
export function TabSwitcher({ tabs, activeKey, onChange, size = 'md', className, 'aria-label': ariaLabel = 'Filtros', ...others }: TabSwitcherProps) {
  const listRef = useRef<HTMLDivElement>(null);

  function move(currentKey: string, key: string) {
    const enabled = tabs.filter((t) => !t.disabled);
    const index = enabled.findIndex((t) => t.key === currentKey);
    if (index === -1 || enabled.length === 0) return;
    const next =
      key === 'ArrowRight' ? enabled[(index + 1) % enabled.length]
      : key === 'ArrowLeft' ? enabled[(index - 1 + enabled.length) % enabled.length]
      : key === 'Home' ? enabled[0]
      : enabled[enabled.length - 1];
    onChange(next.key);
    listRef.current?.querySelector<HTMLElement>(`[data-tab="${CSS.escape(next.key)}"]`)?.focus();
  }

  return (
    <Box ref={listRef} role="tablist" aria-label={ariaLabel} className={clsx(classes.root, className)} data-size={size} {...others}>
      {tabs.map((tab) => {
        const active = tab.key === activeKey;
        return (
          <FilterChip
            key={tab.key}
            tone={tab.tone ?? 'lavender'}
            active={active}
            count={tab.count}
            icon={tab.icon}
            className={classes.tab}
            data-tab={tab.key}
            role="tab"
            aria-selected={active}
            aria-disabled={tab.disabled || undefined}
            tabIndex={active ? 0 : -1}
            onClick={tab.disabled ? undefined : () => onChange(tab.key)}
            onKeyDown={(event: React.KeyboardEvent<HTMLButtonElement>) => {
              if (['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) {
                event.preventDefault();
                move(tab.key, event.key);
              }
            }}
          >
            {tab.label}
          </FilterChip>
        );
      })}
    </Box>
  );
}
TabSwitcher.displayName = '@jcdecor/connect-ui/TabSwitcher';
