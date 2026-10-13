import { Box, type BoxProps, type ElementProps } from '@mantine/core';
import clsx from 'clsx';
import type { ToneName } from '../../theme/tokens';
import { toneStyle } from '../../utils/tone';
import { Icon } from '../Icon';
import classes from './Tag.module.css';

export interface TagProps extends BoxProps, ElementProps<'span', 'color'> {
  children?: React.ReactNode;
  /** `neutral` = cinza (.tag) · um tom do Connect = fundo + texto do tom (`lavender` = .tag-lav) @default 'neutral' */
  tone?: 'neutral' | ToneName;
}

/** Etiqueta retangular (raio 6px) para categorias e metadados curtos — `.tag` / `.tag-lav` do Connect. */
export function Tag({ tone = 'neutral', className, style, ...others }: TagProps) {
  return (
    <Box
      component="span"
      className={clsx(classes.tag, className)}
      data-tone={tone}
      style={[tone === 'neutral' ? undefined : toneStyle(tone), style]}
      {...others}
    />
  );
}
Tag.displayName = '@jcdecor/connect-ui/Tag';

export interface MetaPillProps extends BoxProps, ElementProps<'span', 'color'> {
  children?: React.ReactNode;
  /** Destaque com o navy suave (.pill-on) */
  active?: boolean;
  /** Ícone do Connect à esquerda */
  icon?: string;
}

/** Pílula de metadado (departamento, cidade, contagem…) — `.pill` do Connect. Não é clicável; para filtros use FilterChip. */
export function MetaPill({ active, icon, children, className, ...others }: MetaPillProps) {
  return (
    <Box component="span" className={clsx(classes.pill, className)} data-active={active || undefined} {...others}>
      {icon && <Icon name={icon} size={12} />}
      {children}
    </Box>
  );
}
MetaPill.displayName = '@jcdecor/connect-ui/MetaPill';
