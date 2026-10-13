import { useId, useRef, useState } from 'react';
import { Box, Card, UnstyledButton, type BoxProps, type CardProps, type ElementProps } from '@mantine/core';
import clsx from 'clsx';
import { CardHeader } from '../CardHeader';
import { Icon } from '../Icon';
import classes from './AreaChart.module.css';

export interface ChartDataPoint {
  /** Rótulo do eixo X (mês abreviado: "Jan") */
  m: string;
  [key: string]: string | number | undefined;
}

export interface ChartLabel {
  /** Chave do dado exibida na linha do tooltip */
  key: string;
  text: string;
  /** Linha separada e apagada no rodapé do tooltip (ex.: "Quadro ativo") */
  muted?: boolean;
}

export interface AreaChartProps extends BoxProps, Omit<ElementProps<'div'>, 'children'> {
  data: ChartDataPoint[];
  /** Cor da série principal (área + linha) @default 'var(--ds-primary)' */
  primary?: string;
  /** Cor da série secundária (linha tracejada) @default 'var(--cn-tone-coral-fg)' */
  secondary?: string;
  /** [série principal, série secundária] @default ['admissoes', 'desligamentos'] */
  keys?: [string, string];
  /** Altura em px @default 240 */
  height?: number;
  /** Linhas do tooltip (na ordem); a 1ª usa a cor principal, a 2ª o tracejado */
  labels: ChartLabel[];
  /** Topo do eixo Y; padrão = maior valor arredondado para cima */
  maxA?: number;
  /** Título do tooltip @default (ponto) => ponto.m */
  tipTitle?: (point: ChartDataPoint) => React.ReactNode;
  /** Descrição para leitores de tela @default resumo automático */
  'aria-label'?: string;
}

const niceMax = (v: number) => {
  if (v <= 0) return 4;
  const step = 10 ** Math.floor(Math.log10(v));
  return Math.ceil(v / (step / 2)) * (step / 2);
};

/**
 * Gráfico de área do Connect em SVG puro (sem dependências): série principal em área com gradiente,
 * série secundária tracejada, grade pontilhada e tooltip com crosshair (mouse e toque).
 */
export function AreaChart({
  data,
  primary = 'var(--ds-primary)',
  secondary = 'var(--cn-tone-coral-fg)',
  keys = ['admissoes', 'desligamentos'],
  height = 240,
  labels,
  maxA,
  tipTitle = (point) => point.m,
  'aria-label': ariaLabel,
  className,
  style,
  ...others
}: AreaChartProps) {
  const ref = useRef<SVGSVGElement>(null);
  const gradientId = useId();
  const [tip, setTip] = useState<number | null>(null);
  if (data.length === 0) return null;

  const W = 720;
  const H = height;
  const padL = 38;
  const padR = 14;
  const padT = 18;
  const padB = 28;
  const innerW = W - padL - padR;
  const innerH = H - padT - padB;
  const top = maxA ?? niceMax(Math.max(...data.flatMap((d) => [Number(d[keys[0]] ?? 0), Number(d[keys[1]] ?? 0)])));
  const x = (i: number) => padL + (data.length > 1 ? i / (data.length - 1) : 0.5) * innerW;
  const y = (v: number) => padT + innerH - (v / top) * innerH;
  const main = data.map((d, i) => [x(i), y(Number(d[keys[0]] ?? 0))] as const);
  const sec = data.map((d, i) => [x(i), y(Number(d[keys[1]] ?? 0))] as const);
  const base = padT + innerH;
  const line = (pts: readonly (readonly [number, number])[]) => pts.map((p, i) => `${i ? 'L' : 'M'}${p[0]} ${p[1]}`).join(' ');
  const areaPath = `M${main[0][0]} ${base} ${main.map((p) => `L${p[0]} ${p[1]}`).join(' ')} L${main[main.length - 1][0]} ${base} Z`;
  const grid = [0, 0.25, 0.5, 0.75, 1].map((f) => Math.round(top * f));

  function onPointer(clientX: number) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect || rect.width === 0) return;
    const px = ((clientX - rect.left) / rect.width) * W;
    const idx = Math.round(((px - padL) / innerW) * (data.length - 1));
    setTip(Math.max(0, Math.min(data.length - 1, idx)));
  }

  const summary =
    ariaLabel ??
    `${labels[0]?.text ?? keys[0]} e ${labels[1]?.text ?? keys[1]} de ${data[0].m} a ${data[data.length - 1].m}: ` +
      data.map((d) => `${d.m} ${d[keys[0]]}/${d[keys[1]]}`).join(', ');

  return (
    <Box
      className={clsx(classes.wrap, className)}
      style={[{ height, '--ac-primary': primary, '--ac-secondary': secondary }, style]}
      {...others}
    >
      <svg
        ref={ref}
        className={classes.chart}
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label={summary}
        onMouseMove={(e) => onPointer(e.clientX)}
        onMouseLeave={() => setTip(null)}
        onTouchStart={(e) => e.touches[0] && onPointer(e.touches[0].clientX)}
        onTouchMove={(e) => e.touches[0] && onPointer(e.touches[0].clientX)}
        onTouchEnd={() => setTip(null)}
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" style={{ stopColor: 'var(--ac-primary)', stopOpacity: 0.28 }} />
            <stop offset="100%" style={{ stopColor: 'var(--ac-primary)', stopOpacity: 0 }} />
          </linearGradient>
        </defs>
        {grid.map((g) => (
          <g key={g}>
            <line x1={padL} x2={W - padR} y1={y(g)} y2={y(g)} className={classes.grid} strokeDasharray="2 4" />
            <text x={padL - 8} y={y(g) + 3} textAnchor="end" className={classes.axisY}>
              {g}
            </text>
          </g>
        ))}
        <path d={line(sec)} className={classes.secLine} strokeWidth="1.6" fill="none" strokeDasharray="4 4" strokeLinecap="round" />
        {sec.map((p, i) => (
          <circle key={i} cx={p[0]} cy={p[1]} r="2.2" className={classes.secDot} strokeWidth="1.4" />
        ))}
        <path d={areaPath} fill={`url(#${CSS.escape(gradientId)})`} />
        <path d={line(main)} className={classes.mainLine} strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        {tip !== null && <line x1={x(tip)} x2={x(tip)} y1={padT} y2={base} className={classes.crosshair} />}
        {main.map((p, i) => (
          <circle key={i} cx={p[0]} cy={p[1]} r={tip === i ? 5 : 3.2} className={classes.mainDot} strokeWidth="2" />
        ))}
        {data.map((d, i) => (
          <text key={`${d.m}-${i}`} x={x(i)} y={H - 8} textAnchor="middle" className={classes.axisX}>
            {d.m}
          </text>
        ))}
      </svg>
      {tip !== null && (
        <div className={classes.tip} style={{ left: `${(x(tip) / W) * 100}%` }} role="status">
          <div className={classes.tipTitle}>{tipTitle(data[tip])}</div>
          {labels.map((label, li) => (
            <div key={label.key} className={classes.tipRow} data-muted={(li === labels.length - 1 && label.muted) || undefined}>
              <span>
                {li < 2 && <span className={classes.dot} data-series={li === 0 ? 'main' : 'sec'} />}
                {label.text}
              </span>
              <b>{data[tip][label.key] ?? '—'}</b>
            </div>
          ))}
        </div>
      )}
    </Box>
  );
}
AreaChart.displayName = '@jcdecor/connect-ui/AreaChart';

