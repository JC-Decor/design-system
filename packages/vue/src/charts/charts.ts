import {
  computed,
  defineComponent,
  h,
  inject,
  nextTick,
  onMounted,
  onUpdated,
  provide,
  ref,
  toValue,
  type Component,
  type ComponentObjectPropsOptions,
  type DefineSetupFnComponent,
} from 'vue';
import { THEME_KEY } from 'vue-echarts';
import type { EChartsOption } from 'echarts';
import {
  AreaChart as MAreaChart,
  BarChart as MBarChart,
  BarsList as MBarsList,
  BubbleChart as MBubbleChart,
  CandlestickChart as MCandlestickChart,
  CompositeChart as MCompositeChart,
  DonutChart as MDonutChart,
  FunnelChart as MFunnelChart,
  GaugeChart as MGaugeChart,
  Heatmap as MHeatmap,
  LineChart as MLineChart,
  MatrixChart as MMatrixChart,
  PieChart as MPieChart,
  RadarChart as MRadarChart,
  RadialBarChart as MRadialBarChart,
  SankeyChart as MSankeyChart,
  ScatterChart as MScatterChart,
  Sparkline as MSparkline,
  Treemap as MTreemap,
  WaffleChart as MWaffleChart,
  type AreaChartProps as MAreaChartProps,
  type AreaChartSeries,
  type BarChartProps as MBarChartProps,
  type BarChartSeries,
  type BarsListProps as MBarsListProps,
  type BubbleChartProps as MBubbleChartProps,
  type CandlestickChartProps as MCandlestickChartProps,
  type CompositeChartProps as MCompositeChartProps,
  type CompositeChartSeries,
  type DonutChartProps as MDonutChartProps,
  type FunnelChartCell,
  type FunnelChartProps as MFunnelChartProps,
  type GaugeChartProps as MGaugeChartProps,
  type HeatmapProps as MHeatmapProps,
  type LineChartProps as MLineChartProps,
  type LineChartSeries,
  type MatrixChartProps as MMatrixChartProps,
  type PieChartCell,
  type PieChartProps as MPieChartProps,
  type RadarChartProps as MRadarChartProps,
  type RadialBarChartCell,
  type RadialBarChartProps as MRadialBarChartProps,
  type SankeyChartNode,
  type SankeyChartProps as MSankeyChartProps,
  type ScatterChartProps as MScatterChartProps,
  type ScatterChartSeries,
  type SparklineProps as MSparklineProps,
  type TreemapData,
  type TreemapProps as MTreemapProps,
  type WaffleChartCell,
  type WaffleChartProps as MWaffleChartProps,
  type ChartSeries,
} from '@mantine-vue/charts';
import { ramps } from '../theme/tokens';
import { createJcEChartsTheme, mergeChartOptions, type JcEChartsThemeOptions } from './echartsTheme';
import { ptBRValueFormatter, useJcChartColors, type ChartColorScheme, type ChartSchemeTokens, type JcChartColors } from './palette';

/*
 * Wrappers finos dos gráficos do @mantine-vue/charts (Apache ECharts) com os padrões JC Decor:
 * - séries/fatias sem `color` recebem a paleta da marca (horizon, evergreen, electric…)
 * - TODAS as cores viram hex do esquema atual (o canvas não entende `horizon.6` nem `var(--jc-chart-1)`)
 *   e recolorem ao alternar claro/escuro
 * - eixos, grade, legenda e tooltip com os tokens semânticos do esquema (tema do ECharts via `THEME_KEY`)
 * - números formatados em pt-BR; curvas suaves; barras arredondadas (exceto empilhadas)
 * Todas as props do Mantine Vue continuam disponíveis e têm prioridade.
 */

type Input = Record<string, unknown>;
type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
type SeriesWithOptionalColor<S> = Optional<S & { color?: string }, 'color'>;

/** Props comuns dos wrappers JC. */
export interface JcChartRootProps {
  /** Alias de `height` (nome usado no @jcdecor/ui React). `height` tem prioridade. */
  h?: number | string;
}

/** Eventos repassados pelo gráfico do Mantine Vue (parâmetros do ECharts). */
export type JcChartEmits = {
  click: (params: unknown) => void;
  dblclick: (params: unknown) => void;
  mouseover: (params: unknown) => void;
  mouseout: (params: unknown) => void;
  legendselectchanged: (params: unknown) => void;
  datazoom: (params: unknown) => void;
};

