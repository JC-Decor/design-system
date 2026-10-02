import {
  AreaChart as MAreaChart,
  BarChart as MBarChart,
  CompositeChart as MCompositeChart,
  DonutChart as MDonutChart,
  LineChart as MLineChart,
  PieChart as MPieChart,
  RadarChart as MRadarChart,
  Sparkline as MSparkline,
  type AreaChartProps as MAreaChartProps,
  type BarChartProps as MBarChartProps,
  type CompositeChartProps as MCompositeChartProps,
  type DonutChartCell,
  type DonutChartProps as MDonutChartProps,
  type LineChartProps as MLineChartProps,
  type PieChartCell,
  type PieChartProps as MPieChartProps,
  type RadarChartProps as MRadarChartProps,
  type SparklineProps as MSparklineProps,
} from '@mantine/charts';
import { paletteColor, ptBRValueFormatter, withPalette } from './palette';

type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
type SeriesWithOptionalColor<S> = Optional<S & { color?: string }, 'color'>;

/*
 * Wrappers finos dos gráficos do @mantine/charts com os padrões JC Decor:
 * - séries sem `color` recebem a paleta da marca (horizon, evergreen, electric…)
 * - números formatados em pt-BR
 * - curvas suaves; barras arredondadas (exceto empilhadas)
 * Todas as props do Mantine continuam disponíveis e têm prioridade.
 */

export type LineChartProps = Omit<MLineChartProps, 'series'> & { series: SeriesWithOptionalColor<MLineChartProps['series'][number]>[] };
export function LineChart({ series, ...props }: LineChartProps) {
  return (
    <MLineChart h={280} curveType="monotone" strokeWidth={2.5} valueFormatter={ptBRValueFormatter} series={withPalette(series)} {...props} />
  );
}

export type AreaChartProps = Omit<MAreaChartProps, 'series'> & { series: SeriesWithOptionalColor<MAreaChartProps['series'][number]>[] };
export function AreaChart({ series, ...props }: AreaChartProps) {
  return (
    <MAreaChart h={280} curveType="monotone" strokeWidth={2.5} fillOpacity={0.25} valueFormatter={ptBRValueFormatter} series={withPalette(series)} {...props} />
  );
}

export type BarChartProps = Omit<MBarChartProps, 'series'> & { series: SeriesWithOptionalColor<MBarChartProps['series'][number]>[] };
export function BarChart({ series, ...props }: BarChartProps) {
  const stacked = props.type === 'stacked' || props.type === 'percent';
  return <MBarChart h={280} barProps={{ radius: stacked ? 0 : 4 }} valueFormatter={ptBRValueFormatter} series={withPalette(series)} {...props} />;
}

export type CompositeChartProps = Omit<MCompositeChartProps, 'series'> & { series: SeriesWithOptionalColor<MCompositeChartProps['series'][number]>[] };
export function CompositeChart({ series, ...props }: CompositeChartProps) {
  return <MCompositeChart h={280} curveType="monotone" valueFormatter={ptBRValueFormatter} series={withPalette(series)} {...props} />;
}

export type RadarChartProps = Omit<MRadarChartProps, 'series'> & { series: SeriesWithOptionalColor<MRadarChartProps['series'][number]>[] };
export function RadarChart({ series, ...props }: RadarChartProps) {
  return <MRadarChart h={300} series={withPalette(series)} {...props} />;
}

export type DonutChartProps = Omit<MDonutChartProps, 'data'> & { data: Optional<DonutChartCell, 'color'>[] };
export function DonutChart({ data, ...props }: DonutChartProps) {
  return <MDonutChart withTooltip valueFormatter={ptBRValueFormatter} paddingAngle={2} thickness={24} data={withPalette(data)} {...props} />;
}

export type PieChartProps = Omit<MPieChartProps, 'data'> & { data: Optional<PieChartCell, 'color'>[] };
export function PieChart({ data, ...props }: PieChartProps) {
  return <MPieChart withTooltip valueFormatter={ptBRValueFormatter} data={withPalette(data)} {...props} />;
}

export type SparklineProps = Optional<MSparklineProps, 'color'>;
export function Sparkline(props: SparklineProps) {
  return <MSparkline h={48} curveType="monotone" color={paletteColor(0)} fillOpacity={0.3} strokeWidth={2} {...props} />;
}
