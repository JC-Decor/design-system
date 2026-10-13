import type { CSSProperties, ReactElement, ReactNode } from 'react';
import { Menu, type MenuProps } from '@mantine/core';
import clsx from 'clsx';
import { Icon } from '../Icon';
import classes from './DropdownMenu.module.css';

export interface DropdownMenuItem {
  key: string;
  label: ReactNode;
  /** Nome de ícone do Connect ou nó React */
  icon?: string | ReactNode;
  disabled?: boolean;
  /** `danger` = item destrutivo em coral */
  tone?: 'default' | 'danger';
  onSelect: () => void;
}

export interface DropdownMenuSeparator {
  type: 'separator';
  key: string;
}

/** Rótulo de seção (cabeçalho em caixa alta dentro do menu) */
export interface DropdownMenuLabel {
  type: 'label';
  key: string;
  label: ReactNode;
}

export type DropdownMenuEntry = DropdownMenuItem | DropdownMenuSeparator | DropdownMenuLabel;

export interface DropdownMenuProps extends Omit<MenuProps, 'children' | 'position' | 'offset' | 'trigger'> {
  /** Elemento que abre o menu (botão). Recebe ref e aria-* do Menu. */
  trigger: ReactElement;
  items: DropdownMenuEntry[];
  /** Alinhamento do menu em relação ao gatilho @default 'end' */
  align?: 'start' | 'end' | 'center';
  /** Lado em que o menu abre @default 'bottom' */
  side?: 'top' | 'bottom';
  /** Distância do gatilho em px @default 6 */
  sideOffset?: number;
  className?: string;
  style?: CSSProperties;
}

const isSeparator = (e: DropdownMenuEntry): e is DropdownMenuSeparator => 'type' in e && e.type === 'separator';
const isLabel = (e: DropdownMenuEntry): e is DropdownMenuLabel => 'type' in e && e.type === 'label';

/**
 * Menu de ações (`.dd-menu` do Connect) sobre o `Menu` do Mantine: navegação por setas, Enter/Espaço,
 * Esc fecha e devolve o foco ao gatilho.
 */
export function DropdownMenu({
  trigger,
  items,
  align = 'end',
  side = 'bottom',
  sideOffset = 6,
  className,
  style,
  width,
  ...others
}: DropdownMenuProps) {
  const position = align === 'center' ? side : (`${side}-${align}` as const);
  return (
    <Menu position={position} offset={sideOffset} width={width} shadow="md" classNames={{ itemSection: classes.section }} {...others}>
      <Menu.Target>{trigger}</Menu.Target>
      <Menu.Dropdown className={clsx(classes.dropdown, className)} style={style}>
        {items.map((entry) => {
          if (isSeparator(entry)) return <Menu.Divider key={entry.key} className={classes.separator} />;
          if (isLabel(entry)) return <Menu.Label key={entry.key}>{entry.label}</Menu.Label>;
          const icon = typeof entry.icon === 'string' ? <Icon name={entry.icon} size={14} /> : entry.icon;
          return (
            <Menu.Item
              key={entry.key}
              className={classes.item}
              data-tone={entry.tone === 'danger' ? 'danger' : undefined}
              disabled={entry.disabled}
              onClick={entry.onSelect}
              leftSection={icon ? <span className={classes.icon}>{icon as ReactNode}</span> : undefined}
            >
              {entry.label}
            </Menu.Item>
          );
        })}
      </Menu.Dropdown>
    </Menu>
  );
}
DropdownMenu.displayName = '@jcdecor/connect-ui/DropdownMenu';