/** Métodos expostos via template ref (os mesmos do Mantine Vue). */
export interface JcChartExposed {
  getEchartsInstance: () => unknown;
  resize: () => void;
  setOption: (option: EChartsOption) => void;
}

interface BuildContext {
  c: JcChartColors;
  t: ChartSchemeTokens;
  scheme: ChartColorScheme;
}

interface JcChartSpec {
  /** Props declaradas (reativas) — usadas para o tema por instância; também são repassadas */
  props?: ComponentObjectPropsOptions;
  themeOptions?: (props: Input) => JcEChartsThemeOptions;
  build: (input: Input, ctx: BuildContext) => Input;
  /** Ajuste na instância ECharts depois de cada renderização (para o que o Mantine Vue não deixa configurar) */
  patch?: (instance: EChartsInstance, props: Input) => void;
}

type EChartsInstance = {
  getOption: () => { series?: Array<Record<string, unknown>> };
  setOption: (option: Record<string, unknown>) => void;
  on: (event: string, handler: () => void) => void;
};

const camelize = (key: string) => key.replace(/-([a-z])/g, (_match, letter: string) => letter.toUpperCase());

/**
 * Props booleanas dos gráficos do Mantine Vue. Como eles não declaram props (leem `attrs`), o atalho
 * de template `<LineChart with-legend />` chega como `''` e o `bool()` interno o ignora — aqui vira `true`.
 */
const BOOLEAN_PROPS = new Set(['connectNulls', 'roundCaps', 'autoresize', 'loading']);
const isBooleanProp = (key: string) => BOOLEAN_PROPS.has(key) || /^with[A-Z]/.test(key);

/** kebab-case → camelCase (como o Mantine Vue faz), preservando `data-*` e `aria-*`. */
function normalizeAttrs(attrs: Input): Input {
  const out: Input = {};
  for (const [key, value] of Object.entries(attrs)) {
    const name = key.startsWith('data-') || key.startsWith('aria-') ? key : camelize(key);
    out[name] = value === '' && isBooleanProp(name) ? true : value;
  }
  return out;
}

const definedEntries = (props: Input) => Object.fromEntries(Object.entries(props).filter(([, value]) => value !== undefined));
const asArray = <T = { color?: string }>(value: unknown): T[] | undefined => (Array.isArray(value) ? (value as T[]) : undefined);
const asString = (value: unknown) => (typeof value === 'string' ? value : undefined);
const asFormatter = (value: unknown) => (typeof value === 'function' ? (value as (value: number) => string) : ptBRValueFormatter);

function defineJcChart(name: string, base: Component, spec: JcChartSpec) {
  return defineComponent({
    name: `Jc${name}`,
    inheritAttrs: false,
    props: spec.props ?? {},
    setup(props, { attrs, slots, expose }) {
      const c = useJcChartColors();
      const outerTheme = inject(THEME_KEY, null);
      const theme = computed(() => {
        const own = createJcEChartsTheme(c.scheme.value, spec.themeOptions?.(props as Input));
        // Um tema-objeto fornecido acima (provide(THEME_KEY, …)) vence o tema JC
        return mergeChartOptions(own, toValue(outerTheme));
      });
      provide(THEME_KEY, theme);

      const chart = ref<Partial<JcChartExposed>>();

      // O vue-echarts recria a instância ao trocar o tema: liga o patch em cada instância nova (uma vez)
      const patched = new WeakSet<object>();
      const attachPatch = () => {
        const instance = spec.patch && (chart.value?.getEchartsInstance?.() as EChartsInstance | undefined);
        if (!instance || patched.has(instance)) return;
        patched.add(instance);
        const run = () => spec.patch!(instance, { ...(props as Input), ...normalizeAttrs(attrs) });
        instance.on('rendered', run);
        run();
      };
      if (spec.patch) {
        onMounted(() => nextTick(attachPatch));
        onUpdated(() => nextTick(attachPatch));
      }
      expose({
        getEchartsInstance: () => chart.value?.getEchartsInstance?.(),
        resize: () => chart.value?.resize?.(),
        setOption: (option: EChartsOption) => chart.value?.setOption?.(option),
      } satisfies JcChartExposed);

      return () => {
        const { h: heightAlias, ...input } = { ...definedEntries(props as Input), ...normalizeAttrs(attrs) };
        if (input.height === undefined && heightAlias !== undefined) input.height = heightAlias;
        const ctx: BuildContext = { c, t: c.tokens.value, scheme: c.scheme.value };
        return h(base as any, { ...spec.build(input, ctx), ref: chart }, slots);
      };
    },
  });
}

