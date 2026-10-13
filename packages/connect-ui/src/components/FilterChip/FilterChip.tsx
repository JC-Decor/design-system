import { UnstyledButton, type ElementProps, type UnstyledButtonProps } from '@mantine/core';
import clsx from 'clsx';
import type { ToneName } from '../../theme/tokens';
import { resolveTone, toneStyle } from '../../utils/tone';
import { Icon } from '../Icon';
import classes from './FilterChip.module.css';

export interface FilterChipProps extends UnstyledButtonProps, Omit<ElementProps<'button'>, 'color'> {
  children?: React.ReactNode;
  /** Tom quando ativo (fundo + texto do tom) @default 'ink' */
  tone?: ToneName;
  /** Selecionado */
  active?: boolean;
  /** Ícone do Connect à esquerda */
  icon?: string;
  /** Contador à direita (ex.: total de registros do filtro) */
  count?: number;
}

/** Chip de filtro do Connect (antigo `<Chip>`): botão pílula com ícone e contador; ativo assume o tom. */
export function FilterChip({ children, tone = 'ink', active = false, icon, count, className, style, ...others }: FilterChipProps) {
  const t = resolveTone(tone, 'ink');
  return (
    <UnstyledButton
      className={clsx(classes.root, className)}
      data-active={active || undefined}
      aria-pressed={others.role ? undefined : active}
      style={[toneStyle(t), style]}
      {...others}
    >
      {icon && <Icon name={icon} size={13} />}
      <span>{children}</span>
      {count != null && <span className={classes.count}>{count}</span>}
    </UnstyledButton>
  );
}
FilterChip.displayName = '@jcdecor/connect-ui/FilterChip';
