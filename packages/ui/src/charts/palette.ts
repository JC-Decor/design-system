import { chartColors, chartPalette } from '../theme/tokens';
import { formatNumber } from '../utils/format';

export { chartColors, chartPalette };

/** Cor da série `index` na paleta da marca (cicla quando acaba). */
export function paletteColor(index: number) {
  return chartPalette[index % chartPalette.length];
}

/** Preenche `color` das séries que não definiram cor, na ordem da paleta JC. */
export function withPalette<T extends { color?: string }>(items: T[]): (T & { color: string })[] {
  return items.map((item, index) => ({ ...item, color: item.color ?? paletteColor(index) }));
}

/** Formatador padrão dos gráficos: números pt-BR (54.959). */
export const ptBRValueFormatter = (value: number) => formatNumber(value);