/** Eixos com cores do esquema + formatador pt-BR no eixo de valores; props do usuário mesclam por cima. */
function gridChartProps(defaults: Input, input: Input, { c, t }: BuildContext): Input {
  const merged = { ...defaults, ...input };
  const text = c.resolve(asString(input.textColor)) ?? t.text3;
  const grid = c.resolve(asString(input.gridColor)) ?? t.borderSoft;
  const format = asFormatter(merged.valueFormatter);
  const splitLine = { lineStyle: { color: grid } };
  const categoryAxis = { axisLabel: { color: text }, splitLine };
  const valueAxis = { axisLabel: { color: text, formatter: (value: number) => format(value) }, splitLine };
  const vertical = input.orientation === 'vertical';
  return {
    ...merged,
    valueFormatter: format,
    textColor: text,
    gridColor: grid,
    xAxisProps: mergeChartOptions(vertical ? valueAxis : categoryAxis, input.xAxisProps),
    yAxisProps: mergeChartOptions(vertical ? categoryAxis : valueAxis, input.yAxisProps),
    rightYAxisProps: mergeChartOptions(valueAxis, input.rightYAxisProps),
    referenceLines: resolveRefs(input.referenceLines, c, t.text3),
    referenceAreas: resolveRefs(input.referenceAreas, c, t.text3),
    referenceDots: resolveRefs(input.referenceDots, c, t.text3),
    series: c.withPalette(asArray<{ color?: string }>(input.series)),
  };
}

/** Linhas/áreas/pontos de referência: cor resolvida (padrão: texto-3 do esquema, não o cinza fixo do Mantine). */
function resolveRefs(items: unknown, c: JcChartColors, fallback: string) {
  const list = asArray<{ color?: string }>(items);
  return list?.map((item) => ({ ...item, color: c.resolve(item.color) ?? fallback }));
}

/** Tooltip de pizza/rosca/funil com o formatador pt-BR (o Mantine Vue só formata os rótulos). */
function itemTooltipProps(input: Input, format: (value: number) => string) {
  return mergeChartOptions({ valueFormatter: (value: unknown) => format(Number(value)) }, input.tooltipProps);
}

const sequentialColors: Record<ChartColorScheme, string[]> = {
  light: [ramps.horizon[100], ramps.horizon[300], ramps.horizon[500], ramps.horizon[700]],
  dark: [ramps.horizon[900], ramps.horizon[700], ramps.horizon[500], ramps.horizon[300]],
};

/* ------------------------------------------------------------------ cartesianos */

export type LineChartProps = Omit<MLineChartProps, 'series'> &
  JcChartRootProps & { series: SeriesWithOptionalColor<LineChartSeries>[] };

/** Gráfico de linhas. Padrões: `height` 280, curva `monotone`, traço 2,5, pt-BR. */
export const LineChart = defineJcChart('LineChart', MLineChart, {
  build: (input, ctx) => gridChartProps({ height: 280, curveType: 'monotone', strokeWidth: 2.5 }, input, ctx),
}) as unknown as DefineSetupFnComponent<LineChartProps, JcChartEmits>;

export type AreaChartProps = Omit<MAreaChartProps, 'series'> &
  JcChartRootProps & { series: SeriesWithOptionalColor<AreaChartSeries>[] };

/** Gráfico de área. Padrões: `height` 280, curva `monotone`, traço 2,5, preenchimento 25%, pt-BR. */
export const AreaChart = defineJcChart('AreaChart', MAreaChart, {
  props: { fillOpacity: { type: Number, default: undefined } },
  // Contorna bug do @mantine-vue/charts 3.5: `cartesianOption(…, 'area')` grava `areaStyle: undefined` em toda série
  // (área sem preenchimento, e o tema não consegue preencher). Aplica o preenchimento na instância, só onde falta.
  patch: (instance, props) => {
    const series = instance.getOption().series ?? [];
    if (!series.some((s) => s.type === 'line' && !s.areaStyle)) return;
    const opacity = typeof props.fillOpacity === 'number' ? props.fillOpacity : 0.25;
    instance.setOption({ series: series.map((s) => (s.type === 'line' && !s.areaStyle ? { areaStyle: { opacity } } : {})) });
  },
  build: (input, ctx) => gridChartProps({ height: 280, curveType: 'monotone', strokeWidth: 2.5, fillOpacity: 0.25 }, input, ctx),
}) as unknown as DefineSetupFnComponent<AreaChartProps, JcChartEmits>;

