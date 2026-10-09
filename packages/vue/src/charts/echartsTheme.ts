import { chartColors, fontFamily, radius, semantic } from '../theme/tokens';
import type { ChartColorScheme } from './palette';

/** Objeto de tema do ECharts (o mesmo formato de `echarts.registerTheme`). */
export type JcEChartsTheme = Record<string, unknown>;

export interface JcEChartsThemeOptions {
  /** Raio das barras (`itemStyle.borderRadius` do ECharts). Omitido = barras retas. */
  barRadius?: number | number[];
}

type PlainObject = Record<string, unknown>;

const isPlainObject = (value: unknown): value is PlainObject =>
  !!value && typeof value === 'object' && !Array.isArray(value) && Object.getPrototypeOf(value) === Object.prototype;

/** Mescla profunda de objetos simples: `source` vence; arrays e funções são substituídos. */
export function mergeChartOptions<T extends PlainObject>(target: T, source: unknown): T {
  if (!isPlainObject(source)) return target;
  const result: PlainObject = { ...target };
  for (const [key, value] of Object.entries(source)) {
    if (value === undefined) continue;
    result[key] = isPlainObject(value) && isPlainObject(result[key]) ? mergeChartOptions(result[key] as PlainObject, value) : value;
  }
  return result as T;
}

/**
 * Tema do ECharts com os tokens JC Decor para o esquema `scheme`.
 * Os gráficos do Mantine Vue desenham em canvas, onde variáveis CSS (`--ds-*`) não chegam:
 * textos, eixos, grade, legenda e tooltip recebem aqui os hex do tema claro/escuro.
 * Valores definidos explicitamente nas opções do gráfico continuam tendo prioridade.
 * Também serve para quem usa `vue-echarts` direto: `provide(THEME_KEY, createJcEChartsTheme('dark'))`.
 */
export function createJcEChartsTheme(scheme: ChartColorScheme, options: JcEChartsThemeOptions = {}): JcEChartsTheme {
  const s = semantic[scheme];
  const axis = {
    axisLine: { lineStyle: { color: s.borderSoft } },
    axisTick: { show: false, lineStyle: { color: s.borderSoft } },
    axisLabel: { color: s.text3 },
    splitLine: { lineStyle: { color: s.borderSoft, type: [4, 4] } },
    nameTextStyle: { color: s.text3 },
  };
  const label = { color: s.text2 };

  return {
    color: [...chartColors[scheme]],
    backgroundColor: 'transparent',
    // Só a fonte: cor global quebraria o contraste automático dos rótulos internos (pizza, funil, treemap)
    textStyle: { fontFamily },
    title: { textStyle: { color: s.text }, subtextStyle: { color: s.text3 } },
    legend: {
      textStyle: { color: s.text2 },
      inactiveColor: s.border,
      pageTextStyle: { color: s.text3 },
      pageIconColor: s.text2,
      pageIconInactiveColor: s.border,
    },
    // Mesmo visual do `.mantine-ChartTooltip-tooltip` do global.css (o tooltip do ECharts é HTML com estilo inline)
    tooltip: {
      backgroundColor: s.surface,
      borderColor: s.borderSoft,
      borderWidth: 1,
      padding: [8, 12],
      textStyle: { color: s.text, fontFamily, fontSize: 13 },
      extraCssText: `box-shadow: ${s.shadowMd}; border-radius: ${radius.sm};`,
      axisPointer: {
        lineStyle: { color: s.border },
        crossStyle: { color: s.border },
        shadowStyle: { color: s.primarySoft },
      },
    },
    categoryAxis: axis,
    valueAxis: axis,
    logAxis: axis,
    timeAxis: axis,
    // `radar` vale para o componente (eixos/grade) e para a série (preenchimento 25%)
    radar: {
      axisName: { color: s.text2 },
      axisLine: { lineStyle: { color: s.borderSoft } },
      splitLine: { lineStyle: { color: s.borderSoft } },
      splitArea: { show: false },
      areaStyle: { opacity: 0.25 },
      lineStyle: { width: 2 },
    },
    // Rótulos de valor ficam fora da barra/ponto (top/right): texto do tema, não preto fixo
    bar: { label, ...(options.barRadius !== undefined && { itemStyle: { borderRadius: options.barRadius } }) },
    line: { label },
    scatter: { label },
    gauge: { detail: { color: s.text }, title: { color: s.text3 } },
    sankey: { label, lineStyle: { color: 'source', opacity: 0.35 } },
    treemap: { breadcrumb: { itemStyle: { color: s.surface2, borderColor: s.borderSoft, textStyle: { color: s.text2 } } } },
    visualMap: { textStyle: { color: s.text3 } },
    calendar: {
      itemStyle: { color: s.surface2, borderColor: s.surface },
      splitLine: { show: false },
      dayLabel: { color: s.text3 },
      monthLabel: { color: s.text3 },
      yearLabel: { show: false },
    },
    dataZoom: { textStyle: { color: s.text3 }, borderColor: s.borderSoft },
  };
}
