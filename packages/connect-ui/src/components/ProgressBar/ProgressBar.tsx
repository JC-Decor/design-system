import { Box, Progress, RingProgress, Text, Tooltip, type BoxProps, type ElementProps, type ProgressRootProps, type RingProgressProps } from '@mantine/core';
import clsx from 'clsx';
import type { ToneName } from '../../theme/tokens';
import { resolveTone } from '../../utils/tone';
import classes from './ProgressBar.module.css';

const pctOf = (value: number, max: number) => Math.max(0, Math.min(100, (value / (max || 1)) * 100));

export interface ProgressBarProps extends Omit<ProgressRootProps, 'size' | 'children'> {
  value: number;
  /** Valor que corresponde a 100% @default 100 */
  max?: number;
  /** Tom do preenchimento (usa o texto do tom) @default 'blue' */
  tone?: ToneName;
  /** Altura em px @default 6 */
  size?: number;
  /** Rótulo acessível @default 'Progresso' */
  'aria-label'?: string;
}

/** Barra de progresso fina do Connect (`.pbar`): trilho surface-2 e preenchimento na cor do tom. Progress do Mantine por baixo. */
export function ProgressBar({ value, max = 100, tone = 'blue', size = 6, className, 'aria-label': ariaLabel = 'Progresso', ...others }: ProgressBarProps) {
  const t = resolveTone(tone);
  const pct = pctOf(value, max);
  return (
    <Progress.Root size={size} radius="xl" className={clsx(classes.bar, className)} {...others}>
      <Progress.Section value={pct} color={`var(--cn-tone-${t}-fg)`} aria-label={ariaLabel} className={classes.fill} />
    </Progress.Root>
  );
}
ProgressBar.displayName = '@jcdecor/connect-ui/ProgressBar';

export interface ToneRingProps extends Omit<RingProgressProps, 'sections' | 'size' | 'thickness' | 'label'> {
  value: number;
  /** @default 100 */
  max?: number;
  /** Diâmetro em px @default 64 */
  size?: number;
  /** Espessura do traço em px @default 6 */
  stroke?: number;
  /** Tom: trilho = fundo do tom, arco e rótulo = texto do tom @default 'blue' */
  tone?: ToneName;
  /** Texto no centro; padrão = porcentagem arredondada */
  label?: React.ReactNode;
}

/** Anel de progresso do Connect (antigo `RingProgress`): trilho no fundo do tom e rótulo central. RingProgress do Mantine por baixo. */
export function ToneRing({ value, max = 100, size = 64, stroke = 6, tone = 'blue', label, className, ...others }: ToneRingProps) {
  const t = resolveTone(tone);
  const pct = pctOf(value, max);
  return (
    <RingProgress
      size={size}
      thickness={stroke}
      roundCaps
      rootColor={`var(--cn-tone-${t}-bg)`}
      sections={[{ value: pct, color: `var(--cn-tone-${t}-fg)` }]}
      transitionDuration={600}
      className={clsx(classes.ring, className)}
      role="img"
      aria-label={`${Math.round(pct)}%`}
      label={
        <Text ta="center" fz={13} fw={700} c={`var(--cn-tone-${t}-fg)`} className={classes.ringLabel}>
          {label ?? `${Math.round(pct)}%`}
        </Text>
      }
      {...others}
    />
  );
}
ToneRing.displayName = '@jcdecor/connect-ui/ToneRing';

export interface SegmentBarSegment {
  label: string;
  value: number;
  /** Qualquer cor CSS; padrão = paleta de gráficos do tema (`--cn-chart-N`) */
  color?: string;
}

export interface SegmentBarProps extends BoxProps, ElementProps<'div'> {
  segments: SegmentBarSegment[];
  /** Altura em px @default 8 */
  height?: number;
  /** Tooltip com "rótulo: valor" em cada segmento @default true */
  withTooltip?: boolean;
}

/** Barra segmentada (`.pillbar` do PageToolbar): distribuição de um total em segmentos com 2px de respiro. */
export function SegmentBar({ segments, height = 8, withTooltip = true, className, style, ...others }: SegmentBarProps) {
  const total = segments.reduce((sum, s) => sum + s.value, 0) || 1;
  return (
    <Box
      className={clsx(classes.segments, className)}
      style={[{ height }, style]}
      role="img"
      aria-label={segments.map((s) => `${s.label}: ${s.value}`).join(', ')}
      {...others}
    >
      {segments.map((s, i) => {
        const seg = (
          <div
            key={s.label}
            className={classes.segment}
            style={{ width: `${(s.value / total) * 100}%`, background: s.color ?? `var(--cn-chart-${(i % 8) + 1})` }}
          />
        );
        return withTooltip ? (
          <Tooltip key={s.label} label={`${s.label}: ${s.value}`} withArrow>
            {seg}
          </Tooltip>
        ) : (
          seg
        );
      })}
    </Box>
  );
}
SegmentBar.displayName = '@jcdecor/connect-ui/SegmentBar';