export type BarChartProps = Omit<MBarChartProps, 'series'> &
  JcChartRootProps & { series: SeriesWithOptionalColor<BarChartSeries>[] };

/** Raio das barras: `barProps.radius` (como no Recharts) ou 4px no topo/ponta; empilhadas ficam retas. */
function barRadius(props: Input): number | number[] {
  const barProps = props.barProps && typeof props.barProps === 'object' ? (props.barProps as Input) : {};
  const custom = barProps.radius ?? barProps.borderRadius;
  if (Array.isArray(custom)) return custom as number[];
  const stacked = props.type === 'stacked' || props.type === 'percent';
  const r = typeof custom === 'number' ? custom : stacked ? 0 : 4;
  // [sup.-esq., sup.-dir., inf.-dir., inf.-esq.]: arredonda só a ponta da barra
  return props.orientation === 'vertical' ? [0, r, r, 0] : [r, r, 0, 0];
}

/** Gráfico de barras. Padrões: `height` 280, barras com raio 4 (retas se `stacked`/`percent`), pt-BR. */
export const BarChart = defineJcChart('BarChart', MBarChart, {
  props: { type: String, orientation: String, barProps: { type: [Object, Function], default: undefined } },
  themeOptions: (props) => ({ barRadius: barRadius(props) }),
  build: (input, ctx) => gridChartProps({ height: 280 }, input, ctx),
}) as unknown as DefineSetupFnComponent<BarChartProps, JcChartEmits>;

export type CompositeChartProps = Omit<MCompositeChartProps, 'series'> &
  JcChartRootProps & { series: SeriesWithOptionalColor<CompositeChartSeries>[] };

/** Gráfico composto (linha + área + barra). Padrões: `height` 280, curva `monotone`, pt-BR. */
export const CompositeChart = defineJcChart('CompositeChart', MCompositeChart, {
  build: (input, ctx) => gridChartProps({ height: 280, curveType: 'monotone' }, input, ctx),
}) as unknown as DefineSetupFnComponent<CompositeChartProps, JcChartEmits>;

export type RadarChartProps = Omit<MRadarChartProps, 'series'> & JcChartRootProps & { series: SeriesWithOptionalColor<ChartSeries>[] };

/** Gráfico de radar. Padrões: `height` 300, área preenchida a 25% (tema). */
export const RadarChart = defineJcChart('RadarChart', MRadarChart, {
  build: (input, { c }) => ({ height: 300, ...input, series: c.withPalette(asArray(input.series)) }),
}) as unknown as DefineSetupFnComponent<RadarChartProps, JcChartEmits>;

/* ------------------------------------------------------------------ radiais */

export type DonutChartProps = Omit<MDonutChartProps, 'data'> & JcChartRootProps & { data: Optional<PieChartCell, 'color'>[] };

function radialProps(defaults: Input, input: Input, { c, t }: BuildContext): Input {
  const format = asFormatter(input.valueFormatter);
  return {
    // `size` é tipado no Mantine Vue mas não é usado: vira a altura (padrão 160, como no Mantine React)
    height: typeof input.size === 'number' ? input.size : 160,
    // Como no React: `size` define o quadrado do gráfico (largura também), não só a altura
    ...(typeof input.size === 'number' && { width: input.size }),
    withTooltip: true,
    chartLabelFontSize: 14,
    ...defaults,
    ...input,
    valueFormatter: format,
    tooltipProps: itemTooltipProps(input, format),
    chartLabelColor: c.resolve(asString(input.chartLabelColor)) ?? t.text,
    data: c.withPalette(asArray(input.data)),
  };
}

/**
 * Gráfico de rosca. Padrões: altura 160 (ou `size`), tooltip, espaço de 2° entre fatias, pt-BR.
 * Atenção: no Mantine Vue `thickness` é o RAIO INTERNO em % (não a espessura em px do React);
 * o padrão 52 reproduz a proporção do anel do @jcdecor/ui (24px num gráfico de 160px).
 */
export const DonutChart = defineJcChart('DonutChart', MDonutChart, {
  build: (input, ctx) => radialProps({ paddingAngle: 2, thickness: 52 }, input, ctx),
}) as unknown as DefineSetupFnComponent<DonutChartProps, JcChartEmits>;

export type PieChartProps = Omit<MPieChartProps, 'data'> & JcChartRootProps & { data: Optional<PieChartCell, 'color'>[] };