export interface ChartLegendProps extends BoxProps, ElementProps<'div'> {
  items: { label: string; color?: string; dashed?: boolean }[];
}

/** Legenda em linha do Connect (`.legend`): bolinha cheia ou tracejada + rótulo. */
export function ChartLegend({ items, className, ...others }: ChartLegendProps) {
  return (
    <Box className={clsx(classes.legend, className)} {...others}>
      {items.map((item) => (
        <span key={item.label}>
          <span
            className={classes.dot}
            data-series={item.dashed ? 'sec' : 'main'}
            style={item.color ? (item.dashed ? { borderColor: item.color } : { background: item.color }) : undefined}
          />
          {item.label}
        </span>
      ))}
    </Box>
  );
}
ChartLegend.displayName = '@jcdecor/connect-ui/ChartLegend';

export interface MoveChartProps extends Omit<CardProps, 'children'> {
  data: ChartDataPoint[];
  primary?: string;
  /** @default 240 */
  height?: number;
  /** @default 'Movimentação de pessoas' */
  title?: React.ReactNode;
  /** @default 'Admissões e desligamentos por mês' */
  sub?: React.ReactNode;
  /** Texto do seletor de período @default 'Últimos 6 meses' */
  periodLabel?: string;
  /** Clique no seletor de período (abre seu Menu/Popover) */
  onPeriodClick?: () => void;
}

/** Card pronto de movimentação de pessoas: CardHeader + legenda + seletor de período + AreaChart (admissões × desligamentos). */
export function MoveChart({
  data,
  primary = 'var(--ds-primary)',
  height = 240,
  title = 'Movimentação de pessoas',
  sub = 'Admissões e desligamentos por mês',
  periodLabel = 'Últimos 6 meses',
  onPeriodClick,
  ...others
}: MoveChartProps) {
  return (
    <Card {...others}>
      <CardHeader
        title={title}
        sub={sub}
        mb={14}
        actions={
          <>
            <ChartLegend items={[{ label: 'Admissões', color: primary }, { label: 'Desligamentos', dashed: true }]} />
            <UnstyledButton className={classes.period} onClick={onPeriodClick}>
              <Icon name="calendar" size={14} /> {periodLabel} <Icon name="chev" size={13} />
            </UnstyledButton>
          </>
        }
      />
      <AreaChart
        primary={primary}
        data={data}
        keys={['admissoes', 'desligamentos']}
        height={height}
        labels={[
          { key: 'admissoes', text: 'Admissões' },
          { key: 'desligamentos', text: 'Desligamentos' },
          { key: 'ativo', text: 'Quadro ativo', muted: true },
        ]}
      />
    </Card>
  );
}
MoveChart.displayName = '@jcdecor/connect-ui/MoveChart';
