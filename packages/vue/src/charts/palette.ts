import { computed, type ComputedRef } from 'vue';
import { useComputedColorScheme, useMantineTheme, type MantineTheme } from '@mantine-vue/core';
import { chartColors, chartPalette, semantic } from '../theme/tokens';
import { formatNumber } from '../utils/format';

export { chartColors, chartPalette };

export type ChartColorScheme = 'light' | 'dark';

/** Tokens semânticos de um esquema (`semantic.light` / `semantic.dark`) como strings. */
export type ChartSchemeTokens = { [K in keyof (typeof semantic)['light']]: string };

/** Parte do tema Mantine que o resolvedor de cores usa. */
export type ChartColorTheme = Pick<MantineTheme, 'colors' | 'primaryShade'> & Partial<Pick<MantineTheme, 'white' | 'black'>>;

/** Cor da série `index` na paleta da marca (cicla quando acaba). Devolve `var(--jc-chart-N)`. */
export function paletteColor(index: number) {
  return chartPalette[index % chartPalette.length];
}

/** Preenche `color` das séries que não definiram cor, na ordem da paleta JC. */
export function withPalette<T extends { color?: string }>(items: T[]): (T & { color: string })[] {
  return items.map((item, index) => ({ ...item, color: item.color ?? paletteColor(index) }));
}

/** Formatador padrão dos gráficos: números pt-BR (54.959). */
export const ptBRValueFormatter = (value: number) => formatNumber(value);

const JC_CHART_VAR = /^var\(\s*--jc-chart-(\d+)\s*(?:,[^)]*)?\)$/;
const MANTINE_COLOR_VAR = /^var\(\s*--mantine-color-([a-z][\w]*)-(\d)\s*\)$/i;
const THEME_COLOR = /^([a-z][\w]*)(?:\.(\d))?$/i;

function primaryShadeFor(theme: ChartColorTheme, scheme: ChartColorScheme): number {
  const shade = theme.primaryShade;
  return typeof shade === 'number' ? shade : (shade?.[scheme] ?? 6);
}

/**
 * Converte qualquer cor aceita pelos wrappers em um valor que o canvas do ECharts entende
 * (o canvas não lê variáveis CSS nem nomes do tema JC):
 * - `undefined`/vazio → `undefined`
 * - `var(--jc-chart-N)` (ou `chartPalette[i]`) → `chartColors[scheme][N-1]`
 * - `horizon`, `horizon.6`, aliases (`blue`, `green`…) → hex de `theme.colors`;
 *   sem tom usa o `primaryShade` do esquema (6 no claro, 4 no escuro)
 * - `var(--mantine-color-horizon-6)` → hex de `theme.colors`
 * - `white` / `black` → `theme.white` / `theme.black`
 * - qualquer outra coisa (hex, rgb, hsl, nomes CSS) passa intacta
 */
export function resolveChartColor(
  color: string | null | undefined,
  theme: ChartColorTheme,
  scheme: ChartColorScheme,
): string | undefined {
  if (typeof color !== 'string') return undefined;
  const value = color.trim();
  if (!value) return undefined;

  const chartVar = JC_CHART_VAR.exec(value);
  if (chartVar) {
    const colors = chartColors[scheme];
    const index = Number(chartVar[1]) - 1;
    return index >= 0 ? colors[index % colors.length] : value;
  }

  const mantineVar = MANTINE_COLOR_VAR.exec(value);
  if (mantineVar) return theme.colors[mantineVar[1]]?.[Number(mantineVar[2])] ?? value;

  if (value === 'white' && theme.white) return theme.white;
  if (value === 'black' && theme.black) return theme.black;

  const themeColor = THEME_COLOR.exec(value);
  if (themeColor) {
    const tuple = theme.colors[themeColor[1]];
    if (tuple) return tuple[themeColor[2] !== undefined ? Number(themeColor[2]) : primaryShadeFor(theme, scheme)] ?? value;
  }

  return value;
}

/** Hex da paleta da marca para o esquema (`index` cicla). */
export function paletteHex(index: number, scheme: ChartColorScheme) {
  const colors = chartColors[scheme];
  return colors[index % colors.length];
}

export interface JcChartColors {
  /** Esquema efetivo (claro/escuro) */
  scheme: ComputedRef<ChartColorScheme>;
  /** Tokens semânticos do esquema atual (texto, superfície, bordas…) */
  tokens: ComputedRef<ChartSchemeTokens>;
  /** Paleta da marca em hex para o esquema atual */
  palette: ComputedRef<readonly string[]>;
  /** `resolveChartColor` no tema e esquema atuais */
  resolve: (color: string | null | undefined) => string | undefined;
  /** Hex da cor `index` da paleta no esquema atual */
  color: (index: number) => string;
  /** Como `withPalette`, mas já com todas as cores resolvidas para hex */
  withPalette: <T extends { color?: string }>(items: T[] | undefined | null) => (T & { color: string })[];
}

/**
 * Cores dos gráficos reativas ao tema: lê `useMantineTheme()` + `useComputedColorScheme()`,
 * então quem usar `resolve`/`palette` dentro de um render recolore ao alternar claro/escuro.
 * Precisa estar dentro do `JcProvider` (ou `MantineProvider`).
 */
export function useJcChartColors(): JcChartColors {
  const theme = useMantineTheme();
  const computedScheme = useComputedColorScheme('light');
  const scheme = computed<ChartColorScheme>(() => (computedScheme.value === 'dark' ? 'dark' : 'light'));
  const tokens = computed<ChartSchemeTokens>(() => semantic[scheme.value]);
  const palette = computed<readonly string[]>(() => chartColors[scheme.value]);
  const resolve = (color: string | null | undefined) => resolveChartColor(color, theme.value, scheme.value);
  const color = (index: number) => paletteHex(index, scheme.value);
  return {
    scheme,
    tokens,
    palette,
    resolve,
    color,
    withPalette: (items) => (items ?? []).map((item, index) => ({ ...item, color: resolve(item.color) ?? color(index) })),
  };
}