/** Gráfico de pizza. Padrões: altura 160 (ou `size`), tooltip, pt-BR. */
export const PieChart = defineJcChart('PieChart', MPieChart, {
  build: (input, ctx) => radialProps({}, input, ctx),
}) as unknown as DefineSetupFnComponent<PieChartProps, JcChartEmits>;

/* ------------------------------------------------------------------ sparkline */

export type SparklineProps = MSparklineProps & JcChartRootProps;

/** Minigráfico de tendência. Padrões: `height` 48, cor 1 da paleta, preenchimento 30%, traço 2. */
export const Sparkline = defineJcChart('Sparkline', MSparkline, {
  build: (input, { c }) => {
    const trend = input.trendColors as Record<string, string | undefined> | undefined;
    return {
      height: 48,
      curveType: 'monotone',
      fillOpacity: 0.3,
      strokeWidth: 2,
      ...input,
      color: c.resolve(asString(input.color)) ?? c.color(0),
      trendColors: trend && Object.fromEntries(Object.entries(trend).map(([key, color]) => [key, c.resolve(color)])),
    };
  },
}) as unknown as DefineSetupFnComponent<SparklineProps, JcChartEmits>;

/* ------------------------------------------------------------------ demais gráficos (só paleta + tema) */

export type ScatterChartProps = Omit<MScatterChartProps, 'series'> &
  JcChartRootProps & { series: SeriesWithOptionalColor<ScatterChartSeries>[] };

/** Dispersão: séries na paleta da marca, eixos/tooltip do esquema. */
export const ScatterChart = defineJcChart('ScatterChart', MScatterChart, {
  build: (input, { c }) => ({ ...input, series: c.withPalette(asArray(input.series)) }),
}) as unknown as DefineSetupFnComponent<ScatterChartProps, JcChartEmits>;

export type BubbleChartProps = MBubbleChartProps & JcChartRootProps;

/** Bolhas: cor 1 da paleta por padrão. */
export const BubbleChart = defineJcChart('BubbleChart', MBubbleChart, {
  build: (input, { c }) => ({ valueFormatter: ptBRValueFormatter, ...input, color: c.resolve(asString(input.color)) ?? c.color(0) }),
}) as unknown as DefineSetupFnComponent<BubbleChartProps, JcChartEmits>;

export type FunnelChartProps = Omit<MFunnelChartProps, 'data'> & JcChartRootProps & { data: Optional<FunnelChartCell, 'color'>[] };

/** Funil: etapas na paleta da marca. */
export const FunnelChart = defineJcChart('FunnelChart', MFunnelChart, {
  build: (input, { c }) => ({ valueFormatter: ptBRValueFormatter, ...input, data: c.withPalette(asArray(input.data)) }),
}) as unknown as DefineSetupFnComponent<FunnelChartProps, JcChartEmits>;

export type RadialBarChartProps = Omit<MRadialBarChartProps, 'data'> &
  JcChartRootProps & { data: Optional<RadialBarChartCell, 'color'>[] };

/** Barras radiais: itens na paleta da marca. */
export const RadialBarChart = defineJcChart('RadialBarChart', MRadialBarChart, {
  build: (input, { c }) => ({ ...input, data: c.withPalette(asArray(input.data)) }),
}) as unknown as DefineSetupFnComponent<RadialBarChartProps, JcChartEmits>;

export type BarsListProps = MBarsListProps & JcChartRootProps & { textColor?: string };

/**
 * Lista de barras: `barColor` padrão = cor 1 da paleta, rótulos no texto do esquema, ponta arredondada.
 * Limitação do Mantine Vue: `color`/`textColor` por item são ignorados (todas as barras usam `barColor`).
 */
export const BarsList = defineJcChart('BarsList', MBarsList, {
  themeOptions: () => ({ barRadius: [0, 4, 4, 0] }),
  build: (input, { c, t }) => ({
    valueFormatter: ptBRValueFormatter,
    ...input,
    barColor: c.resolve(asString(input.barColor)) ?? c.color(0),
    textColor: c.resolve(asString(input.textColor) ?? asString(input.barTextColor)) ?? t.text2,
  }),
}) as unknown as DefineSetupFnComponent<BarsListProps, JcChartEmits>;

export type HeatmapProps = MHeatmapProps & JcChartRootProps;

/** Mapa de calor (calendário): escala sequencial em horizon (clara→escura no claro; o inverso no escuro). */
export const Heatmap = defineJcChart('Heatmap', MHeatmap, {
  build: (input, { c, scheme }) => ({
    ...input,
    colors: (asArray<string>(input.colors) ?? sequentialColors[scheme]).map((color) => c.resolve(color) ?? color),
  }),
}) as unknown as DefineSetupFnComponent<HeatmapProps, JcChartEmits>;

