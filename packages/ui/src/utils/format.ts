/** Formatação pt-BR usada pelos componentes (KPIs, tabelas, preços, gráficos). */

export const LOCALE = 'pt-BR';

export function formatNumber(value: number, options?: Intl.NumberFormatOptions) {
  return new Intl.NumberFormat(LOCALE, options).format(value);
}

/** 1234.5 → "R$ 1.234,50" */
export function formatCurrency(value: number, options?: Intl.NumberFormatOptions) {
  return new Intl.NumberFormat(LOCALE, { style: 'currency', currency: 'BRL', ...options }).format(value);
}

/** -5.6 → "-5,6%" (recebe valor em pontos percentuais). `signed` adiciona "+" em positivos. */
export function formatPercent(value: number, { digits = 1, signed = false } = {}) {
  const formatted = new Intl.NumberFormat(LOCALE, {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
    signDisplay: signed ? 'exceptZero' : 'auto',
  }).format(value);
  return `${formatted}%`;
}

/** 54959 → "55 mil" */
export function formatCompact(value: number) {
  return new Intl.NumberFormat(LOCALE, { notation: 'compact', maximumFractionDigits: 1 }).format(value);
}

export function formatDate(value: Date | string | number, options: Intl.DateTimeFormatOptions = { dateStyle: 'short' }) {
  return new Intl.DateTimeFormat(LOCALE, options).format(new Date(value));
}

export function formatTime(value: Date | string | number) {
  return new Intl.DateTimeFormat(LOCALE, { hour: '2-digit', minute: '2-digit' }).format(new Date(value));
}
