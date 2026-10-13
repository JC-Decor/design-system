import { Box, Skeleton, VisuallyHidden, type BoxProps, type ElementProps } from '@mantine/core';
import clsx from 'clsx';
import classes from './SkeletonBlock.module.css';

export type SkeletonBlockVariant = 'text' | 'card' | 'list' | 'table' | 'profile' | 'chart';

export interface SkeletonBlockProps extends BoxProps, ElementProps<'div'> {
  /** Formato do conteúdo que está carregando @default 'text' */
  variant?: SkeletonBlockVariant;
  /** Linhas (text, card, list, table) @default 3 */
  rows?: number;
  /** Texto anunciado a leitores de tela @default 'Carregando…' */
  label?: string;
}

/** Esqueleto de carregamento pronto por formato (texto, card, lista, tabela, perfil, gráfico). Skeleton do Mantine por baixo. */
export function SkeletonBlock({ variant = 'text', rows = 3, label = 'Carregando…', className, ...others }: SkeletonBlockProps) {
  const items = Array.from({ length: rows }, (_, i) => i);
  let body: React.ReactNode;

  if (variant === 'table') {
    body = (
      <>
        <Skeleton height={40} radius={10} />
        {items.map((i) => <Skeleton key={i} height={52} radius={10} />)}
      </>
    );
  } else if (variant === 'profile') {
    body = (
      <>
        <Skeleton height={58} width={58} circle />
        <div className={classes.lines}>
          <Skeleton height={16} width="44%" radius="xl" />
          <Skeleton height={12} radius="xl" />
          <Skeleton height={12} width="68%" radius="xl" />
        </div>
      </>
    );
  } else if (variant === 'chart') {
    body = (
      <div className={classes.bars}>
        {Array.from({ length: 7 }, (_, i) => (
          <Skeleton key={i} className={classes.bar} height={`${34 + i * 7}%`} />
        ))}
      </div>
    );
  } else {
    const height = variant === 'list' ? 48 : variant === 'card' ? 16 : 12;
    const widths = variant === 'text' ? ['100%', '76%', '58%'] : variant === 'card' ? ['42%'] : [];
    body = items.map((i) => (
      <Skeleton
        key={i}
        height={variant === 'card' && i === 0 ? 20 : height}
        width={widths[i] ?? '100%'}
        radius={variant === 'list' ? 14 : 'xl'}
      />
    ));
  }

  return (
    <Box className={clsx(classes.root, className)} data-variant={variant} role="status" aria-live="polite" {...others}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <Box className={classes.inner} data-variant={variant} aria-hidden>
        {body}
      </Box>
    </Box>
  );
}
SkeletonBlock.displayName = '@jcdecor/connect-ui/SkeletonBlock';