export type MatrixChartProps = MMatrixChartProps & JcChartRootProps;

/** Matriz de calor: mesma escala sequencial do Heatmap; células vazias na superfície 2. */
export const MatrixChart = defineJcChart('MatrixChart', MMatrixChart, {
  build: (input, { c, t, scheme }) => ({
    ...input,
    colors: (asArray<string>(input.colors) ?? sequentialColors[scheme]).map((color) => c.resolve(color) ?? color),
    emptyColor: c.resolve(asString(input.emptyColor)) ?? t.surface2,
  }),
}) as unknown as DefineSetupFnComponent<MatrixChartProps, JcChartEmits>;

export type GaugeChartProps = Omit<MGaugeChartProps, 'sections'> &
  JcChartRootProps & { sections?: { value: number; color: string }[] };

/** Medidor: preenchimento na cor 1 da paleta, trilho na borda suave, alvo no texto do esquema, pt-BR. */
export const GaugeChart = defineJcChart('GaugeChart', MGaugeChart, {
  build: (input, { c, t }) => ({
    valueFormatter: ptBRValueFormatter,
    ...input,
    filledColor: c.resolve(asString(input.filledColor)) ?? c.color(0),
    trackColor: c.resolve(asString(input.trackColor)) ?? t.borderSoft,
    targetColor: c.resolve(asString(input.targetColor)) ?? t.text,
    sections: asArray<{ color?: string }>(input.sections)?.map((section, index) => ({
      ...section,
      color: c.resolve(section.color) ?? c.color(index),
    })),
  }),
}) as unknown as DefineSetupFnComponent<GaugeChartProps, JcChartEmits>;

export type WaffleChartProps = Omit<MWaffleChartProps, 'data'> & JcChartRootProps & { data: Optional<WaffleChartCell, 'color'>[] };

/** Waffle: segmentos na paleta da marca, células vazias na borda suave. */
export const WaffleChart = defineJcChart('WaffleChart', MWaffleChart, {
  build: (input, { c, t }) => ({
    ...input,
    data: c.withPalette(asArray(input.data)),
    emptyColor: c.resolve(asString(input.emptyColor)) ?? t.borderSoft,
  }),
}) as unknown as DefineSetupFnComponent<WaffleChartProps, JcChartEmits>;

export type TreemapProps = MTreemapProps & JcChartRootProps;

/** Treemap: nós do primeiro nível na paleta da marca (filhos herdam a cor do pai no ECharts). */
export const Treemap = defineJcChart('Treemap', MTreemap, {
  build: (input, { c }) => ({ valueFormatter: ptBRValueFormatter, ...input, data: c.withPalette(asArray<TreemapData>(input.data)) }),
}) as unknown as DefineSetupFnComponent<TreemapProps, JcChartEmits>;

export type SankeyChartProps = MSankeyChartProps & JcChartRootProps;

/** Sankey: nós na paleta da marca (o Mantine Vue ignora `color` dos nós — aqui vira `itemStyle.color`). */
export const SankeyChart = defineJcChart('SankeyChart', MSankeyChart, {
  build: (input, { c }) => {
    const withNodeColors = (nodes: SankeyChartNode[] | undefined) =>
      nodes &&
      c.withPalette(nodes).map((node) => ({
        ...node,
        itemStyle: { color: node.color, ...(node.itemStyle as Input | undefined) },
      }));
    return {
      valueFormatter: ptBRValueFormatter,
      ...input,
      ...(input.nodes !== undefined && { nodes: withNodeColors(asArray(input.nodes)) }),
      ...(input.data !== undefined && { data: withNodeColors(asArray(input.data)) }),
    };
  },
}) as unknown as DefineSetupFnComponent<SankeyChartProps, JcChartEmits>;

export type CandlestickChartProps = MCandlestickChartProps & JcChartRootProps;

/** Candlestick: alta em evergreen, baixa em danger (tom do esquema). */
export const CandlestickChart = defineJcChart('CandlestickChart', MCandlestickChart, {
  build: (input, { c }) => ({
    ...input,
    upColor: c.resolve(asString(input.upColor) ?? 'evergreen'),
    downColor: c.resolve(asString(input.downColor) ?? 'danger'),
  }),
}) as unknown as DefineSetupFnComponent<CandlestickChartProps, JcChartEmits>;
