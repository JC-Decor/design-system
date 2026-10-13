import { useId } from 'react';
import { ActionIcon, Box, type BoxProps, type ElementProps } from '@mantine/core';
import clsx from 'clsx';
import type { ToneName } from '../../theme/tokens';
import { resolveTone, toneStyle } from '../../utils/tone';
import { Icon } from '../Icon';
import classes from './KpiCard.module.css';

export type SparkVariant = 'up' | 'down' | 'wave' | 'flat';

const SPARK_SEEDS: Record<SparkVariant, number[]> = {
  up: [8, 10, 9, 12, 14, 15, 18, 19, 21, 22, 24, 26],
  down: [22, 20, 21, 18, 19, 17, 18, 14, 15, 13, 12, 10],
  wave: [12, 14, 11, 15, 13, 16, 14, 17, 15, 18, 16, 19],
  flat: [14, 15, 14, 16, 15, 17, 15, 16, 17, 15, 16, 17],
};

function linePath(data: number[], w: number, h: number) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  return data
    .map((v, i) => {
      const x = data.length > 1 ? (i / (data.length - 1)) * w : w / 2;
      const y = h - ((v - min) / (max - min || 1)) * h;
      return `${i ? 'L' : 'M'}${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(' ');
}

export interface SparkProps extends BoxProps, ElementProps<'svg', 'display' | 'opacity' | 'color' | 'fontSize' | 'fontWeight' | 'fontFamily' | 'width' | 'height' | 'letterSpacing' | 'textDecoration' | 'fontStyle' | 'visibility' | 'transform' | 'overflow'> {
  /** @default 'blue' */
  tone?: ToneName;
  /** Formato pré-definido (decorativo) @default 'up' */
  variant?: SparkVariant;
  /** Série real; quando presente, ignora `variant` */
  data?: number[];
}

/** Sparkline de área com gradiente do tom, esticada na largura do contêiner (rodapé do KpiCard). */
export function Spark({ tone = 'blue', variant = 'up', data, className, style, ...others }: SparkProps) {
  const gradientId = useId();
  const t = resolveTone(tone);
  const W = 220;
  const H = 36;
  const d = linePath(data && data.length ? data : SPARK_SEEDS[variant] ?? SPARK_SEEDS.up, W, H);
  return (
    <Box
      component="svg"
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="none"
      aria-hidden
      className={clsx(classes.spark, className)}
      style={[toneStyle(t), style]}
      {...others}
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" style={{ stopColor: 'var(--tone-fg)', stopOpacity: 0.25 }} />
          <stop offset="100%" style={{ stopColor: 'var(--tone-fg)', stopOpacity: 0 }} />
        </linearGradient>
      </defs>
      <path d={`${d} L${W} ${H} L0 ${H} Z`} fill={`url(#${CSS.escape(gradientId)})`} />
      <path d={d} className={classes.sparkLine} strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
    </Box>
  );
}
Spark.displayName = '@jcdecor/connect-ui/Spark';

export interface MiniSparkProps extends BoxProps, ElementProps<'svg', 'display' | 'opacity' | 'color' | 'fontSize' | 'fontWeight' | 'fontFamily' | 'width' | 'height' | 'letterSpacing' | 'textDecoration' | 'fontStyle' | 'visibility' | 'transform' | 'overflow'> {
  data: number[];
  /** @default 'blue' */
  tone?: ToneName;
  /** Largura @default 80 */
  w?: number;
  /** Altura @default 22 */
  h?: number;
}

/** Linha de tendência mínima (sem área) para tabelas e listas. */
export function MiniSpark({ data, tone = 'blue', w = 80, h = 22, className, style, ...others }: MiniSparkProps) {
  const t = resolveTone(tone);
  return (
    <Box
      component="svg"
      viewBox={`0 0 ${w} ${h}`}
      width={w}
      height={h}
      preserveAspectRatio="none"
      aria-hidden
      className={className}
      style={[toneStyle(t), style]}
      {...others}
    >
      <path d={linePath(data, w, h)} className={classes.sparkLine} strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </Box>
  );
}
MiniSpark.displayName = '@jcdecor/connect-ui/MiniSpark';

export interface KpiData {
  key?: string;
  label: string;
  value: string;
  /** Variação já formatada ("+12%") */
  delta?: string;
  /** pos = verde com seta ↑ · neg = coral com seta ↓ · neu = neutro @default 'neu' */
  deltaTone?: 'pos' | 'neg' | 'neu';
  /** Complemento da variação ("vs. mês anterior") */
  sub?: string;
  /** @default 'blue' */
  tone?: ToneName;
  /** Ícone do Connect @default 'chart' */
  icon?: string;
  /** Formato da sparkline @default 'up' */
  spark?: SparkVariant;
  /** Série real da sparkline (vence `spark`) */
  sparkData?: number[];
}

export interface KpiCardProps extends BoxProps, ElementProps<'article'> {
  kpi: KpiData;
  /** Versão baixa (sem altura mínima, valor 24px) */
  compact?: boolean;
  /** Mostra o botão "⋯" e trata o clique */
  onMore?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /** Rótulo acessível do "⋯" @default 'Mais opções' */
  moreLabel?: string;
}

/** Card de KPI do Connect: ícone tonal, rótulo, valor grande, variação e sparkline sangrando no rodapé. */
export function KpiCard({ kpi, compact, onMore, moreLabel = 'Mais opções', className, style, ...others }: KpiCardProps) {
  const t = resolveTone(kpi.tone);
  const deltaTone = kpi.deltaTone ?? 'neu';
  return (
    <Box component="article" className={clsx(classes.root, className)} data-compact={compact || undefined} style={[toneStyle(t), style]} {...others}>
      <div className={classes.top}>
        <div className={classes.icon}>
          <Icon name={kpi.icon ?? 'chart'} size={18} />
        </div>
        {onMore && (
          <ActionIcon variant="subtle" color="gray" size={26} radius={8} aria-label={moreLabel} onClick={onMore} className={classes.more}>
            <Icon name="dots" size={16} />
          </ActionIcon>
        )}
      </div>
      <div className={classes.label}>{kpi.label}</div>
      <div className={classes.value}>{kpi.value}</div>
      {(kpi.delta || kpi.sub) && (
        <div className={classes.delta} data-tone={deltaTone}>
          {deltaTone === 'pos' && <Icon name="arrow-up" size={12} aria-label="Alta" />}
          {deltaTone === 'neg' && <Icon name="arrow-dn" size={12} aria-label="Queda" />}
          {kpi.delta && <span>{kpi.delta}</span>}
          {kpi.sub && <span className={classes.sub}>{kpi.sub}</span>}
        </div>
      )}
      <Spark tone={t} variant={kpi.spark ?? 'up'} data={kpi.sparkData} className={classes.kpiSpark} />
    </Box>
  );
}
KpiCard.displayName = '@jcdecor/connect-ui/KpiCard';
