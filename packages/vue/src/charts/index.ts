export * from './charts';
export * from './ChartCard';
export {
  chartPalette,
  chartColors,
  paletteColor,
  paletteHex,
  withPalette,
  ptBRValueFormatter,
  resolveChartColor,
  useJcChartColors,
} from './palette';
export type { ChartColorScheme, ChartColorTheme, ChartSchemeTokens, JcChartColors } from './palette';
export { createJcEChartsTheme, mergeChartOptions } from './echartsTheme';
export type { JcEChartsTheme, JcEChartsThemeOptions } from './echartsTheme';
// Sem cores próprias (HTML estilizado por CSS — o global.css já cobre o tooltip): reexportados como estão
export { ChartTooltip, ChartLegend } from '@mantine-vue/charts';
export type { ChartSeries, ChartData } from '@mantine-vue/charts';
